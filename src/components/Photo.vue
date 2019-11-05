<template>
  <div>
    <div class="container">
      <div class="left_button">
        <h3>尚 品 旅 拍</h3>
        <ul>
          <li v-for="(item,i) of navlist" :key="i"><router-link to="javascript:;">{{item}}</router-link></li>
        </ul>
      </div>
      <div style="display:flex">
          <div style="width:165px;height:725px;"></div>
          <div class="right_button">
            <div style="margin-left:200px;display:flex;text-align: center;line-height: 50px">
              <router-link to="javascript:;" class="btn_a">厦门</router-link>
              <router-link to="javascript:;" class="btn_a">三亚</router-link>
              <router-link to="javascript:;" class="btn_a">丽江</router-link>
              <router-link to="javascript:;" class="btn_a">大理</router-link>
            </div> 
          <div style="margin-top:30px">
            <img src="../assets/imgs/1.jpg" alt="">
          
             <!-- <img src="../assets/imgs/2.jpg" alt=""> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navlist:['侣行','自由','深秋','复古','激情','暮色','溪谷','纪实','情绪','时尚',' 海风','夜色','原野','时光']
    }
  },
  mounted(){
    this.axios.get("/",{params}).then(res=>{
      if(res.data.code<0){
        this.$message("用户名不存在或密码错误");
      }else{
        this.$router.push({path:"/HomePage",params:res})
      }
    })
  }
}
</script>
<style scoped lang="less">

.container{
  position:relative;
  padding-top: 80px;
   width:1200px;
   height:800px;
}
.left_button{
  position: absolute;
  top:8rem;left:0;
  text-align: center;
  
}
h3{
    height: 5rem;
    line-height: 5rem;
    background-color: #252525;
    color: #fff;
  }
.main{
  width:165px;
  height:161px;
  background-color: #252525;
  color:#E7E7E7;
  line-height: 161px;
}
ul li{
  list-style:none;
}
.left_button>ul li{
  width:165px;
  height:50px;
  background-color: #4C4C4C;
  color:#E7E7E7;
  line-height: 50px;
}
.left_button>ul>li a{
 text-decoration: none;
 color:#E7E7E7;
}
.btn_a{
  display: block;
  width:123px;height:60px;
  background-color: #fff;
  border:1px solid #252525;
  color: #252525;
  font-size:35px;
  float:left;
  margin-left:30px;
  text-decoration: none;
}
.border{
  width:288px;
  height:161px;
  border:1px solid #f00;
  margin-left:150px;
  margin-top:30px;
  /* flex-direction: column; */
}
.right_button{
  width:1035px;
  height:700px;
  margin-top:30px;
  /* border:1px solid #f00; */
}
</style>
