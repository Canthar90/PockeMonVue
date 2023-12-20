<template>
  <div
    class="w-full h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center transition-all ease-in duration-300"
    :class="{
      'opacity-0 translate-y-full': loadingFlag === false,
      'opacity-1 translate-y-0': loadingFlag === true
    }"
    style="
      background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0906b988-7e73-42cc-9161-23f7d070a0e0/derph79-29509d72-4009-4bf6-863a-8877f9935b27.jpg/v1/fill/w_1154,h_692,q_70,strp/pokemon_generation_3_megas_by_mcgmark_derph79-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMDkwNmI5ODgtN2U3My00MmNjLTkxNjEtMjNmN2QwNzBhMGUwXC9kZXJwaDc5LTI5NTA5ZDcyLTQwMDktNGJmNi04NjNhLTg4NzdmOTkzNWIyNy5qcGciLCJ3aWR0aCI6Ijw9MTUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rCdwYcjK24jB0jGKTm-9sQBQtk4pbpgVox6b4kUiORg');
    "
  >
    <div>
      <h1
        class="text-4xl text-center text-slate-950 transition-all ease-in-out duration-700"
        :class="{
          ['opacity-0 translate-x-full']: loadingFlag === false,
          'opacity-1 translate-x-0': loadingFlag === true
        }"
      >
        Pokémon World Encyclopedia
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'

const loadingFlag = ref(false)

onMounted(() => {
  setTimeout(() => (loadingFlag.value = true), 500)
})

onBeforeUnmount(() => {
  loadingFlag.value = false
})
</script>
