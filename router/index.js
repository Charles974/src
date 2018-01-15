import Vue from 'vue'
import Router from 'vue-router'
import Connexion from '@/components/Connexion.vue'
import MembreCreation from '@/components/MembreCreation.vue'
import ConversationListe from '@/components/ConversationListe.vue'
import ConversationCreation from '@/components/ConversationCreation.vue'
import ConversationContenu from '@/components/ConversationContenu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/connexion',
      component: Connexion
    },
    {
      path: '/membre-creation',
      component: MembreCreation
    },
    {
      path: '/conversation',
      component: ConversationListe
    },
    {
      path: '/conversation-creation',
      component: ConversationCreation
    },
    {
      path: '/conversation-contenu/:id',
      //name : 'conversation',
      component: ConversationContenu
    }
  ]
})
