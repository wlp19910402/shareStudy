import Vue from 'vue';
// vuex - 1引入
import Vuex from 'vuex';
// vuex - 2添加到vue身上
Vue.use(Vuex);

export default new Vuex.Store(
  {
    state: {
      num: 90,
      name: "wangliPing"
    },
    getters: {
      CL_Name (state) {
        return state.name.charAt(0).toUpperCase() + state.name.slice(1).toLowerCase();
      }
    },
    mutations: {
      add (state, count) {
        state.num += count
      }
    },
    actions: {
      add ({ commit }, count) {
        commit('add', count)
      }
    }
  }
)