<template>
  <div>
    <h5>
      Tasks
    </h5>
    <div>
      {{ new Date() | moment("dddd, MMMM Do YYYY") }}
    </div>
    <hr />
    <div>
      <div class="text-center pt-3" v-if="loading">
        <b-spinner label="Spinning"></b-spinner>
      </div>
      <div v-for="task in tasks" v-bind:key="task.id">
        <TaskBase v-bind="task" />
      </div>
      <hr />
      <div class="text-center pt-3" v-if="loading">
        <b-spinner label="Spinning"></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TaskBase from './TaskBase.vue'

export default {
  name: 'ToDoBase',
  props: {
    deleteMe: String
  },
  components: {
    TaskBase
  },
  computed: mapState([
    'msg',
    'tasks',
    'loading',
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #04b2e0;
}
</style>
