import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(Router)

export const ConstRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: HomeView,
    meta:{
      title:"Dashboard",
    },
    icon: "mdi-view-dashboard",
    visible:true,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      title:"about",
    },
    icon: "mdi-account-box",
    visible:true,
  },
  {
    path: '/testing',
    name: 'testing',
    component: () => import(/* webpackChunkName: "about" */  '../views/TesTing.vue'),
    meta:{
      title:"TESTING",
    },
    icon: "mdi-account-circle",
    visible:true,
    children: [
      {
        path: "/test-1",
        name: "testN",
        component: () => import(/* webpackChunkName: "about" */ '../views/TesTingN.vue'),
        visible:true,
        meta: {
          title: "Importer",
          isChild:true,
        },
        icon: "mdi-cog",
      },
      {
        path: "/test-2",
        name: "testM",
        component: () => import(/* webpackChunkName: "about" */ '../views/TesTingM.vue'),
        visible:true,
        meta: {
          title: "Exporter",
          isChild:true,        
        },
        icon: "mdi-cog",
      },
    ],
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:ConstRoutes,
})     
router.beforeEach((to, from, next) => {
  document.title = process.env.VUE_APP_NAME+'-'+to.meta.title;
  next();
})

export default router
