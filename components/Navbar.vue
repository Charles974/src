<template>

  <div id="navbar">
    <h1>Coop: Le site de conversation coopératif</h1>
  	<button @click="signout" class="button">Se déconnecter</button>
  </div>


</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  methods : {
    signout() {
    	window.bus.$emit('logout')
    }
  }

}
</script>

<style scoped>

#navbar{
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

#navbar h1{
  width: 75%;
}

.button{
  width: 25%;
}

</style>
