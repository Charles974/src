<template>

  <div id="block">
  	<div id="navbar">
  		Vous êtes connecté
  		<button @click="signout">Se déconnecter</button>
  		<router-link to="/conversation-creation">Créer une conversation</router-link>
  	</div>

	<div class="allChannels">
		<h2>Liste des Channels :</h2>
		<conversation-element v-for="channel in channels" :channel="channel"/>
	</div>

  </div>
</template>

<script>
import ConversationElement from './ConversationElement.vue'
export default {
  	name: 'conversation-liste',
  	components : {ConversationElement},
	data () {
		return {
      channels : []
		}
	},
  mounted() {
      window.axios.get('/channels',{
        label : this.label,
        topic : this.topic,
      }).then((response) => {
        this.channels = response.data;
      }).catch((error) => {
          console.log(error);
      });
  },
  methods : {
      signout() {
        window.bus.$emit('logout')
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
