import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import VideoList from '../views/videos/VideoList.vue'

Vue.use(VueRouter)

const routes:RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      {name: 'home', path: '/videos/list', component: VideoList}
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
