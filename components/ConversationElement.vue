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

.conv{
  width: 15%;
  box-sizing: border-box;
  background-color: #ADD8E6;
  margin-top: 1em;
  margin-left: 3.571428571%;
}

p{
  width: 100%;
  font-size: 0.8em;
  text-align: center;
}

h3{
  width: 100%;
  font-size: 1em;
  text-align: center;
}

</style>
