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
    <!--    <router-link v-bind:to="'/user/'+userId">用户</router-link>-->
    <!--    <router-link :to="{path:'/profile',query:{name:'code',age:'18',height:'180'}}">档案</router-link>-->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>


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
      }, userClick() {
        this.$router.push('/user/' + this.userId)
      },
      profileClick() {
        this.$router.push({
          path:'/profile',
          query:{
            name:'kobe',
            age:19,
            height:1.88
          }
        })
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
