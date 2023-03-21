import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Show from '@/views/Show'
import Costumer from "@/views/costumer";
import Edu from "@/views/edu";
import Finicial from "@/views/finicial";
import Trade from "@/views/trade";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/tabs",
      name:"Tabs",
      component:Show,
      children:[{
        path:"cont",
        name:"Costumer",
        components:{
          default:Costumer,
          costumer:Costumer,
          edu:Edu,
          finicial:Finicial,
          trade:Trade
        },
      }]
    },
  ]
})
