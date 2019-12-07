<template>
  <div>
    <div>
      <font-awesome-icon v-if="!complete" size="lg" :icon="['far', 'square']" @click="updateTask({ id, complete: !complete })"/>
      <font-awesome-icon v-if="complete" size="lg" :icon="['far', 'check-square']" @click="updateTask({ id, complete: !complete })"/>
      {{type}}
      {{name}}
      {{complete ? 'yes' : 'no'}}
      <font-awesome-icon size="lg" :icon="['far', 'trash-alt']" @click="deleteTask(id)"/>
      <font-awesome-icon size="lg" :icon="['fas', 'pen']" @click="updateEditTaskFormOpen()"/>
    </div>
    <div>
      <EditTaskBase v-if="editerIsOpen" :id="id" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EditTaskBase from './EditTaskBase.vue'
import _ from 'lodash'
export default {
  name: 'TaskBase',
  components: {
    EditTaskBase
  },
  props: {
    name: String,
    type: String,
    complete: Boolean,
    id: Number,
  },
  computed: {
    editerIsOpen() {
      return _.indexOf(this.$store.state.openEditTaskForms, this.id) > -1
    },
  },
  methods: {
    updateEditTaskFormOpen() {
      this.$store.dispatch('updateEditTaskFormOpen', { id: this.id, isOpen: true })
    },
    ...mapActions([
      'updateTask',
      'deleteTask',
    ])
  }
}
</script>

<style scoped>
</style>
