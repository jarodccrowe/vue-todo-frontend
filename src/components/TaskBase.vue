<template>
  <div>
    <div>
      {{type}}
      {{name}}
      {{complete ? 'yes' : 'no'}}
      <b-button class="btn-sm" @click="updateTask({ id, complete: !complete })">Complete</b-button>
      <b-button class="btn-sm" @click="deleteTask(id)">Delete</b-button>
      <b-button class="btn-sm" @click="updateEditTaskFormOpen()">Edit</b-button>
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
