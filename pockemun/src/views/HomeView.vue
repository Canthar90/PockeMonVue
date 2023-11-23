<template>
  <div
    class="w-full h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center"
    style="
      background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0906b988-7e73-42cc-9161-23f7d070a0e0/derph79-29509d72-4009-4bf6-863a-8877f9935b27.jpg/v1/fill/w_1154,h_692,q_70,strp/pokemon_generation_3_megas_by_mcgmark_derph79-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMDkwNmI5ODgtN2U3My00MmNjLTkxNjEtMjNmN2QwNzBhMGUwXC9kZXJwaDc5LTI5NTA5ZDcyLTQwMDktNGJmNi04NjNhLTg4NzdmOTkzNWIyNy5qcGciLCJ3aWR0aCI6Ijw9MTUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rCdwYcjK24jB0jGKTm-9sQBQtk4pbpgVox6b4kUiORg');
    "
  >
    <div>
      <h1 class="text-4xl text-center text-slate-950">Pokémon World Encyclopedia</h1>
    </div>
  </div>
  <div
    class="w-full h-full bg-center bg-cover bg-fixed"
    style="
      background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0906b988-7e73-42cc-9161-23f7d070a0e0/denz7q5-4f9de708-5595-44e8-9f4e-98de7c6fb70d.jpg/v1/fill/w_1119,h_714,q_70,strp/eevee_and_friends_by_mcgmark_denz7q5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvMDkwNmI5ODgtN2U3My00MmNjLTkxNjEtMjNmN2QwNzBhMGUwXC9kZW56N3E1LTRmOWRlNzA4LTU1OTUtNDRlOC05ZjRlLTk4ZGU3YzZmYjcwZC5qcGciLCJ3aWR0aCI6Ijw9MTI1NCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vSotdBuEHXKKlyxSbHtHu65ButZbGBOviGsdmjAqokk');
    "
  >
    <div class="grid grid-cols-10">
      <div class="col-start-3 col-span-6">
        <div class="p-2 bg-red-500 rounded-xl mt-4">
          <p class="text-orange-100 text-lg text-center mx-10">
            Welcome to our Pokémon Hub! Explore our extensive list of Pokémon, featuring all your
            favorite characters from the world of Pokémon. Discover detailed information, stats, and
            abilities for each Pokémon, and embark on an exciting journey through generations of
            captivating creatures. Start your Pokémon adventure now!
          </p>
        </div>
        <div class="flex justify-center justify-items-center mt-4">
          <div class="grid grid-cols-8 p-2 justify-items-center gap-8">
            <div v-for="pokemon in allPokemons" :key="pokemon.name" role="button">
              <div class="p-2 bg-red-500 rounded-xl">
                <h1 class="flex flex-auto text-md text-orange-100 p-2">{{ pokemon.name }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
