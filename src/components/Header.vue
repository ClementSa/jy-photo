<template>
  <div class="header">
    <div class="container">
      <router-link to="/HomePage" class="header-log">
        <img src="@/assets/imgs/logo.png" alt="">
      </router-link>
      <div class="header-tabbar">
        <ul>
          <li><router-link to="/HomePage">首页</router-link></li>
          <li @mouseover="dropdown" @mouseout="dropdown">
            <router-link to="/Works" class="dropdown-toggle" >公司简介</router-link>
            <div class="dropdown-menu" v-show="show">
              <router-link to="">品牌介绍</router-link>
              <router-link to="">明星作品</router-link>
              <router-link to="">服务保障</router-link>
              <router-link to="">自选摄影师</router-link>
              <router-link to="">分店介绍</router-link>
              <router-link to="">品牌活动</router-link>
            </div>
          </li>
          <li><router-link to="/Works">当季特惠</router-link></li>
          <li><router-link to="/Pdetail">旅拍城市</router-link></li>
          <li><router-link to="/Sanxi">客照欣赏</router-link></li>
          <li><router-link to="/Pdetail">客户微电影</router-link></li>
          <li><router-link to="/ClientCom">客户评价</router-link></li>
          <li><router-link to="/log_reg">会员登录</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show:false
    }
  },
  methods:{
    dropdown(){
      this.show = !this.show
    }
  },
  mounted() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header{position: fixed; top: 0px; z-index: 10000; height: 80px;width: 100%;background: #222}
  .container{width: 80%;margin: 0 auto;}
  .header-log{height: 6.66rem ;width: 20%;float: left;}
  .header-tabbar{
    display: flex;
    justify-content: center;
    height: 6.67rem; 
    width: 80%;
    overflow: hidden;
    ul{
      height: 100%;
      li{
        height: 60px;
        border-radius: 10px 10px 0 0;
        margin-top: 20px;
        text-align: center;
        line-height: 60px;
        color: #000;
        float: left;
        a{
          letter-spacing: 0.1rem;
          padding-right: 10px !important;
          padding-left: 10px !important;
          padding-bottom: 5px !important;
          font-family: "Arial";
          font-size: 1rem;
          color: #fff;
          padding-left: 20px;
        }
        a:hover{
          background-color: #666
        }
      }
      li:hover{
        background-color: #666
      }
    };
    .dropdown-menu{
      position: absolute;
      top: 6.6rem;
      width: 10rem;
      line-height: 3rem;
      background-color: #222;
      a{float: left;height: 3rem;width: 10rem;}
    };
    .dropdown-toggle::after{
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    }
  }
</style>
