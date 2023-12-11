<template>
  <div class="text-slate-950">
    <div class="grid grid-cols-3 gap-5 text-lg pt-4 pb-2">
      <div class="text-xl bg-orange-600 rounded-xl flex justify-center">Types:</div>
      <div
        v-for="type in types"
        :key="type.type.name"
        class="bg-orange-600 rounded-xl flex justify-center"
      >
        {{ type.type.name }}
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5 text-lg pt-4 pb-2">
      <div class="text-xl bg-orange-600 rounded-xl flex justify-center">Statistics:</div>
      <div
        v-for="stat in stats"
        :key="stat.stat.name"
        class="bg-orange-600 rounded-xl flex justify-center"
      >
        {{ stat.stat.name }}: {{ stat.base_stat }}
      </div>
      <div class="bg-orange-600 rounded-xl flex justify-center">weigth: {{ weigth }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  types: Array<{ type: { name: string } }>,
  stats: Array<{ base_stat: number; stat: { name: string } }>,
  weigth: String
})
</script>
