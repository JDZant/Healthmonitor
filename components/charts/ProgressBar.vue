<template>
  <div>
    <b-progress
      :value="value"
      :max="max"
      show-progress
      class="mb-3"
    ></b-progress>
  </div>
</template>

<script>
export default {
  props:["value"],
  data() {
    return {
      max: 100,
    };
  },
};
</script>

<style scoped></style>
