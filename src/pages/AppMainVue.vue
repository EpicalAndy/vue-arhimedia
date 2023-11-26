<template>
  <div>
    <v-row class="justify-center mt-16">
      <v-col cols="8">
        <app-content-carousel-component title="Статьи"
                                        :items="posts">
        </app-content-carousel-component>
      </v-col>
    </v-row>

    <v-row class="justify-center mt-16">
      <v-col cols="8">
        <app-content-carousel-component title="Последние новости"
                                        :items="lastNews">
        </app-content-carousel-component>
      </v-col>
    </v-row>
  </div>

</template>

<script setup lang="ts">
import news from '@/demo/news.json'
import posts from '@/demo/posts.json'
import AppContentCarouselComponent from "@/components/AppContentCarouselComponent.vue";
import { computed } from "vue";
import { Post } from "@/models/post";

const lastNews = computed(() => {
  return getLatestItems(news, 5);
});

const lastArticles = () => {
  return getLatestItems(posts, 5);
}

function getLatestItems(items: Post[], count: number) {
  const sortedItems = items.sort((a, b) => b.date - a.date);
  const _count = count || 10;

  return sortedItems.length > _count ? sortedItems.slice(0, _count) : sortedItems;
}
</script>

<style scoped>

</style>
