<template>
<div>
    <div class="top">
        <Header></Header>
        <Adversion></Adversion>
        <Chat></Chat>
        <!-- <div><img src="../../assets/imgs/logo.png" alt=""></div> -->
        <!-- <div>
            <Navpc></Navpc>
        </div> -->
    </div>
    <Bannerpc></Bannerpc>
    <div class="xue">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="navlist">
        <ul>
            <li v-for="(item,index) in navlist" :key="index">
                <a href="#">{{item}}</a>
            </li>
        </ul>
    </div>
    <div class="main">
        <img v-for="(item,index) in listImges" :src="item" alt="" :key="index">
    </div>
    <!-- <div class="footer">
        公司首页 公司简介 人才招聘 银行账户 客照欣赏 客户微电影 联系我们
    </div> -->
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
            navlist:["三亚","厦门","丽江","大理","青岛","大连","桂林","深圳","香港","澳门","北京","杭州","香格里拉","巴厘岛","普吉岛","马尔代夫","日本","欧洲","巴黎","布拉格"],
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
.main{width:1200px;margin: 0 auto;}
.main>img{width:100%;margin-bottom:15px;}
/* .footer{width:100%;background:#000; height: 40px; line-height: 40px; text-align: center; color:#fff; font-size:14px;} */
.navlist>ul>li a{display:block; padding:5px 0; color:#666}
.navlist>ul>li a:hover{background:#000; color:#fff;}

@media screen and (min-width:992px) and (max-width:1199px){
.xue{width:90%;margin:0 auto;}
.navlist{width:100%;margin:25px auto;}
.main{width:100%;margin: 0 auto;}
}
@media screen and (min-width:768px) and (max-width:991px){
.xue{width:90%;margin:0 auto;}
.navlist{width:100%;margin:25px auto;}
.main{width:100%;margin: 0 auto;}
}
@media screen and (max-width:767px){
.xue{width:90%;margin:0 auto;}
.navlist{width:100%;margin:25px auto;}
.main{width:100%;margin: 0 auto;}
.top>div:nth-child(2){padding:15px 25px;}
}

</style>















