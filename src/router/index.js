// import Vue from '../../static/common'
import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
const QQ = resolve => require(['@/components/qq'], resolve)
const Wechat = resolve => require(['@/components/wechat'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main,
    }
    ,
    {
      path: '/qq',
      component: QQ
    },
    {
      path: '/wechat',
      component: Wechat
    }
  ]
})
