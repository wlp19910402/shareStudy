import Vue from 'vue'
import Router from 'vue-router'
import Directive from '../page/directive.vue'
import Event from '../page/event.vue'
import Modifier from '../page/modifier.vue'
import Structure from '../page/structure.vue'
import VuexPage from '../page/vuex.vue'
import RouterPage from '../page/router'
import Mod1 from '../page/router/child/mod1.vue'
import Mod2 from '../page/router/child/mod2.vue'
import RouterDefault from '../page/router/child/default.vue'
import NotFound from '../page/404.vue'
import Nested from '../page/nested.vue'
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/directive'
    },
    {
      path: '/directive',
      name: 'directive',
      describe: "指令",
      component: Directive
    },
    {
      path: '/event',
      name: 'event',
      describe: "事件",
      component: Event
    },
    {
      path: '/modifier',
      name: 'modifier',
      describe: "修饰符",
      component: Modifier
    },
    {
      path: '/structure',
      name: 'structure',
      describe: "结构",
      component: Structure
    },
    {
      path: '/store',
      name: 'store',
      describe: "vuex",
      component: VuexPage
    },
    {
      path: '/router',
      name: 'router',
      component: RouterPage,
      describe: "路由",
      children: [
        {
          path: 'mod1',
          name: 'mod1',
          describe: "页面1",
          component: Mod1
        },
        {
          path: 'mod2',
          name: 'mod2',
          describe: "页面2",
          component: Mod2
        },
        {
          path: '*',
          name: 'RouterDefault',
          describe: "默认情况",
          component: RouterDefault
        }
      ]
    },
    {
      path: '/nested',
      name: 'nested',
      describe: "嵌套组件之间的传值",
      component: Nested
    },
    {
      path: '*',
      name: 'notfound',
      describe: "404页面",
      component: NotFound
    }
  ]
})
export default router;

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next()
})