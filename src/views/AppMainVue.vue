<template>
  <v-row>
    <v-col cols="8">
      <v-card height="400">
        <v-card-title>
          <v-card-text>
            <h2>Последние новости</h2></v-card-text>
        </v-card-title>
        <v-card-item>
          <v-carousel height="300">
            <v-carousel-item v-for="item in news">
              <v-sheet class="w-50 mx-auto h-auto">
                <div style="height: 20%">
                  <h2>{{ item.title }} {{ }}</h2>
                </div>
                <br>
                <div style="height: 80%" class="card-text">{{ item.content }}</div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>

  <v-row class="justify-end">
    <v-col cols="8">
      <v-card height="400">
        <v-card-title>
          <v-card-text>
            <h2>Последние статьи</h2></v-card-text>
        </v-card-title>
        <v-card-item>
          <v-carousel height="300">
            <v-carousel-item v-for="item in post">
              <v-sheet class="w-50 mx-auto h-auto">
                <div style="height: 20%">
                  <h2>{{ item.title }} {{ }}</h2>
                </div>
                <br>
                <div style="height: 80%" class="card-text">{{ item.content }}</div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import news from '@/demo/news.json'
import post from '@/demo/posts.json'
</script>

<style scoped>
  .card-text {
    text-overflow:ellipsis;
  overflow:hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  white-space: normal;
  }
</style>
