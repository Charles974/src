<template>

  <div id="block">
  	<navbar></navbar>
	<div class="allChannels">
		<h2>Messages :</h2>
		<conversation-message v-for="unMessage in messages" :unMessage="unMessage"/>
	</div>

  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  	name: 'conversation-message',
  	components : {Navbar},
	data () {
		return {
      		messages : []
		}
	},
  mounted() {
      console.log("affichage");
  },
  methods : {
      
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
