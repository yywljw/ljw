<template>
  <div id="app" class="app">
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
<!--    <HelloWorld></HelloWorld>-->
    <div id="test" class="test">{{text}}</div>
    <Header></Header>
    <button @click="goToLogin(id)">跳转到login</button>
<!--    <button @click="goToLogin2">跳转到login2</button>-->
<!--    <router-link to="/login">login</router-link>-->
    <router-link to="/login">login</router-link>
<!--    <router-link :to="{name:'login'}">login</router-link>   &lt;!&ndash;因为是对象 所以要用:to  让vue自动去解析&ndash;&gt;-->
    <router-link to="/login2/123">login2</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
 import  './todo/css/todo.scss'
  import Header from './todo/Header'
  import todo from './todo/todo'
 // import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  data(){
    return{
      text:'abc',
      id:122,
    }
  },
  components:{
    todo,Header
  },
  methods:{
    goToLogin(id){
      this.$router.push({name:'login',query:{id:id}})
    },
    goToLogin2(){
      this.$router.push({
        path:'/login2'
      })
    }
  }
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 500px;
  .test{

  }
  .fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }
}
</style>
