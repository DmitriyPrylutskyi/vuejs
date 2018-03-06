<template>
  <div class="wrapper">
    <div class="sample">
      <div v-if="step != 2">
        <form @submit.prevent="nextQuestion()">
          <template v-for="(item, index) in info">
            <template v-if="index == step">
              <h2>{{ item.title }}</h2>
              <app-input-radio v-if="item.type == 'radio'" :key="index" :answers="item.answers" @changeradio="changeradio($event)">
              </app-input-radio>
              <app-input-checkbox v-if="item.type == 'checkbox'" :key="index" :answers="item.answers" @changecheck="changecheck($event)">
              </app-input-checkbox>
              <button class="btn btn-primary" :class="[activate]">
                Далее
              </button>
            </template>
          </template>
        </form>
      </div>
      <div v-else>
        <table class="table table-bordered ">
          <tr v-for="(item) in info ">
            <td>{{ item.title }}</td>
            <td>{{ item.answer }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AppInputRadio from './components/InputRadio';
import AppInputCheckbox from './components/InputCheckbox';

export default {
  data(){
    return {
      info: [
        {
          type: 'radio',
          title: 'Какой тег задаёт ссылку?',
          answers: [
            'a',
            'div',
            'span',
            'img'
          ],
          answer: ''
        },
        {
          type: 'checkbox',
          title: 'Какие из  этих тегов строчные?',
          answers: [
            'a',
            'div',
            'span',
            'img'
          ],
          answer: ''
        }
      ],
      step: 0
    }
  },
  methods: {
    changeradio(value) {
      this.info[this.step]['answer'] = value;
    },
    changecheck(value) {
      this.info[this.step]['answer'] = value;
    },
    nextQuestion() {
      this.step++;
    }
  },
  computed: {
    activate() {
      let disabled;
      !this.info[this.step]['answer'] ? disabled = ['disabled'] : disabled = ['']
      return disabled;
    }
  },
  components: {
    AppInputRadio,
    AppInputCheckbox
  }
}
</script>
