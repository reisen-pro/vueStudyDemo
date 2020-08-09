<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>

    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import BScroll from 'components/common/scroll/Scroll'

  import BackTop from "components/content/backTop/BackTop";

  import {
    getHomeMultidataBanner,
    getHomeMultidataRecommend,
    getHomeGoods
  }
    from "network/home"
  import Scroll from "../../components/common/scroll/Scroll";


  export default {
    name: "Home",
    components: {
      Scroll,
      NavBar,
      HomeSwiper,
      FeatureView,
      TabControl,
      RecommendView,
      GoodsList,
      BScroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    mounted() {

      const refresh = this.debounce(this.$refs.scroll.refresh)

/*      const refresh = function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }*/

        this.debounce(this.$refs.scroll.refresh, 500)
      // 监听item中图片加载完成
      this.$bus.$on('itemImageLoad', () => {
        this.$refs.scroll.refresh()
      })
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidataBanner();

      // 2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('news');
      this.getHomeGoods('sell');

    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      debounce(func, delay) {
        let timer = null
        return function () {
          if (timer) clearTimeout(timer)

          timer = setTimeout((...args) => {
            func.apply(this, args)
          }, delay)
        }
      },
      tabClick(index) {
        let type = 'pop';
        switch (index) {
          case 0 :
            type = 'pop'
            break
          case 1 :
            type = 'news'
            break
          case 2:
            type = 'sell'
            break
        }
        this.currentType = type;
        console.log('currentType' + this.currentType)
      },
      // 回滚到顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500);
      },

      contentScroll(position) {
        this.isShowBackTop = Math.abs(position.y) > 1000;
      },

      loadMore() {
        this.getHomeGoods(this.currentType);
      },
      /**
       *  网络请求相关的代码
       */
      getHomeMultidataBanner() {
        getHomeMultidataBanner().then(res => {
          this.banners = res.data;
        })
        getHomeMultidataRecommend().then(res => {
          this.recommends = res.data;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp();
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    /*height: calc(100% - 93px);*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
