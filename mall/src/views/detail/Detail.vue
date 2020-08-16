<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods-info="goodsInfo"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
    </scroll>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

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
      Scroll,
    },
    data() {
      return {
        id: null,
        topImages: [],
        goodsInfo: {},
        shop: {},
        detailImages: {},
        detailInfo: {}
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
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
