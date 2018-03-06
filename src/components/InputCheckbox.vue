<template>
  <div>
    <template v-for="(answer, index) in answers">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="checkbox" :value="answer" v-model="checked" @change="onCheck">
        <label class="form-check-label" for="checkbox">
          {{ answer }}
        </label>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: ['answers'],
    data(){
      return {
        checked: []
      }
    },
    computed: {

    },
    methods: {
      onCheck(e) {
        this.$emit('changecheck', this.checked);
      }
    }
  }
</script>
