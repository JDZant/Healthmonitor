<template>
  <div>
    <base-card class="global-base-card">
      <div class="server-container">
        <div class="server-info-container">
          <h2>{{ selectedServer.name }}</h2>
          <p>Server Address: {{ selectedServer.address }}</p>
          <div>
            <p>
              Server Status: {{ selectedServer.status }}
              <b-icon
                v-if="selectedServer.isOnline"
                icon="exclamation-circle-fill"
                variant="success"
              ></b-icon>
              <b-icon
                v-if="!selectedServer.isOnline"
                icon="exclamation-circle-fill"
                variant="danger"
              ></b-icon>
            </p>
          </div>
          <slot></slot>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ["selectedServer"],
};
</script>

<style scoped></style>
