<template>

  <form v-on:submit="seConnecter">
    <div>
      <input type="email" v-model="email" placeholder="Email">
    </div>
    <div>
      <input type="password" v-model="password" placeholder="Password">
    </div>
    <input type="submit" value="Se connecter">
    <router-link to="/membre-creation">Se créer un compte</router-link>
  </form>

</template>

<script>
export default {
  name: 'Connexion',
  data () {
    return {
      email : 'oooo@oooo.oooo',
      password : 'oooo'
    }
  },
	methods : {
	 	seConnecter () {
      //Window rend l'objet global -> accessible partout
	 		window.axios.post('members/signin',{
	 			email : this.email,
        password : this.password,
	 		  }).then((response) => {
          this.$store.commit('setMember', response.data);
	        this.$store.commit('setToken', response.data.token);

          window.axios.defaults.params.token = response.data.token;

          this.$router.push({path : '/conversation'})

	      	}).catch((error) => {
	        	alert(error.response.data.error.join("\n"));
	      });
	 	}
	}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
