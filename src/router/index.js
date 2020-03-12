import Vue from 'vue'
import Router from 'vue-router'
import todo from '../todo/todo'
import login from '../login/login'
import login2 from '../login/login2'
import text from '../login/text/text'
Vue.use(Router)

export default new Router({
  mode:'history',   //url中去掉/#
   //base:'/base/',     //view-link和对象跳转  url

 // linkActiveClass:'active-link',               //router-link后会给被点击的那个加上class
 // linkExactActiveClass:'exact-active-link',
   scrollBehavior(to,from,savedPosition){
      if(savedPosition){
         return savedPosition
      }else{
        return {x:0,y:0}
      }
   },
  // parseQuery(query){
  //
  // },
  // stringifyQuery(obj){
  //
  // },
 // fallback:true,   //支持单页面跳转
  routes: [
    {
      path: '',
     component:todo,
    },
    {
      path: '/login',
      component: login,
      name:'login',    //跟path的名字没有关系
      children:[         //此时router-view要在login这个页面写
      {
          path:'text',
          component:text
        }

      ],

    },
    {
      path: '/login2/:canshu',
      component: login2,
      props:true,     //会作为login2这个组件的props
      // meta:{
      //     title:'this id title',
      //   data:'abc'
      // }
    },
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)}


