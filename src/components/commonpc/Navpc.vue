<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">网站首页</el-menu-item>
    <el-menu-item index="2">走进景悦</el-menu-item>
    <el-menu-item index="3" @click="city">旅拍城市</el-menu-item>
    <el-menu-item index="4" @click="sanxi">客照欣赏</el-menu-item>
    <el-menu-item index="5">会员登陆</el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      city(){
        this.$router.push("/Pdetail")
      },
      sanxi(){
        this.$router.push("/Sanxi")
      }
    }
  }
</script>
<style>
.el-menu.el-menu--horizontal{border:none;}
.el-menu{background:none;}
.el-menu--horizontal>.el-menu-item.is-active{color:#d10728;}
.el-menu--horizontal>.el-menu-item{height:80px; line-height:80px;}
.el-menu--horizontal>.el-submenu .el-submenu__title{
   height:80px; line-height:80px;
    border-bottom: none;
    color: #909399; 
}
.el-menu--horizontal>.el-menu-item.is-active{border-bottom: 2px solid #d10728;}



@media screen and (min-width:992px) and (max-width:1199px){



}
@media screen and (min-width:768px) and (max-width:991px){

}
@media screen and (max-width:767px){
.el-menu--horizontal>.el-menu-item{width:100%;text-align: center;}
.el-menu--horizontal>.el-submenu{width:100%;text-align:center;}
.el-menu--horizontal>.el-menu-item{ height: 45px; line-height: 45px;}

}








    
</style>
