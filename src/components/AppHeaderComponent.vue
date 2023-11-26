<template>
  <v-app-bar
      density="comfortable"
      :image="getImageUrl('images/header-bg.jpg')"
      height="200">

    <template v-slot:extension>
      <v-tabs align-tabs="start"
              v-model="tab"
              bg-color="blue"
              color="gray"
              class="w-100">
        <v-app-bar-nav-icon
            v-if="isMobile"
            variant="text"
            color="gray"
            @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <div v-else>
          <v-tab value="main" to="/">Главная</v-tab>
          <v-tab value="news" to="/news">Новости</v-tab>
          <v-tab value="article" to="/posts">Статьи</v-tab>
          <v-tab value="projects" to="/projects">Наши проекты</v-tab>
          <v-tab value="contacts" to="/contacts">Контакты</v-tab>
          <v-tab value="about" to="/about">О проекте</v-tab>
        </div>

      </v-tabs>
    </template>

  </v-app-bar>
  <v-navigation-drawer v-model="drawer"
                       location="left"
                       temporary>
    <v-list-item v-for="tab in tabs" :key="tab.value"
                 :title="tab.title"
                 :to="tab.to"
                 :value="tab.value">
    </v-list-item>
  </v-navigation-drawer>

</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { useAdaptive } from "@/composable/AppComposble";

const tab = ref(null);
const drawer = ref(false);
const adaptive = useAdaptive();
const isMobile = adaptive.isMobile();
const tabs = [
  { value: 'main', to: '/', title: 'Главная' },
  { value: 'news', to: '/news', title: 'Новости' },
  { value: 'article', to: '/posts', title: 'Статьи' },
  { value: 'projects', to: '/projects', title: 'Наши проекты' },
  { value: 'contacts', to: '/contacts', title: 'Контакты' },
  { value: 'admin', to: '/admin', title: 'Админка' },
  { value: 'about', to: '/about', title: 'О проекте' }
];


function getImageUrl(name: string) {
  return `${import.meta.env.BASE_URL}${name}`;
}
</script>

<style scoped>
.v-toolbar-title {
  font-size: 3rem;
  line-height: 4em;
}
</style>
