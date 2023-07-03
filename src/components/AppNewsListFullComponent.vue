<template>
  <v-card
      class="w-100 mt-0"
  >
    <v-list lines="three"
            :items="newsItems">
      <v-list-subheader>Новости</v-list-subheader>

      <template v-for="(item, index) in newsItems" :key="item.id">
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
import moment from "moment";
import { useDate } from "@/composable/AppDateComposble";

const newsItems = news as News[];
const dates = useDate();
</script>

<style scoped>

</style>
