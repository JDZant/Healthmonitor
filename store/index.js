import Vue from "vue";
import Vuex from "vuex";
import serverStore from "./modules/serverStore";
import userStore from "./modules/userStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    serverStore,
    userStore,
  },
});
