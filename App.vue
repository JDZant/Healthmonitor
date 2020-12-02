<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "../js/components/layout/TheHeader.vue";
import SideBar from "./components/layout/SideBar.vue";
export default {
  components: {
    TheHeader,
    SideBar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
ul li {
  list-style-type: none;
}
</style>
