<template>
  <div>
    <b-form @submit="onSubmit" class="row no-gutters">
      <div class="col-11 offset-1 card p-2">
        <b-form-input
          id="editInput"
          class="form-control-sm"
          v-model="form.name"
          type="text"
          required
          placeholder="What is your new task?"
          v-focus
        ></b-form-input>
        <div class="row mt-2">
          <div class="text-left col-6">
            <b-button size="sm" type="submit" variant="primary">Update Task</b-button>
          </div>
          <div class="text-right col-6">
            <font-awesome-icon
              @click="closeForm"
              class="pointer mt-1"
              :icon="['far', 'times-circle']"
              size="lg"
            />
          </div>
        </div>
      </div>
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
  name: 'EditTaskBase',
  props: {
    id: Number,
  },
  data() {
    return {
      form: {
        name: '',
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
    closeForm() {
      this.$store.dispatch('updateEditTaskFormOpen', { id: this.id, isOpen: false } )
    },
    onSubmit(evt) {
      evt.preventDefault()
      this.$store.dispatch('updateTask', { ...this.form, id: this.id})
      this.closeForm()
    },
  },
}
</script>

<style scoped>
</style>
