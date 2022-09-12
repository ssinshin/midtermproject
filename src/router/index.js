import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Dashboard.vue'
import VuetifyView from '../views/Vuetify.vue'
import AboutmeView from '../views/Aboutme.vue'
import AxiosDemoView from '../views/AxiosDemo.vue'
import AboutProjectView from '../views/Project.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/vuetifyApp',
      name: 'vuetifyApp',
      component: VuetifyView
      },
      {
        path: '/aboutmeApp',
        name: 'aboutmeApp',
        component: AboutmeView
        },
        {
          path: '/axios',
          name: 'axios',
          component: AxiosDemoView
          },
          {
            path: '/project',
            name: 'project',
            component: AboutProjectView
            }

  ]
})

export default router
