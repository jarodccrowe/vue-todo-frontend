<template>
  <div>
    <div class="text-md-left text-center">
      <b-button variant="outline-dark" v-show="!formOpen" @click="openForm" >
        <font-awesome-icon class="pointer" size="2x" :icon="['far', 'plus-square']"/>
      </b-button>
    </div>
    <b-form @submit="onSubmit" v-if="formOpen" class="mt-2">
      <b-form-input
        id="input-1"
        v-model="form.name"
        type="text"
        required
        placeholder="Add a new Task or Event"
        v-focus
        class="mb-2"
      ></b-form-input>
      <b-form-radio v-model="form.type" name="some-radios" value="task" class="mb-2">Task</b-form-radio>
      <b-form-radio v-model="form.type" name="some-radios" value="event" class="mb-2">Event</b-form-radio>
      <b-row no-gutters class="mt-3">
        <b-col>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-col>
        <b-col class="text-right">
          <b-button type="button" variant="secondary" @click="closeForm">Close</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const focus = {
  inserted(el) {
    el.focus()
  },
}
export default {
  name: 'AddTaskBase',
  data() {
    return {
      form: {
        name: '',
        type: '',
      }
    }
  },
  directives: { focus },
  computed: {
    ...mapState([
      'formOpen',
    ]),
  },
  methods: {
    openForm() {
      this.$store.dispatch('updateAddTaskFormOpen', true)
    },
    closeForm() {
      this.$store.dispatch('updateAddTaskFormOpen', false)
    },
    onSubmit(evt) {
      evt.preventDefault()
      this.$store.dispatch('addTask', this.form)
    },
  }
}
</script>

<style scoped>
</style>
