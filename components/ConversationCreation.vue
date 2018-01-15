<template>

  <form v-on:submit="newConv">
    <div>
      <input type="text" v-model="label" placeholder="Titre">
    </div>
    <div>
      <input type="text" v-model="topic" placeholder="Description">
    </div>
    <input type="submit" value="Créer une conversation">
  </form>

</template>

<script>
export default {
  name: 'conversation-creation',
  data () {
    return {
      label : '',
      topic : ''
    }
  },
	methods : {
	 	newConv () {
      //Window rend l'objet global -> accessible partout
	 		window.axios.post('/channels',{
	 			label : this.label,
        topic : this.topic,
	 		}).then((response) => {
	 			this.$store.commit('setMember', response.data);
        this.$store.commit('setToken', response.data.token);

        window.axios.defaults.params.token = response.data.token;

        this.$router.push({path : '/conversation'})
      }).catch((error) => {
        console.log(error);
      });
	 	}
	}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
