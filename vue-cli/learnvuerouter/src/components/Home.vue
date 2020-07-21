<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页的内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: '你好啊',
        path: '/home/news'
      }
    },
    //  生命周期函数
    // created() {
    //   console.log('created');
    //   document.title = '首页'
    // },
    // mounted() {
    //   console.log('mounted')
    // },

    created() {
      console.log('home created');

    },
    // 销毁
    destroyed() {
      console.log('home destroyed')
    },
    // 这两个组件只有，该组件保持了状态使用了keep-alive，才是有效的。
    activated() {
      //console.log('activated')
      this.$router.push(this.path)
    },
    deactivated() {
    },
    // 返回到之前记录的路径上
    beforeRouteLeave(to,from,next){
      console.log(this.$route.path);
      this.path = this.$route.path;
      next();
    }
    // deactivated() {
    //   console.log(this.path);
    //   console.log('deactiveated')
    //   this.path = this.$route.path;
    // },
  }
</script>

<style scoped>

</style>
