import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonDetails from '../views/PokemonDetails.vue'

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
    }
  ]
})

export default router
