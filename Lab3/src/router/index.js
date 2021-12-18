import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Contact from '../views/Contact.vue'
import PostDetail from '../views/PostDetail.vue'
import thefrontpage from '../views/frontpage.vue'
import forfun from '../views/forfun.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue')

  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')

  },

  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetail

  },

  {
    path: '/frontpage',
    name: 'thefrontpage',
    component: thefrontpage
  },

  {
    path: '/forfun',
    name: 'forfun',
    component: forfun
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
