import Vue from 'vue'

//provide inject 跨层级的

const childComponent = {
  template:'<div>child component{{data.text}}</div>',
  // inject:['yeye','value'],
  inject:['yeye','data'],
  mounted(){
    console.log(this.yeye,this.value)
    console.log( this.$parent.$options.name)
    console.log( this.$parent.$options.data)
  }
}
const comp = {
  name:'aaa',
  components:{
    childComponent
  },
  template: `<div>
   <div>
    <slot name="header"></slot>     
    <slot name="body"></slot>
    <slot :value="list" aaa="888"></slot>
    <child-component></child-component>
   </div>
</div>`,
  data(){
    return{
      list:'122'
    }
  },
  mounted() {
    console.log(this.$options)
    console.log(this,this.list)
    console.log(this.$el)
  }
}

new Vue({
  el:'#app',
  data:{
    text:'122'
  },
  provide(){
    const data = {}
    Object.defineProperty(data,'value',{
      get:() =>this.text,
      enumerable:true
    })
    return{
      yeye:this,
      data
    }
  },
  mounted(){
    console.log(this.$refs.comp)    //整个    相当于子组件里的this=这里的this.$refs.comp
    console.log(this.$refs.scope)   //带有标签的节点
    console.log(this.$refs.comp.$slots.body)   //注意是在comp这个vue在的slot  获取到的是vnode节点
  },
  components:{compOne:comp},
  template: `<div>
<compOne ref="comp">
        <span slot="header">{{text}}</span>   <!--默认使用父组件的data-->
        <span slot="body">22222</span>     <!-- 具名插槽-->
        <span slot-scope="props" ref="scope">{{props.value}}{{props.aaa}}{{text}}</span>     <!--作用域插槽-->
</compOne>
<input type="text" v-model="text">
</div>
`,
  // render(createElement){         //vue当createElement 要传递三个参数  就是子节点的时候要用数组  (节点名字 ，节点属性 节点内容)
  //     return createElement('compOne',{
  //       ref:'comp'
  //     },[createElement(this.$slots.header,this.text)])
  // }

})
