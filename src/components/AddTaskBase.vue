<template>
  <div>
    <b-form @submit="onSubmit">
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
    </b-form>
  </div>
</template>

<script>
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
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$store.dispatch('addTask', this.form)
    },
  }
}
</script>

<style scoped>
</style>
