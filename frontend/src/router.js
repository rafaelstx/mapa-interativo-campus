import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import MapaPage from './pages/MapaPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/mapa', name: 'Mapa', component: MapaPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
