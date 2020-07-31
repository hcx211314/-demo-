import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Test1 from '@/components/test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {title: '首页'}
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      meta: {title: '测试页面1'}
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1,
      meta: {title: '测试页面2'}
    }
  ]
})
