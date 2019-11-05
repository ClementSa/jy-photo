<template>
<div>
    <div class="top">
            <Header></Header>
            <!-- <Adversion></Adversion> -->
            <Chat></Chat>
    </div>
    <Bannerpc></Bannerpc>
    <div class="xue">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>客户婚纱照</el-breadcrumb-item>
            <el-breadcrumb-item>8月第4季最新客照</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="main_a">
        <div class="a_left">
            <img v-for="(item,index) in listImges" :src="item" alt="" :key="index">
        </div>
        <div class="a_right">
            <ul class="nav-b">
                <li v-for="(item,index) in navlist" :key="index"><a href="">{{item}}</a></li>
            </ul> 
        </div>
    </div>
    <Footer></Footer>
</div>
</template>
<script>
import Header from "../Header.vue"
import Footer from "../Footer.vue"
import Adversion from "../../views/Adversion.vue"
import Chat from "../../views/Chat.vue"
import Navpc from "../commonpc/Navpc.vue"
import Bannerpc from "../commonpc/Bannerpc.vue"
export default {
    data(){
        return {
            navlist:["09月第4季最新客照","09月第2季最新客照","09月第1季最新客照","大08月第4季最新客照理","08月第3季最新客照","08月第2季最新客照"],
            listImges:[
                require("../../assets/imgs/1.jpg"),
                require("../../assets/imgs/2.jpg"),
                require("../../assets/imgs/3.jpg")
            ]
        }
    },
    components:{
      "Navpc":Navpc,
      "Bannerpc":Bannerpc,
      "Header":Header,
      "Adversion":Adversion,
      "Chat":Chat,
      "Footer":Footer
    }
}
</script>
<style scoped>
.top{display:flex;justify-content:space-between; align-items:center; background:#000;box-sizing:border-box;}
.top>div:nth-child(1){padding:10px 25px;}
.top>div:nth-child(2){padding:0 25px;}
.xue{width:1200px;margin:0 auto;}
.navlist{width:1200px;margin:25px auto;}
.navlist>ul{display:flex;flex-wrap: wrap; box-sizing:border-box;justify-content: center;}
.navlist>ul>li{width:120px; background:#fff; border: solid 1px #666; margin:5px;text-align: center;font-size:12px;}
/* .footer{width:100%;background:#000; height: 40px; line-height: 40px; text-align: center; color:#fff; font-size:14px;} */
.navlist>ul>li a{display:block; padding:5px 0; color:#666}
.navlist>ul>li a:hover{background:#000; color:#fff;}




.main_a{width:1200px; margin:0 auto;display:flex;padding:25px 0;box-sizing:border-box;}
.a_left{width:70%;}
.a_right{width:30%;}
.a_left>img{width:100%}
.nav-b{display:flex; flex-wrap:wrap; padding-left:25px; box-sizing:border-box; }
.nav-b>li{width:100%;border:solid 1px #ccc;text-align:center;margin-bottom:15px;}
.nav-b>li a{display:block; padding:10px 0; color:#666}
.nav-b>li a:hover{background:#000; color:#fff;}

@media screen and (min-width:992px) and (max-width:1199px){
.xue{width:90%;margin:0 auto;}
.navlist{width:100%;margin:25px auto;}
.main_a{width:100%; margin:0 auto;display:flex;padding:25px;box-sizing:border-box;}
}
@media screen and (min-width:768px) and (max-width:991px){
.xue{width:90%;margin:0 auto;}
.navlist{width:100%;margin:25px auto;}
.main_a{width:100%; margin:0 auto;display:flex;padding:25px;box-sizing:border-box;}
}
@media screen and (max-width:767px){
.xue{width:90%;margin:0 auto;}
.navlist{width:100%;margin:25px auto;}
.top>div:nth-child(2){padding:15px 25px;}
.main_a{width:100%; margin:0 auto; display:flex; flex-wrap:wrap; padding:25px;box-sizing:border-box;}
.a_left{width:100%;}
.a_right{width:100%;}
.nav-b{padding-left:0px; margin-top:15px; }
}

</style>















