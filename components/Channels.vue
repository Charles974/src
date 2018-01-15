<template>
  <div class="channels">
    <h3>{{ channel.label }}</h3>
    <p>{{ channel.topic }}</p>
  </div>
</template>

<script>

export default {
  name: 'channel',
  props : ['channel'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>