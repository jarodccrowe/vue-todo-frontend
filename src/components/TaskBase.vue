<template>
  <div>
    <b-row no-gutters>
      <b-col cols="1">
        <font-awesome-icon
          class="pointer mr-3"
          v-if="!complete"
          size="sm"
          :icon="['far', 'square']"
          @click="updateTask({ id, complete: !complete })"
        />
        <font-awesome-icon
          class="pointer mr-3"
          v-if="complete"
          size="sm"
          :icon="['far', 'check-square']"
          @click="updateTask({ id, complete: !complete })"
        />
      </b-col>
      <b-col>
        <b-row no-gutters>
          <b-col cols="2" md="1">
            <small>
              <b-badge :variant="badgeVariant" class="mr-3 badge--task">{{type | capitalize}}</b-badge>
            </small>
          </b-col>
          <b-col>
            <small>
              {{name}}
            </small>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="text-right" cols="2">
        <font-awesome-icon
          class="pointer mr-3"
          size="xs"
          :icon="['fas', 'pen']"
          @click="updateEditTaskFormOpen({ id: id, isOpen: !editerIsOpen })"
        />
        <font-awesome-icon
          class="pointer"
          size="sm"
          :icon="['far', 'trash-alt']" @click="deleteTask(id)"
        />
      </b-col>
    </b-row>
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
  width: 34px;
  margin-top: -5px;
}
</style>
