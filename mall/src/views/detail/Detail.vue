<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";

  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    components: {DetailNavBar, DetailSwiper},
    data() {
      return {
        id: null,
        topImages: []
      }
    },
    created() {
      // 存入传入的id
      this.id = this.$route.params.id

      // 根据id请求详情数据
      getDetail(this.id).then(res => {

      })
    }
  }
</script>

<style scoped>

</style>
