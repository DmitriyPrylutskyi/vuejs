<template>
  <div>
    <template v-for="(answer, index) in answers">
      <div class="form-check">
        <input class="form-check-input" type="radio" id="radiobutton" name="radiobutton" :value="answer" v-model="picked" @change="onChange">
        <label class="form-check-label" for="radiobutton">
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
        picked: ''
      }
    },
    computed: {

    },
    methods: {
      onChange(e) {
        this.$emit('changeradio', e.target.value);
      }
    }
  }
</script>
