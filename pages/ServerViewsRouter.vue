<template>
  <div>
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "../components/layout/SideBar.vue";
export default {
  components: { SideBar },
  data() {
    return {};
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
@media (max-width: 768px) {
  #page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
    margin-left: 0px;
  }
}
</style>
