<template>
  <div id="example-1">
    <button @click="show = !show">Toggle render</button>
    <transition name="fade">
      <p v-if="show" class="c6">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'testA',
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
