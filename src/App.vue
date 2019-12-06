<template>
  <div id="app" class="container">
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
  created() {
    this.$store.dispatch('loadTasks')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  color: #0a374b;
}
#app-logo {
  width: 100px;
}
</style>
