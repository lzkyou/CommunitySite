import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import ResourceCrud from '../views/ResourceCrud.vue'
// import VideoEdit from '../views/videos/VideoEdit.vue'
// import VideoList from '../views/videos/VideoList.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'videos-crud', path: '/:resource/list', component: ResourceCrud, props: true },
      // { name: 'video-list', path: '/videos/list', component: VideoList },
      // { name: 'video-edit', path: '/videos/edit/:id', component: VideoEdit, props:true },
      // { name: 'video-create', path: '/videos/create', component: VideoEdit },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
