<template>
  <v-card
      class="w-100 mt-0"
  >
    <v-list lines="three"
            :items="newsByDate">
      <v-list-subheader>Новости</v-list-subheader>

      <template v-for="(item, index) in newsByDate" :key="item.id">
        <v-divider v-if="index"></v-divider>

        <v-list-item>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <br>
          <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
          <br>
          <span>{{item.author}} {{ dates.getHumanDate(item.date) }}</span>
        </v-list-item>
      </template>

    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import news from '@/demo/news.json'
import type { News } from "@/models/news";
import { useDate } from "@/composable/AppDateComposble";
import { computed } from "vue";

const newsItems = news as News[];
const dates = useDate();

const newsByDate = computed(() => {
  return newsItems.sort((a, b) => b.date -a.date);
})
</script>

<style scoped>

</style>
