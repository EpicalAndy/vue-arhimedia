<template>
  <v-app-bar>


<!--        <v-img src="/src/assets/images/logo.png">

        </v-img>-->
        <v-tabs
            align-tabs="start"
            v-model="tab"
            bg-color="primary"
            grow="auto">
          <v-tab value="main">Главная</v-tab>
          <v-tab value="news">Новости</v-tab>
          <v-tab value="services">Услуги</v-tab>
          <v-tab value="portfolio">Портфолио</v-tab>
          <v-tab value="contacts">Контакты</v-tab>
        </v-tabs>


  </v-app-bar>

</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref(null);
</script>

<style scoped>

</style>
