<template>
  <app-two-columns-layout>
    <template #left>
      <v-toolbar>
        <v-toolbar-items>
          <v-btn color="success">
            <span>Добавить</span>
          </v-btn>

          <v-btn color="red">
            <span>Удалить</span>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </template>

    <template #right>
      <v-tabs direction="vertical">
        <v-tab>Новости</v-tab>
        <v-tab>Статьи</v-tab>
        <v-tab>Наши проекты</v-tab>
      </v-tabs>
    </template>
  </app-two-columns-layout>
</template>

<script setup lang="ts">

import AppTwoColumnsLayout from "@/layouts/AppTwoColumnsLayout.vue";
</script>

<style scoped>

</style>
