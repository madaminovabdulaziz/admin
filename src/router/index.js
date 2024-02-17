import {
  createRouter,
  createWebHistory
} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import orders from '../views/Orders/Orders.vue'
import accepted from '../views/Accepted/Accepted.vue'
import finished from '../views/Finished/Finished.vue'
import performs from '../views/Performs/Performs.vue'
import login from '../components/Login/Login.vue'
import students from '../views/Students/Students.vue'
import pay from '../views/Accepted/pay.vue'
import myworks from '../views/MyWorks/MyWorks.vue'
import myfinishedworks from '../views/MyFinishedWorks/MyFinishedWorks.vue'
import files from '../views/Orders/File.vue'
import mystart from '../views/MyStarted/MyStarted.vue'
import part2 from '../views//Accepted/part-2.vue'
import order from '../views/Students/Order.vue'

const routes = [{
    path: '/',
    name: 'login',
    meta: {
      requiresAuth: true,
      title: "Login"
    },
    component: login
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }, 
  {
    path: '/orders',
    name: 'orders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Orders"
    },
    component: orders
  },
  {
    path: '/accepted',
    name: 'accepted',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Accepted"
    },
    component: accepted
  },
  {
    path: '/finished',
    name: 'finished',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Finished"
    },
    component: finished
  },
  {
    path: '/performs',
    name: 'performs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Employees"
    },
    component: performs
  },
  {
    path: '/students',
    name: 'students',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Students"
    },
    component: students
  },
  {
    path: '/pay/:id',
    name: 'pay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Payments"
    },
    component: pay
  },
  {
    path: '/files/:id',
    name: 'files',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: files
  },
  {
    path: '/part2',
    name: 'part2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Payments"
    },
    component: part2
  },
  {
    path: '/order/:id',
    name: 'order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Payments"
    },
    component: order
  },

  // workers
  {
    path: '/myworks',
    name: 'myworks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "My works"
    },
    component: myworks
  },
  {
    path: '/myfinishedworks',
    name: 'myfinishedworks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Finished works"
    },
    component: myfinishedworks
  },
  {
    path: '/mystart',
    name: 'mystart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      requiresAuth: true,
      title: "Started works"
    },
    component: mystart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router