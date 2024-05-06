import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Data/home.vue')
    },
    {
      path: '/dosen-entry',
      name: 'dsnentry',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Data/entry-dosen.vue')
    },
    {
      path: '/mahasiswa-entry',
      name: 'mhsEntry',
      component: () => import('../views/Data/entry-mahasiswa.vue')
    },
    {
    path: '/ruangan-entry',
    name: 'rgnentry',
    component: () => import('../views/Data/entry-ruangan.vue')
    }
  ]
})

export default router
