<template>
  <div>
    {{data.type}}
    {{data.name}}
  </div>
</template>

<script>

export default {
  name: 'TaskBase',
  props: {
    data: {
      name: String,
      type: String,
    }
  },
}
</script>

<style scoped>
</style>
