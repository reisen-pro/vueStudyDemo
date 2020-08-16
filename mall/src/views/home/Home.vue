<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control :titles="titles"
                 @tabClick="tabClick"
                 ref="tabControlTop"
                 class="tab-control"
                 v-show="isTabFixed"/>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"
                   @swiperImageLoad="swiperImageLoad"/>

      <recommend-view :recommends="recommends"/>

      <feature-view/>

      <tab-control :titles="titles"
                   @tabClick="tabClick"
                   ref="tabControl"/>

      <goods-list :goods="showGoods"/>

    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import {debounce} from "common/utils";

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
  import Scroll from "components/common/scroll/Scroll";


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
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    destroyed() {
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 10)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    mounted() {

      /*      const refresh = function (...args) {
              if (timer) clearTimeout(timer)
              timer = setTimeout(() => {
                func.apply(this, args)
              }, delay)
            }*/

      // 监听item中图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('itemImageLoad', () => {
        this.$refs.scroll.refresh()
      })

      // 获取tabcontrol的offsettop
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
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
        this.$refs.tabControlTop.currentIndex = index;
        this.$refs.tabControl.currentIndex = index;
      },
      // 回滚到顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500);
      },

      contentScroll(position) {
        // 判断backtop是否显示
        this.isShowBackTop = Math.abs(position.y) > 1000;

        // 决定tabcontrol是否吸顶
        this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop
      },

      loadMore() {
        this.getHomeGoods(this.currentType);
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
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
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;

    /*  在使用浏览器原生滚动时，为了让导航不跟随一起滚动
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;*/
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
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
