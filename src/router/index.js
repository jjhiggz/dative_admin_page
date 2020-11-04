import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const authenticated = true;

function isLoggedIn( to, from, next ){
  if(authenticated){
    next()
  } else {
    next({
      name:"Login"
    })
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: isLoggedIn
  },
  {
    path: '/edit-date',
    name: 'EditDate',
    component: () => import( '../views/EditDate.vue'),
    beforeEnter: isLoggedIn

  },
  {
    path: '/edit-user',
    name: 'EditUser',
    component: () => import( '../views/EditUser.vue'),
    beforeEnter: isLoggedIn
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
