<template>

  <form v-on:submit="seConnecter">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <input type="submit" value="Se connecter">
      <router-link to="/membre-creation" class="lien">Se créer un compte</router-link>
  </form>

</template>

<script>
export default {
  name: 'Connexion',
  data () {
    return {
      email : '',
      password : ''
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

<style scoped>

form{
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  margin: auto;
  box-sizing: border-box;
  text-align: center;
  background-color: #ADD8E6;
  padding: 2em;
  border-radius: 20px;
}

input{
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

input:nth-child(3){
  margin-top: 1em;
}

.lien{
  margin-top: 1em;
  text-align: center;
  width: 100%;
  color: black;
}

</style>
