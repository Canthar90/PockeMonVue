<template>
  <div class="fixed z-50 pl-4 pt-4">
    <router-link to="/">
      <img
        class="w3/4 hover:animate-ping"
        role="button"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/664c73aa-a779-47f5-b467-6e388e7656ff/d2srpas-63eef21d-92f7-406a-866e-e6983d7f44dc.png/v1/fill/w_100,h_100/100_x_100_pokewalker_by_wolfshadowxd_d2srpas-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwIiwicGF0aCI6IlwvZlwvNjY0YzczYWEtYTc3OS00N2Y1LWI0NjctNmUzODhlNzY1NmZmXC9kMnNycGFzLTYzZWVmMjFkLTkyZjctNDA2YS04NjZlLWU2OTgzZDdmNDRkYy5wbmciLCJ3aWR0aCI6Ijw9MTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.cqg8HwkEi9nAInvU-liasGdtxcQspLtshzkIpBZRRHE"
        alt="Pokebal image"
      />
    </router-link>
  </div>

  <RouterView class="h-full w-full" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
