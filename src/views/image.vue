
<template>    
<div class="demo-image__lazy">
  <!-- <el-image v-for="url in urls" :key="url" :src="url" lazy ></el-image> -->
  <img src="../assets/imgs/image.jpg" alt="">
  <img src="../assets/imgs/image2.jpg" alt="">
</div>
</template>
<script>
  export default {
    data() {
      return {
        urls: [
          'http://cdn.img.121314.com//statics/files/10/20190919/de25b3cebbe5b4c9c6073819042cfa5e-600952.jpg',
          'http://cdn.img.121314.com//statics/files/10/20190905/615d0a18b17606beda70c251303810c2-610954.jpg',      
        ]
      }
    }
  }
</script>
<style  scoped>
    .demo-image__lazy{
  width:100%;
  height:1500px;
  /* margin-left:100px; */

    }

</style>
