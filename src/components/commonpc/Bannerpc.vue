<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item,index) in bigImage" :key="index">
      <img :src="item" alt="" class="img-ad">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data(){
        return {
            bigImage:[
                require("../../assets/imgs/bannerp1.jpg"),
                require("../../assets/imgs/bannerp2.jpg"),
                require("../../assets/imgs/bannerp3.jpg")
            ]
        }
    }
}
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__container{height:auto;}
  .img-ad{width:100%;}
</style>