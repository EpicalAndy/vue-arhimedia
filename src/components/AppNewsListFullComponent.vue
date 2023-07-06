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
          <v-list-item-title>
            <a @click="toggleDialog(item)" class="v-btn">{{ item.title }}</a></v-list-item-title>
          <br>
          <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
          <br>
          <span>{{ item.author }} {{ dates.getHumanDate(item.date) }}</span>
        </v-list-item>
      </template>

    </v-list>

    <app-dialog-component v-if="show"
                          :show="show"
                          @toggleDialog="toggleDialog">
      <v-card>
        <v-card-item>
          <v-toolbar density="compact">
            <v-toolbar-title>{{ post?.title }}
            </v-toolbar-title>
            <template v-slot:append>
              <v-btn icon="mdi-close"
                     color="blue"
                     rounded
                     @click="toggleDialog"
                     density="compact">
              </v-btn>
            </template>
          </v-toolbar>

        </v-card-item>
        <v-card-item>
          <v-card-text>{{ post?.content }}</v-card-text>
        </v-card-item>

      </v-card>
    </app-dialog-component>
  </v-card>
</template>

<script setup lang="ts">
import news from '@/demo/news.json'
import type { News } from "@/models/news";
import { useDate } from "@/composable/AppComposble";
import { computed, ref } from "vue";
import AppDialogComponent from "@/components/UI/AppDialogComponent.vue";
import type { Post } from "@/models/post";

const newsItems = news as News[];
const dates = useDate();
const show = ref(false);
const post = ref(null) as Post;

const newsByDate = computed(() => {
  return newsItems.sort((a, b) => b.date - a.date);
});

function toggleDialog(item?: Post) {
  show.value = !show.value;
  post.value = item || null;
}
</script>

<style scoped>

</style>
