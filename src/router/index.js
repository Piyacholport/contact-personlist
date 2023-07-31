import { createRouter, createWebHistory } from 'vue-router'
import PersonList from '../views/PersonList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PersonList',
      component: PersonList
    },
  ]
})

export default router
