import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: "/SpringBoot-App",
  },
  {
    path: '/SSM-App',
    name: 'ssmApp',
    component: () => import(/* webpackChunkName: "about" */ '../views/tableView.vue')
  },
  {
    path: '/SpringBoot-App',
    name: 'bootApp',
    component: () => import(/* webpackChunkName: "about" */ '../views/bootApp.vue')
  },
  {
    path: '/login',
    name: 'loginView',
    component: () => import(/* webpackChunkName: "about" */ '../views/loginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
