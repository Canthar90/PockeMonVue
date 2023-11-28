<template>
  <div class="flex items-center justify-center">
    <div class="grid grid-cols-10 mt-10 mb-10">
      <div
        v-if="fetched && choosenPokemon"
        class="p-10 col-span-8 col-start-2 bg-red-300 rounded-3xl"
      >
        <div class="flex justify-center justify-items-center">
          <img
            :src="choosenPokemon.sprites.other['official-artwork'].front_default"
            alt="Pokemon image"
            class="bg-slate-200 rounded-full"
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
            @click="goToPokemonSkill(move.move.name)"
          >
            {{ move.move.name }}
          </div>
        </div>
      </div>

      <div
        v-else
        class="p-10 col-span-8 col-start-2 bg-red-300 rounded-3xl text-slate-950 text-5xl"
      >
        Loading...
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

type Move = {
  move: {
    name: string
    url: string
  }
  version_group_details: Record<string, any>
}

type PokemonDetails = {
  name: string
  moves: Array<Move>
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

const choosenPokemon = ref<PokemonDetails | null>(null)

const fetched = ref(false)

console.log(prop.pokemonName)

onBeforeMount(async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/${prop.pokemonName}`

  const response = await axios.get(url)
  choosenPokemon.value = response.data
  fetched.value = true
})

const goToPokemonSkill = (skillName: string) => {
  console.log(skillName)
}
</script>
