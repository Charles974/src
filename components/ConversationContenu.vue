<template>

  <div id="block">
  	<div id="navbar">
  		Vous êtes connecté
  		<button @click="retourConv">Afficher toutes les conversations</button>
  	</div>

	<div class="allChannels">
		<h2>Messages :</h2>
		<conversation-message v-for="unMessage in messages" :unMessage="unMessage"/>
	</div>

  </div>
</template>

<script>
import ConversationMessage from './ConversationMessage.vue'
export default {
  	name: 'conversation-message',
  	components : {ConversationMessage},
	data () {
		return {
      		//messages : []
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
