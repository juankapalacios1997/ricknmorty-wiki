import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import rickAndMortyAPI from '../components/rickAndMortyAPI'
import character from '../components/character'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'rickAndMortyAPI',
    component: rickAndMortyAPI
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component:
  // },
  {
    path: '/character/:id',
    name: 'character',
    component: character
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
