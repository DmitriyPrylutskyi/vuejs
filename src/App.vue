<template>
  <div class="wrapper">
    <div class="sample">
      <transition name="boom" appear>
        <div v-if="!formSubmited" key="form">
          <form @submit.prevent="submited()">
            <div class="progress">
              <div class="progress-bar" :style="[width]"></div>
            </div>
            <app-input v-for="(item, index) in info" :key="index" :index="index" @changeinput="changeinput(index, $event)">
            </app-input>
            <button class="btn btn-primary" :class="[activate]">
              Send Data
            </button>
          </form>
        </div>
        <div v-else key="table">
          <table class="table table-bordered ">
            <tbody>
              <tr v-for="(item, index) in info ">
                <td>{{ item.name }}</td>
                <td>{{ item.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import AppInput from './components/Input';

export default {
  data(){
    return {
      formValid: false,
      formSubmited: false
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
    ...mapGetters([
      'info',
      'complete'
    ]),
    width() {
      console.log(this.info);
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

<style>
  .boom-enter{

  }

  .boom-enter-active{
    animation-name: bounceInUp;
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .boom-enter-to{

  }

  .boom-leave{

  }

  .boom-leave-active{
    animation-name: bounceOutDown;
    animation-duration: .5s;
    animation-fill-mode: both;
  }

  .boom-leave-to{

  }

  @keyframes bounceInUp {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }

    75% {
      transform: translate3d(0, 10px, 0);
    }

    90% {
      transform: translate3d(0, -5px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }

    40%, 45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }

    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }

</style>
