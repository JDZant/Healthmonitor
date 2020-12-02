<template>
  <div>
    <alert v-if="logoutIsPressed">
      <p>Are you sure you want to logout?</p>
      <button
        @click="setAdminState"
        type="button"
        class="btn btn-primary btn-sm"
      >
        Yes
      </button>
      <button
        @click="setLogoutIsPressed"
        type="button"
        class="btn btn-secondary btn-sm"
      >
        No
      </button>
    </alert>
    <header>
      <nav>
        <h1>
          Healthmonitor
        </h1>
        <ul>
          <li>
            <router-link
              type="button"
              class="btn btn-secondary btn-lg"
              to="/servers"
              >Manage Servers</router-link
            >
          </li>
          <li>
            <router-link
              type="button"
              class="btn btn-secondary btn-lg"
              v-if="!isAdmin"
              to="/login"
              >Login</router-link
            >
          </li>
          <li>
            <button
              @click="logout"
              v-if="isAdmin"
              type="button"
              class="btn btn-secondary btn-lg"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import Alert from "../../pages/Alert.vue";

export default {
  data() {
    return {};
  },
  components: {
    Alert,
  },
  methods: {
    logout() {
      this.$store.dispatch("userStore/setLogoutIsPressed");
    },
    setLogoutIsPressed() {
      this.$store.dispatch("userStore/setLogoutIsPressed");
    },
    setAdminState() {
      this.$store.dispatch("userStore/setAdminState");
      this.setLogoutIsPressed();
    },
  },

  computed: {
    isAdmin() {
      return this.$store.getters["userStore/getAdminState"];
    },
    logoutIsPressed() {
      return this.$store.getters["userStore/getLogoutIsPressed"];
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #575756;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #000000;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #ffffff;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.btn-sm {
  width: 160px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
