import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../pages/AppMainVue.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../pages/AppNewsView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../pages/AppArticleView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/AppContactsView.vue')
    },


    {
      path: '/projects',
      name: 'projects',
      component: () => import('../pages/AppProjectsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AppAboutView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../pages/AppAdminPage.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
