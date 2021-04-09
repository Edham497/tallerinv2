import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const sesion = JSON.parse(localStorage.getItem("$usr")) /*|| {
  username: 'Nombre de Prueba',
  codigo: '23e62d5462d3468'
};*/

export default new Vuex.Store({
  state: {
    $sesion: sesion,
    loading: false
  },
  mutations: {
    saveSesion(state, usr){
      state.$sesion = usr
      localStorage.setItem('$usr', JSON.stringify(usr))
    },
    deleteSesion(state){
      state.$sesion = null
    },
    init_load(state){
      state.loading = true
    },
    stop_load(state){
      state.loading = false
    }
  },
  actions: {
    cerrarSesion({commit}){
      localStorage.clear()
      commit('deleteSesion')
    }
  },
  getters: {
    isLogged: (state) => {
      return state.$sesion ? true : false;
    },
    username: (state) => {
      return state.$sesion.nombre[0]
    },
    fullName: (state) => {
      return state.$sesion.nombre
    },
    codigo: state => {
      return state.$sesion.codigoINE
    },
    loading: state => {
      return state.loading
    }
  },
});
