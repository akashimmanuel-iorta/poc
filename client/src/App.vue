<script lang="ts">
import CharacterList from "./components/CharacterList.vue"
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Fictional Characters</v-app-bar-title>
      <v-btn>My Characters</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped></style>
