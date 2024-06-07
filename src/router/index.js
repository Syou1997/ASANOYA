import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
//HomePage裡的分類
import About from '../components/type/About.vue'
import Hard from '../components/type/Hard.vue'
import Bread from '../components/type/Bread.vue'
import Sweets from '../components/type/Sweets.vue'
import Salty from '../components/type/Salty.vue'
import Simple from '../components/type/Simple.vue'
import FrozenFood from '../components/type/FrozenFood.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage,
      //子路由
      children: [
        {
          path: 'About',
          name: 'About',
          component:About,
        },
        {
          path: 'Hard',
          name: 'Hard',
          component: Hard,
        },
        {
          path: 'Bread',
          name: 'Bread',
          component: Bread,
        },
        {
          path: 'Sweets',
          name: 'Sweets',
          component: Sweets,
        },
        {
          path: 'Sweets',
          name: 'Sweets',
          component: Sweets,
        },
        {
          path: 'Salty',
          name: 'Salty',
          component:Salty,
        },
        {
          path: 'Simple',
          name: 'Simple',
          component:Simple,
        },
        {
          path: 'FrozenFood',
          name: 'FrozenFood',
          component:FrozenFood,
        },

      ]

    },

  ]
})

export default router
