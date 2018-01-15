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
      window.axios.defaults.params.token = this.$store.state.token;
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

html{
  height: 100%;
}

body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

#app{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}

</style>
