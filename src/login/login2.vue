<template>
  <div>
    <span>登录到2啦</span>
  </div>
</template>

<script>
    export default {
        name: "login2",
      props:['canshu'],
      data(){
          return{

        }
      },
      created() {

      },
      mounted() {
          // console.log(this.$route.params.canshu)  可以获取到参数
        console.log(this.canshu)
      }
    }
</script>

<style scoped>

</style>
