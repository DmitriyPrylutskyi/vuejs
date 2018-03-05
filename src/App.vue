<template>
  <div class="wrapper">
    <div class="sample">
      <div v-if="!formSubmited">
        <form @submit.prevent="submited()">
          <div class="progress">
            <div class="progress-bar" :style="[width]"></div>
          </div>
          <app-input v-for="(item, index) in info" :key="index" :name="item.name" :value="item.value" :pattern="item.pattern" @changeinput="changeinput(index, $event)">
          </app-input>
          <button class="btn btn-primary" :class="[activate]">
            Send Data
          </button>
        </form>
      </div>
      <div v-else>
        <table class="table table-bordered ">
          <tr v-for="(item, index) in info ">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from './components/Input';

export default {
  data(){
    return {
      info: [
      {
        name: 'Name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/
      },
        {
          name: 'Phone',
          value: '',
          pattern: /^[0-9]{7,14}$/
        },
        {
          name: 'Email',
          value: '',
          pattern: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
        },
        {
          name: 'Some Field 1',
          value: '',
          pattern: /.+/
        },
        {
          name: 'Some Field 2',
          value: '',
          pattern: /.+/
        }
      ],
      complete: 0,
      formValid: false,
      formSubmited: false
    }
  },
  beforeMount() {
    for (let i = 0; i < this.info.length; i++) {
      this.info[i]['valid'] = false;
    }
  },
  methods: {
    changeinput(index, data) {
      this.complete = 0;
      this.info[index].value = data.value;
      this.info[index].valid = data.valid;
      for (let i = 0; i < this.info.length; i++) {
        if (this.info[i].valid) {
          this.complete += 20;
        }
      }
      if (this.complete === 100) this.formValid = true;
    },
    submited() {
      this.formSubmited = true;
    }
  },
  computed: {
    width() {
      return {
        width: this.complete + '%'
      };
    },
    activate() {
      let disabled;
      !this.formValid ? disabled = ['disabled'] : disabled = [''];
      return disabled;
    }
  },
  components: {
    AppInput
  }
}
</script>
