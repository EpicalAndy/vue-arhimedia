<template>
  <v-card
      class="w-100 mt-0"
  >
    <v-list lines="three"
            :items="postItems">
      <v-list-subheader>Посты</v-list-subheader>

      <template v-for="(item, index) in postItems" :key="item.id">
        <v-divider v-if="index"></v-divider>

        <v-list-item>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
        </v-list-item>
      </template>

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
