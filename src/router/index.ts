import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/AppMainVue.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/AppNewsView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/AppArticleView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/AppContactsView.vue')
    },


    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/AppProjectsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AppAboutView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
