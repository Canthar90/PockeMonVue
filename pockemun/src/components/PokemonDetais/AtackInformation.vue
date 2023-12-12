<template>
  <div v-if="abilityDetails">
    <div class="bg-red-500 rounded-2xl flex flex-col justify-center text-slate-950 p-2">
      <div class="flex justify-center justify-items-center text-3xl w-full h-full">
        {{ prop.attackName }}:
      </div>
      <div class="flex justify-center justify-items-center text-sm pt-4 px-4">
        {{ abilityEfectEntries }}
      </div>
      <div class="flex justify-center justify-items-center text-sm pt-4 px-4">
        {{ abilityFlavorTextEntries }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'

type AbilityDetails = {
  effect_entries: Array<{ effect: string; language: { name: string }; short_effect: string }>
  flavor_text_entries: Array<{ flavor_text: string; language: { name: string } }>
}

const prop = defineProps({
  attackName: String,
  attackUrl: { type: String, required: true }
})

const abilityDetails = ref<AbilityDetails>()

const abilityEfectEntries = ref<string>()

const abilityFlavorTextEntries = ref<string>()

onBeforeMount(async () => {
  const response = await axios.get(prop.attackUrl)
  abilityDetails.value = response.data

  if (abilityDetails.value) {
    abilityEfectEntries.value = abilityDetails.value.effect_entries.find(
      (elem) => elem.language.name === 'en'
    )?.effect

    abilityFlavorTextEntries.value = abilityDetails.value.flavor_text_entries.find(
      (elem) => elem.language.name === 'en'
    )?.flavor_text
  }
})
</script>
