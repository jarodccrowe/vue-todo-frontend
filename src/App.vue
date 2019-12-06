<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ToDoBase />
  </div>
</template>

<script>
import ToDoBase from './components/ToDoBase.vue'
import { store } from './store'

export default {
  name: 'app',
  components: {
    ToDoBase
  },
  store,
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
