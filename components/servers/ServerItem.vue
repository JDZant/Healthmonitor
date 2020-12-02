<template>
  <div>
    <base-card>
      <div class="main-container">
        <div class="info-container">
          <h3>{{ name }}</h3>
          <p>Web server: {{ name }}</p>
          <p>Server adress: {{ address }}</p>
          <div>
            Server status: {{ status }}
            <b-icon
              v-if="isOnline"
              icon="exclamation-circle-fill"
              variant="success"
            ></b-icon>
            <b-icon
              v-if="!isOnline"
              icon="exclamation-circle-fill"
              variant="danger"
            ></b-icon>
          </div>
        </div>
        <div class="btn-container">
          <router-link
            tag="button"
            class="badge badge-info"
            :to="{ name: 'global', params: { id: id } }"
            >Info</router-link
          >
          <button v-if="isAdmin" class="badge badge-warning">Reset</button>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
import ProgressBar from "../charts/ProgressBar.vue";

export default {
  props: ["id", "name", "address", "status", "isOnline"],
  computed: {
    isAdmin() {
      return this.$store.getters["userStore/getAdminState"];
    },
  },
};
</script>

<style scoped>
.info-container {
  width: 300px;
  display: inline-block;
}
.btn-container {
  width: 300px;
  height: 150px;
  display: inline-block;
  text-align: right;
  vertical-align: top;
}
.badge-info {
  width: 100px;
  height: 30px;
}

.badge-warning {
  width: 100px;
  height: 30px;
  background-color: #6c757d;
}
</style>
