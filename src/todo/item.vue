<template>
  <div class="content">
    <div :class="['todo-item',todo.completed?'completed':'']">
      <input type="checkbox" class="toggle" v-model="todo.completed">
      <label class="labelContent">{{todo.content}}</label>
      <button class="destroy" @click="deleteTodo">删除</button>
    </div>
  </div>
</template>
<!--:class="(todo.completed?'completed':'')"-->
<script>
    export default {
        name: "item",
      data(){
          return{

          }
      },
      props:{
          todo:{
            type:Object,
            required:true,
          }
      },
      methods:{
        deleteTodo(){
            this.$emit('del',this.$props.todo.id)
        }
      }
    }
</script>

<style scoped lang="scss">
  .content{
    .labelContent{
      color:orangered;
    }
    .completed{
      .labelContent{
        font-size: 20px;
      }

    }
    .destroy{
      width: 60px;
      height: 20px;
    }
  }

</style>
