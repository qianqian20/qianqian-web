import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// const Owner = () => import('@/views/owner')
import Owner from '@/views/owner'
import Detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/owner',
      name: 'owner',
      component: Owner
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
