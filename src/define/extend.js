import Vue from 'vue'


const abc ={
  template: `<div>
         <input type="text" v-model ="text">
         <span v-show="active">存在active</span>
         <span v-show="propOne" @click="onChange">{{propOne}}</span>
</div>`,
  data(){
    return{
      text:0
    }
  },
  //不能修改传进来的值props ，只能修改data   或者props:['active','propOne']
  props:{
    active:{
      type:Boolean,
      required:false,
      //   default:false.
      //    default (){   //如果是一个对象
      //      return {
      //
      //      }
      //    }
    },
    propOne:String
  },
  mounted() {
    // this.propOne = 'inner'
    console.log('1111')
  },
  methods:{
    onChange(){
      this.$emit('getData')
    }
  }
}
//Vue.component('CompOne',abc)   //全局注册组件

//第二种方法
//const  CompVue = Vue.extend(abc)   //可以理解为vue的子类
// new CompVue({
//   el:'#app',
//   propsData:{
//     propOne:'xxx'    //prop如果是通过extend的话 只能用propsData
// },
//   mounted(){
//     console.log('222')
//   },
//   data:{
//     text:'123'  //会覆盖abc组件里的data值
//  }
// })

const parent = new Vue({
     name:'parent'
})

const Comp2Vue = {
  //parent:parent,     //依然是vue的实例
  extends:abc,
  data(){
    return {
      text:111,     //会覆盖继承前的text
    }
  },
  mounted() {
    console.log('111')  //继承后的后打印
    console.log(this.$parent.$options)
    this.$parent.city = '112345'          //在子组件的内部直接调用this.$parent 父组件
  }
}

//父组件
new Vue({
  el:'#app',
  name:'hhhhhh',
  parent:parent,
  components:{
    Comp:Comp2Vue
  },
  data:{
    city:2333,
  },
  template: `<div>
<span>{{city}}</span>
   <comp></comp>
</div>`,
  mounted(){
    console.log(this.$parent.$options.name)
  }
})


