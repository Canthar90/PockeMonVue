<template>
  <main>
    <div v-for="pokemon in allPokemons" :key="pokemon.name" class="p-8 bg-slate-500 rounded-xl">
      <h1 class="text-xl text-orange-950">{{ pokemon.name }}</h1>
    </div>
  </main>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'

interface PokemonData {
  name: string
  url: string
}

const allPokemons = ref<PokemonData[]>([])

onBeforeMount(async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=2000'

  const response = await axios.get(url)
  allPokemons.value = response.data.results
})
</script>
