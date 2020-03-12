import Vue from 'vue'


const abc ={
     template: `<div>
         <input type="text" v-model ="text">
         <span v-show="active">存在active</span>
         <span v-show="propOne" @click="onChange">{{propOne}}</span>
</div>`,
     data(){
       return{
         text:123
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
   },
   methods:{
     onChange(){
       this.$emit('getData')
     }
   }
}



//Vue.component('CompOne',abc)   //全局注册组件

new Vue({
    el:'#app',
  data:{
    propOne:'text1'
  },
  components:{                 //非全局注册组件
    CompOne:abc                //key:value
  },
  mounted(){
      console.log(this.$refs.comp1)     //就是一个vue 实例
  },
  methods:{
    getChange(){
      this.propOne+=1
    },
  },
  template:`<div>
<comp-one :active="true" ref="comp1"></comp-one>
<comp-one :propOne="propOne" @getData = "getChange"></comp-one>
</div>`,

})
