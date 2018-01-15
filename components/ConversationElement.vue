<template>
  <div>
    <router-link :to="{name: 'conversation', params : {id:channel._id} }">
      <h3>{{ channel.label }}</h3>
    </router-link>
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