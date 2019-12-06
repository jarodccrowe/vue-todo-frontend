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
        <b-spinner small label="Small Spinner" type="grow" class="text-info"></b-spinner>
      </div>
      <div v-for="task in incompleteTasks" v-bind:key="task.id">
        <TaskBase v-bind="task" />
      </div>
      <hr />
      <div v-for="task in completeTasks" v-bind:key="task.id">
        <TaskBase v-bind="task" />
      </div>
      <hr />
      <div>
        <AddTaskBase />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TaskBase from './TaskBase.vue'
import AddTaskBase from './AddTaskBase.vue'

export default {
  name: 'ToDoBase',
  props: {
    deleteMe: String
  },
  components: {
    TaskBase,
    AddTaskBase,
  },
  computed: {
    ...mapState([
      'msg',
      'loading',
    ]),
    incompleteTasks () {
      return this.$store.getters.incompleteTasks
    },
    completeTasks () {
      return this.$store.getters.completeTasks
    },
  }
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
