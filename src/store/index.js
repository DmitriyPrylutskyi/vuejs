import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
    info: [
      {
        name: 'Name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/,
        valid: false
      },
      {
        name: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/,
        valid: false
      },
      {
        name: 'Email',
        value: '',
        pattern: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
      },
      {
        name: 'Some Field 1',
        value: '',
        pattern: /.+/,
        valid: false
      },
      {
        name: 'Some Field 2',
        value: '',
        pattern: /.+/,
        valid: false
      }
    ],
    complete: 0
	},
	getters: {
		info(state){
			return state.info;
		},
		complete(state){
			return state.complete;
		},
    input(state) {
      return state.info.value;
    }
	},
	mutations: {
		setInput(state, data){
			state.info[data.index].value = data.value;
			state.info[data.index].valid = data.valid;
		}
	},
	actions: {
		sendInput(store, payload){
			store.commit('orderSend');

			setTimeout(() => {
				console.log(payload);
				store.commit('orderDone');
			}, 1000);
		}
	},
	strict: process.env.NODE_ENV !== 'production'
});
