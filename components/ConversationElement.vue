<template>
  <div>
    <h3>{{ channel.label }}</h3>
    <p>{{ channel.topic }}</p>
  </div>
</template>

<script>

export default {
  name: 'conversation-element',
  props : ['channel'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>