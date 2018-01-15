<template>

  <form v-on:submit="creerMembre">
    <input type="text" v-model="fullname" placeholder="Fullname">
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <input type="submit" value="Enregistrer">
    <router-link to="/connexion" class="lien">Annuler</router-link>
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

input:nth-child(4){
  margin-top: 1em;
}

.lien{
  margin-top: 1em;
  text-align: center;
  width: 100%;
  color: black;
}

</style>
