<template>
  <div id="app">
    
    <router-view></router-view>

  </div>
</template>

<script>

  import MembreCreation from './components/MembreCreation.vue'
  import Connexion from './components/Connexion.vue'

export default {
  name: 'app',
  components : { MembreCreation, Connexion },
  mounted() {
    if (this.$store.state.member){

    }
    else{
      this.$router.push({path : '/connexion'})
    }
      window.bus.$on('logout', () => {
      window.axios.delete('members/signout');

      this.$store.commit('setMember', false);
      this.$store.commit('setToken', false);

      this.$router.push({path : '/connexion'})
    });

  }
}
</script>

<style>

</style>
