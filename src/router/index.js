import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photos from '../views/photos/Photos.vue'
import Register from '../views/auth/Register.vue'
import Session from '../views/auth/Session.vue'
import Create from '../views/crud-view/Create.vue'
import Profile from '../views/users/Profile.vue'

// FIrebase
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/session',
    name: 'Session',
    component: Session
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if(requiresAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) next('/')

      else next();
    })
  } else next()
});

export default router
