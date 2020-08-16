<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods-info="goodsInfo"/>
      <detail-shop-info :shop="shop"/>
    </scroll>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";

  import {getDetail, GoodsInfo, Shop} from "network/detail";

  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "Detail",
    components: {
      DetailBaseInfo,
      DetailNavBar,
      DetailSwiper,
      DetailShopInfo,
      Scroll
    },
    data() {
      return {
        id: null,
        topImages: [],
        goodsInfo: {},
        shop: {},
        detailImages:{}
      }
    },
    created() {
      // 存入传入的id
      this.id = this.$route.params.id

      // 根据id请求详情数据
      getDetail(this.id).then(res => {

        const data = res.data;
        this.topImages = data.topImages;

        this.goodsInfo = new GoodsInfo(data, data.columns, data.services);

        this.shop = new Shop(data.shopInfo)
      })
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
