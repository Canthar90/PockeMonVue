<template>
  <div class="flex items-center justify-center">{{ choosenPokemon }}</div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'

const prop = defineProps({
  pokemonName: {
    type: String,
    required: true
  }
})

const choosenPokemon = ref()

console.log(prop.pokemonName)

onBeforeMount(async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/${prop.pokemonName}`

  const response = await axios.get(url)
  choosenPokemon.value = response.data
})
</script>
