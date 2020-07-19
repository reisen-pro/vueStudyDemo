<template>
  <div id="app">
    <!--    <h2>我是APP组件</h2>-->
    <!--    <router-view></router-view>-->
    <!--    <h2>Hello World</h2>-->
    <!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--    <router-link to="/about" tag="button">关于</router-link>-->
    <!--    <router-view></router-view>-->

    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'lisi'
      }
    },
    methods: {
      homeClick() {
        // 通过代码的方式修改路由 vue-router
        this.$router.push('home');
        //this.$router.replace('home');
        console.log("homeClick");
      },
      aboutClick() {
        this.$router.push('about');
        //this.$router.replace('about');
        console.log("aboutClick");
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /* 当处于活跃时 router-link-active */
  .active {
    color: red;
  }
</style>
