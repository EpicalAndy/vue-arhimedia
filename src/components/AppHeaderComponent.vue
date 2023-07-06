<template>
  <v-app-bar
      density="comfortable"
      :image="getImageUrl('images/header-bg.jpg')"
      height="200">
<!--    <v-app-bar-title class="text-yellow text-h1">
     Архиремонт
    </v-app-bar-title>-->

    <template v-slot:extension>
      <v-tabs align-tabs="start"
              v-model="tab"
              bg-color="blue"
              color="gray"
              class="w-100">

        <v-tab value="main" to="/">Главная</v-tab>
        <v-tab value="news" to="/news">Новости</v-tab>
        <v-tab value="article" to="/posts">Статьи</v-tab>
        <v-tab value="projects" to="/projects">Наши проекты</v-tab>
        <v-tab value="contacts" to="/contacts">Контакты</v-tab>
        <v-tab value="about" to="about">О проекте</v-tab>

      </v-tabs>
    </template>

  </v-app-bar>

</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref(null);

function getImageUrl(name: string) {
  console.log(import.meta.env.BASE_URL)

  return `${import.meta.env.BASE_URL}${name}`;
}
</script>

<style scoped>
 .v-toolbar-title {
   font-size: 3rem;
   line-height: 4em;
 }
</style>
