<template>
  <div class="form-group ">
    <label>{{ info[index].name }}</label> <i v-show="info[index].value!=''" :class="validClass" aria-hidden="true "></i>
    <input type="text " class="form-control " v-model="input">
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  props: ['index']

  export default {
    data(){
      return {
      }
    },
    computed: {
      ...mapGetters([
        'info'
      ]),
      input: {
        get() {
          return this.$store.getters.input
        },
        set(value){
          this.$store.commit('setInput', {
            index: this.key,
            value: value,
            valid: this.pattern.test(value)
          });
        }
      },
      validClass() {
        return (this.pattern.test(this.value)) ? ['fa fa-check-circle', 'valid'] : ['fa fa-info-circle', 'novalid'];
      }
    },
    methods: {
      onInput(e) {
        this.$emit('changeinput', {
          value: e.target.value,
          valid: this.pattern.test(e.target.value)
        });
        this.$store.dispatch('sendInput', {
            value: e.target.value,
            valid: this.pattern.test(e.target.value)
          });
        }
    }
  }
</script>
