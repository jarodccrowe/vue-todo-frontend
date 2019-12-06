<template>
  <div>
    {{type}}
    {{name}}
    {{complete ? 'yes' : 'no'}}
    <button @click="updateTask({ id, complete: !complete })">Complete</button>
    <button @click="deleteTask(id)">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TaskBase',
  props: {
    name: String,
    type: String,
    complete: Boolean,
    id: Number,
  },
  methods: mapActions([
    'updateTask',
    'deleteTask',
  ])
}
</script>

<style scoped>
</style>
