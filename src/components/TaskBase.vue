<template>
  <div>
    <b-row no-gutters>
      <b-col cols="1 checkbox-wrapper">
        <font-awesome-icon
          test-data-completetask
          class="pointer mr-3"
          v-if="!complete && !loading"
          :icon="['far', 'square']"
          @click="updateTask({ id, complete: !complete })"
        />
        <font-awesome-icon
          class="pointer mr-3"
          v-if="complete && !loading"
          :icon="['far', 'check-square']"
          @click="updateTask({ id, complete: !complete })"
        />
        <b-spinner v-if="loading" small label="Small Spinner" type="grow" class="text-info"></b-spinner>
      </b-col>
      <b-col>
        <b-row no-gutters>
          <b-col cols="2" md="1" class="mr-3">
            <b-badge :variant="badgeVariant" class="badge--task">{{type | capitalize}}</b-badge>
          </b-col>
          <b-col class="label-wrapper">
              {{name}}
          </b-col>
        </b-row>
      </b-col>
      <b-col class="text-right" cols="2">
        <font-awesome-icon
          v-if="!complete"
          test-data-edittask
          class="pointer mr-3"
          size="sm"
          :icon="['fas', 'pen']"
          @click="updateEditTaskFormOpen({ id: id, isOpen: !editerIsOpen })"
        />
        <font-awesome-icon
          test-data-deletetask
          class="pointer"
          :icon="['far', 'trash-alt']" @click="deleteTask(id)"
        />
      </b-col>
    </b-row>
    <div>
      <EditTaskBase v-if="editerIsOpen" :id="id" class="pt-2" />
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
    loading: Boolean,
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
  width: 43px;
}
.trash-button:hover {
  color: red;
}
.edit-button:hover {
  color: grey;
}
.checkbox-wrapper {
  padding-top: 0.15rem;
}
.label-wrapper {
  padding-top: 0.10rem;
}
</style>
