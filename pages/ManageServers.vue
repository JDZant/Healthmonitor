<template>
  <div>
    <server-item
      v-for="server in servers"
      :key="server.id"
      :id="server.id"
      :name="server.name"
      :address="server.address"
      :status="server.status"
      :isOnline="server.isOnline"
    ></server-item>
    
  </div>
</template>

<script>
import ServerItem from "../components/servers/ServerItem";
export default {
  data() {
    return {
      servers: this.$store.getters["serverStore/getServerList"],
    };
  },
  methods: {
    setLogoutIsPressed() {
      this.$store.dispatch("userStore/setLogoutIsPressed");
    },
    setAdminState() {
      this.$store.dispatch("userStore/setAdminState");
      this.setLogoutIsPressed();
    },
  },
  computed: {
    logoutIsPressed() {
      return this.$store.getters["userStore/getLogoutIsPressed"];
    },
  },
  components: {
    ServerItem,
  },
};
</script>

<style scoped></style>
