<template>
  <div>
    <div class="row">
      <div class="col-md-10">
        <font-awesome-icon
          class="pointer mr-3"
          v-if="!complete"
          size="lg"
          :icon="['far', 'square']"
          @click="updateTask({ id, complete: !complete })"
        />
        <font-awesome-icon
          class="pointer mr-3"
          v-if="complete"
          size="lg"
          :icon="['far', 'check-square']"
          @click="updateTask({ id, complete: !complete })"
        />
        <b-badge :variant="badgeVariant" class="mr-3 text-xs badge--task">{{type | capitalize}}</b-badge>
        {{name}}
      </div>
      <div class="col-md-1">
        <font-awesome-icon
          class="pointer"
          size="lg"
          :icon="['fas', 'pen']"
          @click="updateEditTaskFormOpen({ id: id, isOpen: !editerIsOpen })"
        />
      </div>
      <div class="col-md-1">
        <font-awesome-icon class="pointer" size="lg" :icon="['far', 'trash-alt']" @click="deleteTask(id)"/>
      </div>
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
    ...mapActions([
      'updateEditTaskFormOpen',
      'updateTask',
      'deleteTask',
    ])
  }
}
</script>

<style scoped>
.badge--task {
  width: 60px;
  margin-top: -5px;
}
</style>
