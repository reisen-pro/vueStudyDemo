<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="titles" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {
    getHomeMultidataBanner,
    getHomeMultidataRecommend,
    getHomeGoods
  }
    from "network/home"


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      FeatureView,
      TabControl,
      RecommendView,
      GoodsList
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
      }
    },
    computed:{
      showGoods() {
        return this.goods[this.currentType].list
      }
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
        console.log('currentType'+this.currentType)
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
          console.log(type+' --- '+res.data);
          this.goods[type].list.push(...res.data)
          this.goods[type].page += 1

        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
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
  }
</style>
