<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import AppHeaderView from '@/views/AppHeaderView.vue'
import AppArticleView from '@/views/AppArticleView.vue'
</script>

<template>
  <v-app>

    <app-header-view></app-header-view>

    <v-main class="mt-0  fill-height">
      <v-container class="w-100">

        <RouterView v-slot="{ Component, route}">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </RouterView>

      </v-container>

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
