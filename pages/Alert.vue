<template>
  <div>
    <dialog open>
      <slot></slot>
    </dialog>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
  z-index: 999;
  position: fixed;
  text-align: center;
  top: 20vh;
  height: 23%;
  width: 27%;
  background-color: #575756;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 4rem;
  color: white;
}
</style>
