<template>
      <div id="todo" class="content">
        <section>
          <input type="text"
                 class="add-input"
                 autofocus="autofocus"
                 placeholder="接下去要做什么"
                 @keyup.enter="addTodo"
          >
        </section>
        <item :todo="todo" v-for="(todo,index) in filterTodos"   :key="index" :id=todo.id @del="deleteTodo"></item>
        <tabs :filter="filter" :todos="todos" @toggle="toggle" @clear="clearComplete"></tabs>


        <div ref="msgDiv"class="addborder">{{msg}}</div>
        <div>{{msg1}}</div>
        <div>{{msg2}}</div>
        <div>{{msg3}}</div>
        <div style="width: 70px;height: 20px;border:1px solid red;background: orange" @click="gotoChange">点击</div>
      </div>
</template>
<script>
   import item from './item'
   import tabs from './tabs'
   let id=0;
    export default {
        name: "todo",
      data(){
          return{
             todos:[],
            filter:'all',
            msg:'hellowworld',
            msg1:'',
            msg2:'',
            msg3:''
          }
      },
      components:{
        item,tabs
      },
      computed:{
        filterTodos(){
          if(this.filter=='all'){
            return this.todos
          }
          if(this.filter=='completed'){
            return this.todos.filter(todo=>todo.completed)
          }
          if(this.filter=='active'){
            return this.todos.filter(todo=>!todo.completed)
          }
          // let completed = this.filter==='completed'
          // return this.todos.filter(todo=>todo.completed==completed)
        }
      },
     /* watch:{
        filter(newVal,val){
          if(newVal){
            if(this.filter=='all'){
              return this.todos
            }
            let completed = this.filter==='completed'
            return this.todos.filter(todo=>todo.completed==completed)
          }
        }
      },*/
      methods:{
        clearComplete(item){
          this.todos=this.todos.filter(todo=>!todo.completed)
        },
        addTodo(e){
          console.log(e)
          this.todos.unshift({
            id:id++,
            content:e.target.value.trim(),
            completed: false
          })
          e.target.value=''

        },
        deleteTodo(id){
          console.log(todo,id)
        this.todos.splice(this.todos[id],1)
          //this.todos.splice(this.todos.findIndex(todo,todo.id==id),1)
        },
        gotoChange(){
          this.msg='bbb'
          this.msg1 = this.$refs.msgDiv.innerHTML
          console.log(this.msg1)
          this.$nextTick(()=>{
            this.msg2=this.$refs.msgDiv.innerHTML
            console.log(this.msg2)
          })
        },
        toggle(item){
         this.filter = item
        }
      },

    }
</script>

<style scoped lang="scss">
    .content{
      .addborder{

      }
    }
</style>
