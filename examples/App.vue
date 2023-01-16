<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./logo.png" /> -->
    <!-- <JSX></JSX>
    <me-loading loading-text="正在加载中。。。"></me-loading>
    <h1>Welcome to My Vue.js UI By WebPack!</h1> -->
    <!-- <test-a></test-a> -->
    <play></play>
  </div>
</template>
<script>
// import JSX from './JSX.vue'
// import testA from './test.vue'
import play from './play.vue'

export default {
  name: 'App',
  components: {
    // JSX,
    // testA,
    play,
  },
  data: function () {
    return {
      arr: [1, 3, 5],
    }
  },
  created() {
    let ab = this.arr.map((n) => n + 1)
    console.log(ab)
  },
  methods: {},
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
