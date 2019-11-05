<template>
<div class="lunbotu">
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(1) {
    background-image:url("../assets/imgs/2.jpg");

  }
  
  .el-carousel__item:nth-child(2) {
   background-image:url("../assets/imgs/1.jpg");

  }
  .el-carousel__item:nth-child(3) {
   background-image:url("../assets/imgs/3.jpg");
  height:100%;
  width:100%;
  overflow: hidden;
  background-size:cover;

  }
  .el-carousel__item:nth-child(4) {
   background-image:url("../assets/imgs/4.jpg");
  }
  .el-carousel__item:nth-child(5) {
   background-image:url("../assets/imgs/5.jpg");
   
  }
   .el-carousel__item:nth-child(6) {
   background-image:url("../assets/imgs/6.jpg");
  }
  .lunbotu{
      width:100%;
      height:300px;
  }
  .el-carousel__item>image{
      width:100%;
  }
</style>