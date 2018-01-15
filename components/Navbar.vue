<template>

  <div>Vous êtes connecté
  	<button @click="signout">Se déconnecter</button>
  	
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
