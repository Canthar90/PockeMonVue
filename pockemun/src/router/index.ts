import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonDetails from '../views/PokemonDetails.vue'
import PokemonSkill from '../views/PokemonSkill.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemon/details/:pokemonName',
      name: 'pokemonDetails',
      component: PokemonDetails,
      props: true
    },
    {
      path: '/pokemon/skill/:skillName',
      name: 'pokemonSkill',
      component: PokemonSkill,
      props: true
    }
  ]
})

export default router
