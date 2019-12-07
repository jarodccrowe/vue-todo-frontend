<template>
  <div>
    <font-awesome-icon @click="openForm" v-show="!formOpen" class="pointer" size="3x" :icon="['far', 'plus-square']"/>
    <b-form @submit="onSubmit" v-show="formOpen">
      <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="What do you need to do?"
      ></b-form-input>
      <b-form-group>
        <b-form-radio v-model="form.type" name="some-radios" value="task">Task</b-form-radio>
        <b-form-radio v-model="form.type" name="some-radios" value="event">Event</b-form-radio>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="button" variant="secondary" @click="closeForm">Close</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
