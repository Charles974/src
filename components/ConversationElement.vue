<template>
  <div class="conv">
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
  border-radius: 0 0 20px 0;
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

a{
  color: black;
  text-decoration: none;
  -webkit-transition-property: color;
  -webkit-transition-duration: 1s;
  -moz-transition-property: color;
  -moz-transition-duration: 1s;
  transition-property: color;
  transition-duration: 1s;
}

a:hover{
  color: blue;
}

</style>
