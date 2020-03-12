import  Vue from 'vue'

new Vue({
  el:'#app',
  template:`
     <div>
     <div>{{isActive}}</div>
      <input type="text" v-model="textlist">
      <p>obj.a</p><input type="text" v-model="obj.a">
      
      <ul>
         <li v-for="(val,key,index) in object" :key="index">{{val}}:{{key}}:{{index}}</li>      
      </ul>
      <div>
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
        <input type="checkbox" :value="4" v-model="arr">
      </div>
      <div>
     <input type="radio" value="one" v-model="picked">   <!--     //只能有一个选中 所以只能有一个value-->
           <input type="radio" value="two" v-model="picked">
      </div>
</div>
  `,
  data:{
    isActive:'false',
    textlist:33,
    arr:[1,2,3],
    lastName:'li',
    fullName:'',
    picked:'two',
    obj:{
      a:'123',
    },
    styles:{
      color:'red',
      appearance:'none',   //加前缀
    },
    object:{
      'a':123,
      'b':234,
      'c':888
    },
  },
  watch:{    //watch方法最初绑定的时候是不执行的
     textlist(newText,oldText){
        console.log(newText)
     },
    obj:{
      handler(){
        console.log(this.obj.a)
      },
      immediate:true, //立即执行
      deep:true   //把obj里的所有属性都监听了
    }
  },

/*所以
watch:{
  firstName:{     //立马执行
    handler(newName,oldName){
      this.fullName = newName+''+this.lastName
    },
    immediate:true
  }},
*/
// mounted(){
//   this.obj = {
//     a:'555'
//   }
// },
//1.加mounted 不加deep 可执行  2.不加mounted 加deep可执行  因为监听obj浪费资源 就obj.a

//优化
//   watch:{
//    'obj.a':{
//      handler(){
//        console.log('changed')
//      },
//      immediate:true,
//    }
// },

  methods:{

  }
})
