<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import AppHeaderView from '@/pages/AppHeaderView.vue'
import AppArticleView from '@/pages/AppArticleView.vue'
</script>

<template>
  <v-app>

    <app-header-view></app-header-view>

    <v-main class="mt-0  fill-height">

      <RouterView v-slot="{ Component, route}">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </RouterView>

    </v-main>

  </v-app>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
