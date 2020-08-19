<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods-info="goodsInfo"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="itemparams"></detail-param-info>
    </scroll>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";

  import {getDetail, GoodsInfo, Shop} from "network/detail";

  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "Detail",
    components: {
      DetailBaseInfo,
      DetailNavBar,
      DetailSwiper,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      Scroll,
    },
    data() {
      return {
        id: null,
        topImages: [],
        goodsInfo: {},
        shop: {},
        detailInfo: {},
        itemparams:{}
      }
    },
    created() {
      // 存入传入的id
      this.id = this.$route.params.id

      // 根据id请求详情数据
      getDetail(this.id).then(res => {
        const data = res.data;

        console.log(data)

        // 获取顶部轮播图片数据
        this.topImages = data.topImages;

        // 将商品信息封装到GoodsInfo类中
        this.goodsInfo = new GoodsInfo(data, data.columns, data.services);

        // 将店铺信息封装到Shop类中
        this.shop = new Shop(data.shopInfo)

        // 保存商品的详情数据
        this.detailInfo = data.detailInfo;

        this.itemparams = data.itemParams;
        console.log(this.itemparams)
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    background-color: #fff;
    z-index: 9;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
