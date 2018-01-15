<template>
  <div id="convliste">
    <navbar></navbar>
  	<div class="allChannels">
  		<h2>Liste des Channels :</h2>
      <router-link to="/conversation-creation" class="creation">Créer une conversation</router-link>
  		<conversation-element v-for="channel in channels" :channel="channel"/>
    </div>
  </div>
</template>

<script>
import ConversationElement from './ConversationElement.vue'
import Navbar from './Navbar.vue'
export default {
  	name: 'conversation-liste',
  	components : {ConversationElement, Navbar},
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

#convliste{
  width: 100%;
  box-sizing: border-box;
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

.lien{
  color: white;
  -webkit-transition-property: color;
	-webkit-transition-duration: 1s;
	-moz-transition-property: color;
	-moz-transition-duration: 1s;
	transition-property: color;
	transition-duration: 1s;
}

.lien:hover{
  color: orange;
}

.creation{
  width: 100%;
}

</style>
