<template>
  <div>
    <span>登录到1啦</span>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getUrlParam} from '../utils/common'
    export default {
        name: "login",
      props:['canshu'],
      mounted(){
          console.log(this.canshu)
      },
      created(){
        this.entId = getUrlParam('id')
        console.log(this.entId)
        console.log(this.$route)
      },
      data(){
          return{
              entId:'',
          }
      },
      mounted() {
     //     console.log(this.$route)  //可以拿到传过来的参数

      }
    }
</script>

<style scoped>

</style>
