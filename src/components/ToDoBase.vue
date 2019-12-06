<template>
  <div>
    <h4>
      Tasks
    </h4>
    <small>
      {{ new Date() | moment("dddd, MMMM Do YYYY") }}
    </small>
    <div class="text-center" v-if="loading">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <div v-for="task in tasks" v-bind:key="task.id">
      {{task.type}}
      {{task.name}}
    </div>
    <hr />
    <h4>
      Completed
    </h4>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ToDoBase',
  props: {
    deleteMe: String
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
