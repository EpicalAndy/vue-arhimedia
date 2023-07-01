<template>
  <v-app-bar
      density="comfortable"
      image="/images/header-bg.jpg"
      height="200">

    <template v-slot:extension>
      <v-tabs align-tabs="start"
              v-model="tab"
              bg-color="blue"
              class="w-100">

        <v-tab value="main" to="/">Главная</v-tab>
        <v-tab value="about">О проекте</v-tab>
        <v-tab value="news">Новости</v-tab>
        <v-tab value="article">Статьи</v-tab>
        <v-tab value="projects">Наши проекты</v-tab>
        <v-tab value="contacts" to="contacts">Контакты</v-tab>

      </v-tabs>
    </template>

  </v-app-bar>

</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref(null);
</script>

<style scoped>

</style>
