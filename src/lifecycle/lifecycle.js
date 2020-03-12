// 第二章
import Vue from  'vue'

const app = new Vue({
 // el:'#app',
   template:'<div>{{text}}</div>',
    data:{
      text:1,
    },
  beforeCreate(){
      console.log(this.$el,'beforeCreate') //不要去data里的数据，最早也要在created
  },
  created(){
    console.log(this.$el,'created')
  },
  beforeMount(){                     //如果没有el是不执行mounted
    console.log(this.$el,'beforeMount')   //this.$el为 在html中的  div ip="app"></div>
  },
  mounted(){
    console.log(this.$el,'mounted')  //this.$el为  <div>1</div>
  },
  beforeUpdate(){                   //每次数据更新时
    console.log(this,'beforeUpdate')
  },
  updated(){
    console.log(this,'updated')
  },
  activated(){
    console.log(this,'activated')  //在组件章节讲解
  },
  deactivated(){
    console.log(this,'deactivated')
  },
  beforeDestroy(){
    console.log(this,'beforeDestroy')
  },
  destroyed(){
    console.log(this,'destroyed')
  },

  // render(h){              相当于<template>      h是createElement方法  {} 是对象 text 是div的内容
  //    return h('div',{},this.text)    beforeMount($el是html中写的节点) 和mounted 之间执行   (渲染出来的结果)
  // }
  errorCaptured(err, vm, info) {
      //会向上冒泡，并且正式环境可以使用
  }
})
app.$mount('#app')
setInterval(()=>{
     app.text+=1;
},1000)
