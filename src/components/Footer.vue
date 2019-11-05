<template>
  <div class="footer">
    <hr>
    <div class="footer-words">
      <h2>景悦旅拍,只用真实客照说话</h2>
      <p>景悦旅拍，中国旅拍领军品牌，淘宝天猫连续六年全网销量前列!微博粉丝400万!粉丝量转发量行业前列。</p>
      <span><router-link to="" v-for="(city,i) of homeCity" :key="i">{{city}}</router-link></span>
      <span><router-link to="" v-for="(city,i) of abroadCity" :key="i">{{city}}</router-link></span>
      <span><router-link to="" v-for="(city,i) of hotCityLink" :key="i">{{city}}</router-link></span>
      <p class="tel">咨询热线： xxx-xxxx-xxx (在线时间：09:00-22:00)</p>
      <p class="tel">总经理投诉热线：xxx-xxxx-xxxx (在线时间：09:00-21:00)</p>
      <p class="tel">媒体接洽/合作邮箱：xxx@xx.com</p>
      <p class="tel">招聘联系邮箱：xxx@xx.com</p>
      <p class="tel">地址: XXXXXXXXXXXXX 邮编：361000</p>
    </div>
    <div class="footer-nav"></div>
    <div class="foot-link">
      <ul>
        <li v-for="(l,i) of footLink" :key="i"><router-link to="" >{{l}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return{
        homeCity:['三亚 / ','厦门 / ','丽江 / ','大理 / ','深圳 / ','北京 / ','香港 / ','澳门 / ','香格里拉 / ','桂林 / ','杭州 / ','大连 / ','青岛'],
        abroadCity:['巴黎 / ','普罗旺斯 / ','希腊 / ','布拉格 / ','瑞士 / ','罗马 / ','威尼斯 / ','伦敦 / ','佛罗伦萨 / ','巴塞罗那 / ','葡萄牙 / ','荷兰 / ','土耳其 / ','冰岛'],
        hotCityLink:['海南 / ','尚品景悦 / ','鼓浪屿 / ','景悦店 / ','天津 / ','福州 / ','西藏 / ','尚品景悦 / ','三亚景悦会馆 / ','三亚景悦公馆'],
        footLink:['公司首页','公司简介','人才招聘','银行账户','客照欣赏','客户微电影','联系我们']
      }
    }
  };
</script>

<style scoped lang="less">
  .footer{
    padding-top: 10%;
  }
  .footer-words{
    padding-top: 3.125%;
    text-align: center;
    letter-spacing: 1px;
    font-family: "思源黑体";
    padding-left: 30px;
    padding-right: 30px;
    h2{margin-bottom: 3.125%;}
    p{text-align: center; margin-top: 0; margin-bottom: 1rem; }
    span{font-size: 1.6rem;display: block; line-height: 32px; margin-bottom: 0px;}
    .tel{font-size: 1.6rem;margin-bottom: 0;line-height: 32px;}
  }
  .footer-nav{border-top: #ccc 1px dashed;overflow: hidden;height: 1px;width: 50%;margin: 2.5% auto 1.5%;}
  .foot-link{
    ul{
      list-style: none;
      text-align: center;
      margin-bottom: 1.8%;
      li{
        display: initial;
        text-decoration: underline;
        font-size: 1.4rem;
        a{
          color: #333 !important;
          margin-right: 1%;
          text-decoration: none;
          background-color: transparent;
        }
      }
    }
  }
</style>