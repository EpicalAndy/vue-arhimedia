<template>
  <div>
    <v-row class="justify-center mt-16">
      <v-col cols="8">
        <app-content-carousel-component title="Статьи"
                                        :items="posts"></app-content-carousel-component>
      </v-col>
    </v-row>

    <v-row class="justify-center mt-16">
      <v-col cols="8">
        <app-content-carousel-component title="Последние новости"
                                        :items="news">
        </app-content-carousel-component>
      </v-col>
    </v-row>
  </div>

</template>

<script setup lang="ts">
import news from '@/demo/news.json'
import posts from '@/demo/posts.json'
import AppContentCarouselComponent from "@/components/AppContentCarouselComponent.vue";
</script>

<style scoped>

</style>
