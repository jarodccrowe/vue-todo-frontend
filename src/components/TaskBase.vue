<template>
  <div>
    <div>
      <font-awesome-icon class="pointer" v-if="!complete" size="lg" :icon="['far', 'square']" @click="updateTask({ id, complete: !complete })"/>
      <font-awesome-icon class="pointer" v-if="complete" size="lg" :icon="['far', 'check-square']" @click="updateTask({ id, complete: !complete })"/>
      <b-badge :variant="badgeVariant">{{type | capitalize}}</b-badge>
      {{name}}
      <font-awesome-icon class="pointer" size="lg" :icon="['fas', 'pen']" @click="updateEditTaskFormOpen()"/>
      <font-awesome-icon class="pointer" size="lg" :icon="['far', 'trash-alt']" @click="deleteTask(id)"/>
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
    badgeVariant() {
      return this.type === "event" ? "success" : "info"
    }
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
