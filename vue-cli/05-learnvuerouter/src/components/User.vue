<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <h2>{{userId}}</h2>
    <!--    <h2>{{$router.params.abc}}</h2>-->
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    created() {
      console.log('created');
      document.title = '用户'
    },
    computed: {
      userId() {
        return this.$route.params.userId;
      }
    },
    methods: {
      btnClick() {
        //  所有的组件都继承自Vue类的原型
        console.log(this.$router);
        console.log(this.$route);
        this.test();
        console.log(this.name);
      }
    }
  }
</script>

<style scoped>

</style>
