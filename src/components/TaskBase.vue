<template>
  <div>
    {{type}}
    {{name}}
    {{complete ? 'yes' : 'no'}}
    <button @click="toggleTaskCompleted(id, complete)">Complete</button>
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
    'toggleTaskCompleted',
  ])
}
</script>

<style scoped>
</style>
