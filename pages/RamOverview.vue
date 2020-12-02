<template>
  <div>
    <side-bar></side-bar>
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <div class="title-container">
          <h1>RAM Overview</h1>
        </div>
        <div class="row">
          <base-card>
            <div class="server-container">
              <div class="server-info-container">
                <h2>{{ selectedServer.name }}</h2>
                <p>RAM Usage: {{ selectedServer.ram }}</p>
                <progress-bar :value="selectedServer.ram"></progress-bar>
              </div>
            </div>
          </base-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/layout/SideBar.vue";
import ServerDetail from "../components/servers/ServerDetail.vue";
import ProgressBar from "../components/charts/ProgressBar.vue";

export default {
  components: { SideBar, ServerDetail, ProgressBar },
  data() {
    return {
      selectedServer: null,
      id: this.$route.params.id,
      servers: this.$store.getters["serverStore/getServerList"],
    };
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

.btn {
  width: 100px;
}

.title-container {
  text-align: center;
}

.server-info-container {
  width: 400px;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
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

ServerDetail
