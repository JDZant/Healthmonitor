const state = {
  isAdmin: false,
  logoutIsPressed: false,
  admins: [
    {
      email: "jos@deboprojects.nl",
      password: "admin",
    },
    {
      email: "dylan@deboprojects.nl",
      password: "admin",
    },
  ],
};

const getters = {
  getAdminList: (state) => {
    return state.admins;
  },
  getAdminState(state) {
    return state.isAdmin;
  },
  getLogoutIsPressed(state) {
    return state.logoutIsPressed;
  },
};

const mutations = {
  SET_ADMIN_STATE(state) {
    state.isAdmin = !state.isAdmin;
    console.log("Admin:");
    console.log(state.isAdmin);
  },
  SET_LOGOUT_IS_PRESSED() {
    state.logoutIsPressed = !state.logoutIsPressed;
    console.log("LogoutIsPressed:");
    console.log(state.logoutIsPressed);
  },
};

const actions = {
  setAdminState(context) {
    context.commit("SET_ADMIN_STATE");
  },
  setLogoutIsPressed(context) {
    context.commit("SET_LOGOUT_IS_PRESSED");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
