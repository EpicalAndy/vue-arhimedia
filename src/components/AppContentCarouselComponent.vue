<template>
  <v-card height="400">
    <v-card-title>
      <v-card-text>
        <h2>{{ title }}</h2></v-card-text>
    </v-card-title>
    <v-card-item>
      <v-carousel height="300"
                  :show-arrows="!isMobile"
                  :cycle="isMobile"
                  :interval="8000">
        <v-carousel-item v-for="item in items">
          <v-sheet :class="[isMobile ? 'w-75' : 'w-50', 'mx-auto', 'h-auto']">
            <div style="height: 20%">
              <h2>{{ item.title }} {{ }}</h2>
            </div>
            <br>
            <div style="height: 80%" class="card-text">{{ item.content }}</div>
          </v-sheet>
        </v-carousel-item>
        <template v-slot:prev="{props}">
          <v-btn color="blue"
                 icon="mdi-chevron-left"
                 @click="props.onClick">
          </v-btn>
        </template>
        <template v-slot:next="{props}">
          <v-btn color="blue"
                 icon="mdi-chevron-right"
                 @click="props.onClick">
          </v-btn>
        </template>
      </v-carousel>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";
import { useAdaptive } from "@/composable/AppComposble";

const { items, title } = defineProps([ 'items', 'title' ]);
const adaptive = useAdaptive();
const isMobile = adaptive.isMobile();

</script>

<style scoped>
.card-text {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>
