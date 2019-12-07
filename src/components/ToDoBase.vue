<template>
  <div>
    <h5>
      ToDo List
    </h5>
    <div>
      {{ new Date() | moment("dddd, MMMM Do YYYY") }}
    </div>
    <hr />
    <div>
      <div class="text-center pt-3" v-if="loading">
        <b-spinner small label="Small Spinner" type="grow" class="text-info"></b-spinner>
      </div>
      <div>
        <div v-show="incompleteTasks.length === 0" class="text-muted">
          <small>
            <i>All tasks complete</i>
          </small>
        </div>
        <div v-for="task in incompleteTasks" v-bind:key="task.id" class="mb-2">
          <TaskBase v-bind="task" />
        </div>
      </div>
      <hr />
      <div class="incomplete-task-list">
        <div v-for="task in completeTasks" v-bind:key="task.id" class="mb-2">
          <TaskBase v-bind="task" />
        </div>
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
.incomplete-task-list {
  opacity: 0.5;
}
</style>
