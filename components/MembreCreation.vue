<template>

  <form v-on:submit="creerMembre">
    <div>
      <input type="text" v-model="fullname" placeholder="Fullname">
    </div>
    <div>
      <input type="email" v-model="email" placeholder="Email">
    </div>
    <div>
      <input type="password" v-model="password" placeholder="Password">
    </div>
    <input type="submit" value="Enregistrer">
    <router-link to="/connexion">Annuler</router-link>
  </form>

</template>

<script>
export default {
  name: 'membre-creation',
  data () {
    return {
      fullname : '',
      email : '',
      password : ''
    }
  },
  methods : {
    creerMembre() {
      window.axios.post('members', {
        fullname : this.fullname,
        email : this.email,
        password : this.password
      }).then((response) => {
        this.$router.push({path : '/connexion'})
      }).catch((error) => {
        //console.log(error.response.data);
        alert(error.response.data.error.join("\n"));
      });
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
