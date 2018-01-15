<template>

  <div id="block">
  	<div id="navbar">
  		Vous êtes connecté
  		<button @click="signout">Se déconnecter</button>
  		<router-link to="/conversation-creation">Creer une conversation</router-link>
  	</div>

	<div class="allChannels">
		<h2>Liste des Channels :</h2>
		<channel v-for="unChannel in channels" :channel="unChannel"></channel>
	</div>

  </div>
</template>

<script>
import channels from './Channels.vue'
export default {
  	name: 'conversation',
  	props : ['channels'],
  	components : (channels),
	data () {
		return {
		}
	},
  	methods : {
	    signout() {
	    	window.bus.$emit('logout')
	    	/*window.axios.delete('members/signout');

        	this.$store.commit('setMember', false);
        	this.$store.commit('setToken', false);

        	this.$router.push({path : '/connexion'})*/
	    },
      recupChannels () {
      //Window rend l'objet global -> accessible partout
      window.axios.get('/channels',{
        label : this.label,
        topic : this.topic,
        }).then((response) => {
          console.log('lol');
        }).catch((error) => {
            console.log(error);
        });
      }
  	}
}
</script>

<style scoped>

#block{
  width: 100%;
}

#navbar{
  width: 100%;
  height: 50px;
  color: white;
  text-align: right;
  background-color: black;
}

.allChannels{
  margin: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.allChannels h2{
  width: 100%;
}

</style>
