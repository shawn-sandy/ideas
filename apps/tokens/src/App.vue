<template>
  <div id="app">
    <color-token></color-token>
  </div>
</template>

<script>
  import ColorToken from './components/color.vue'
  import Axios from "axios"

  export default {
    name: 'App',
    components: {
      ColorToken
    }
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