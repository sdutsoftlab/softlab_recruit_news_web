import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Add from '@/components/Add'
import Contact from '@/components/Contact'
import Query from '@/components/Query'
Vue.use(Router)

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }, {
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/new',
      name: 'new',
      component: Add
    }, {
      path: '/query',
      name: 'query',
      component: Query
    }
  ]
})
