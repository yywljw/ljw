// 第一节
import Vue from 'vue'

const app = new Vue({
  template: '<div>{{text}}{{obj.a}}</div>',
  data:{
    text:0,
    obj:{

    }
  },
  // watch:{
  //    text(newText,oldTetxt){
  //        console.log(newText,oldTetxt)
  //    }
  // }
})
app.$mount('#app')

// console.log(app.$data)    就是data
// console.log(app.$props)
// console.log(app.$el)        就是template 编译后的内容 html
// console.log(app.$options)      是new Vue 后的所有东西
// //要修改data的值 只能
// console.log(app.$data.text ==2)
// app.$options.render=(h)=>{
//   return h('div',{},'new render function')          //下一次重新渲染的时候会生效  0会变new render function
//
// }
// console.log(app.$root ===app)        最上层的节点
// console.log(app.$children)            <item><div></div></item>  div作为item的节点
// console.log(app.$slots)              插槽 在template中调用
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)       加入了服务端渲染时候用 （不懂）
let i = 0;
setInterval(()=>{
  i++;
  // app.text+=1
  app.obj.a = i
  // app.$forceUpdate()        不推荐 强制更新 当在data中没有初始值时  $nextTick()  因为vue是异步 所以要等下一次渲染
  app.$set(app.obj,'a',i)       //推荐 或者现在data里设置初始值
  //app.$delete //删除添加的属性
},1000)
// const  hhh = app.$watch('text',(newText,oldText)=>{
//   console.log(newText,oldText)
// })
//
// setTimeout(()=>{
//   hhh()
// },2000)                 停止事件监听

app.$once('test',(a,b)=>{
  console.log('test emit',a,b)
})
app.$on('test',(a,b)=>{
  console.log('test emit',a,b)
})
app.$emit('test',1,2)

//$on $emit 用的地方只能在同一个new Vue出来的实例上
setInterval(()=>{
  app.$emit('test',1,2)
},100)
// $once 和 $on 的区别 $once 只触发一次
