<template>
  <div class="form-group ">
    <label>{{ name }}</label> <i v-show="value!=''" :class="validClass" aria-hidden="true "></i>
    <input type="text " class="form-control " :value="value" @input="onInput">
  </div>
</template>

<script>
    export default {
      props: ['name', 'value', 'pattern'],
      data(){
        return {
        }
      },
      computed: {
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
        }
      }
    }
</script>
