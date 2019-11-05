<template>
  <div class="comment">
    <div class="comment-main">
      <div class="comment-info" v-for="(con,i) of comments" :key="i">
        <div class="left-msg">
          <h2>{{con.title}}</h2>
          <p>{{con.content}}</p>
          <p class="date">{{con.time}}</p>
        </div>
        <div class="right-img">
          <img :src="con.imgurl" alt="评论附图">
        </div>
      </div>
    </div>
    <div class="newcomment" v-show="ismember">
      <textarea name="" cols="30" rows="10" placeholder="请写下你的评论"></textarea>
      <button>发送评论</button>
    </div>
  </div>
</template>

<script>
export default {
  props:['com'],
  data () {
    return{
      comments:[{title:"巴厘岛婚纱照",content:"每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风",time:'2019-10-25',imgurl:require("@/assets/imgs/1.jpg")},{title:"巴厘岛婚纱照",content:"每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风",time:'2019-10-25',imgurl:require("@/assets/imgs/2.jpg")},{title:"巴厘岛婚纱照",content:"每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风每个人的心上都有缺口，呼呼往灵魂里灌着寒风",time:'2019-10-25',imgurl:require("@/assets/imgs/3.jpg")}]
    }
  }
}
</script>

<style scoped lang="less">
  .comment{position: relative;padding-top: 10rem;}
  .comment-main{width: 80%;margin: 0 auto;}
  .comment-info{
    position: relative;
    width: 100%;
    margin: 6rem 0;
    border:0.3rem solid #3c9d9b;
    overflow: hidden; 
  }
  .left-msg{
      width: 60%;float: left;  
    }
    p{
      padding: 3rem;
      font-size: 2.6rem;
      }
    h2{
      height: 10%;line-height: 6rem; 
      padding-left: 2rem; color: #fff; background-color: #394a6d;
      }
    .right-img{
      width: 40%;
      float: right;
    }
    img{width: 100%; height: 100%;}    
</style>