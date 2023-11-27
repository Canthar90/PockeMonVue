<template>
  <div class="flex items-center justify-center">
    <div class="grid grid-cols-10 mt-10 mb-10">
      <div class="p-10 col-span-8 col-start-2 bg-red-300 rounded-3xl">
        <div class="flex justify-center justify-items-center">
          <img
            :src="choosenPokemon.sprites.other.home.front_default"
            alt="Pokemon image"
            class="bg-slate-200 rounded-full w-2/5"
          />
        </div>
        <div class="text-6xl flex justify-center pt-2 text-slate-950">
          {{ choosenPokemon.name }}
        </div>
        <div class="text-3xl flex justify-start pt-4 text-slate-950 ml-10">Moves:</div>
        <div class="grid grid-cols-6 mx-10 gap-2 text-xl pt-2">
          <div
            v-for="move in choosenPokemon.moves"
            :key="move.move.name"
            class="bg-red-500 rounded-2xl flex justify-center text-slate-950"
            role="button"
          >
            {{ move.move.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
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
