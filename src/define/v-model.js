import Vue from 'vue'

//子组件
const comp = {
  template: `<div>
   <input type="text"  @input="handle" :value = "value1">     
</div>`,
  model:{                  //但用v-model的时候可以自定义名称和事件 更灵活
    prop:'value1',
    event:'change'
  },
  data(){
    return{
      text:0,
    }
  },
  props:['value1'],            //v-model的双向绑定  1.有props 和 触发的事件
  methods:{
    handle(e){
      this.$emit('change',e.target.value)
    }
  }
}
//父组件
new Vue({
  el:'#app',
  components:{compOne:comp},
  data:{
     value111:122,
  },
  watch:{
    value111(newText,oldText){
      console.log(newText)
    }
  },
  template:`<comp-one v-model="value111"></comp-one>`,
  methods: {
  }
})
