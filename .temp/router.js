import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SecondPage from '@/components/SecondPage'

Vue.use(Router)

module.exports = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/secondpage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
