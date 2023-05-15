import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: "/table",
  },
  {
    path: '/table',
    name: 'tableView',
    component: () => import(/* webpackChunkName: "about" */ '../views/tableView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
