<template>
  <div class="helper">
    <span class="left">{{unFinishLength}} items left</span>
    <span class="tabs">
      <span class="tabspan"   v-for="(item,index) in states" :key="index"
            :class="['state',filter==item?'active':'']"
            @click="toggleFilter(item)"
      >{{item}}</span>
    </span>
    <span class="clearAllCompelete" @click="clearAllCompelete">ClearCompleted</span>
  </div>
</template>

<script>
    export default {
        name: "tabs",
      data(){
          return{
            states:['all','active','completed']
          }
      },
      props:{
        filter:{
          type:String,
          required:true
        },
        todos:{
          type:Array,
          required:true
        }
      },
      computed:{
         unFinishLength(){
           let that = this
           return that.todos.filter(todo=>!todo.completed).length
         }
      },
      methods:{
        toggleFilter(item){
           this.$emit('toggle',item)
        },
        clearAllCompelete(){
          console.log('111')
            this.$emit('clear','all')
        }
      }
    }
</script>

<style scoped lang ='scss'>
  .helper{
    .active{
      color:#0058ff
    }
    .state{

    }
    .clearAllCompelete{

    }
    .tabspan{
      margin:10px;
    }
  }

</style>
