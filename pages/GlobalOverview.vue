<template>
  <div>
    <side-bar></side-bar>
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <div class="title-container">
          <h1>Global Overview</h1>
        </div>
        <div class="row"></div>
        <server-detail :selectedServer="selectedServer">
          <div>
            <div>
              <p>CPU Usage: {{ selectedServer.cpu }}</p>
              <progress-bar :value="selectedServer.cpu"></progress-bar>
            </div>
            <div>
              <p>RAM Usage: {{ selectedServer.ram }}</p>
              <progress-bar :value="selectedServer.ram"></progress-bar>
            </div>
            <div>
              <p>Disk Usage: {{ selectedServer.disk }}</p>
              <progress-bar :value="selectedServer.disk"></progress-bar>
            </div>
          </div>
          <div class="button-container">
            <button v-if="isAdmin" type="button" class="btn btn-primary btn-sm">
              Restart
            </button>
             <button v-if="isAdmin" type="button" class="btn btn-primary btn-sm">
              Shutdown
            </button>
          </div>
        </server-detail>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "../components/charts/ProgressBar.vue";
import SideBar from "../components/layout/SideBar.vue";
import ServerDetail from "../components/servers/ServerDetail.vue";

export default {
  components: {
    SideBar,
    ServerDetail,
    ProgressBar,
  },
  data() {
    return {
      selectedServer: null,
      id: this.$route.params.id,
      servers: this.$store.getters["serverStore/getServerList"],
    };
  },
  computed: {
    isAdmin() {
      return this.$store.getters["userStore/getAdminState"];
    },
  },

  created() {
    this.selectedServer = this.servers.find((server) => server.id === this.id);
  },
};
</script>

<style scoped>
#page-content-wrapper {
  width: 80%;
  position: absolute;
  padding: 15px;
  margin-left: 250px;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}

.global-base-card {
  width: 300px;
  margin-top: 1000px;
}
.button-container {
  text-align: center;
}

.title-container {
  text-align: center;
}

.btn {
  width: 100px;
}

.btn-sm{
  background-color:#6c757d;
}

@media (max-width: 768px) {
  #page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
    margin-left: 0px;
  }
}
</style>
