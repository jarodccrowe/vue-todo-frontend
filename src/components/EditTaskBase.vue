<template>
  <div>
    <b-form @submit="onSubmit" inline>
      <b-form-input
        id="editInput"
        class="form-control-sm"
        v-model="form.name"
        type="text"
        required
        placeholder="Update"
        v-focus
      ></b-form-input>
      <b-button class="btn-sm" type="submit" variant="primary">Update</b-button>
      <b-button class="btn-sm" type="button" variant="secondary" @click="closeForm">Close</b-button>
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
