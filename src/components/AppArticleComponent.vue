<template>
  <v-card
      class="w-100 mt-0"
  >
    <v-card-title>Посты</v-card-title>
    <v-list lines="three">
      <v-list-item v-for="item in postItems"
                   :key="item.id"
                   :title="item.title"
                   :subtitle="item.content">

      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import posts from '@/demo/posts.json'
import type { Post } from "@/models/post";

const postItems = posts as Post[];
</script>

<style scoped>

</style>
