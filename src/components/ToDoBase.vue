<template>
  <div>
    <h5>
      ToDo List
    </h5>
    <div class="mb-2">
      {{ new Date() | moment("dddd, MMMM Do YYYY") }}
    </div>
    <div>
      <div class="text-center pt-3" v-if="loading">
        <b-spinner small label="Small Spinner" type="grow" class="text-info"></b-spinner>
      </div>
      <div class="incomplete-task-list mb-2" v-if="!loading">
        <div v-show="incompleteTasks.length === 0" class="text-muted">
          <small>
            <i>All tasks complete</i>
          </small>
        </div>
        <div v-for="task in incompleteTasks" v-bind:key="task.id" class="task-wrapper">
          <TaskBase v-bind="task"/>
        </div>
      </div>
      <div class="complete-task-list mb-4" v-if="!loading" v-show="completeTasks.length !== 0">
        <div v-for="task in completeTasks" v-bind:key="task.id" class="">
          <TaskBase v-bind="task" class="task"/>
        </div>
      </div>
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
.task-wrapper {
  margin-bottom: 10px;
}
.task-wrapper:last-child {
  margin-bottom: 0
}
.incomplete-task-list {
  background-color:#eee;
  padding: 7px 10px;
  border-radius: 5px;
}
.complete-task-list {
  opacity: 0.5;
  padding: 7px 10px;
}
</style>
