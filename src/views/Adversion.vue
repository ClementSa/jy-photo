<template>
  <div class="contianer">
    <div class="all">
    <div class="packet">
      <div class="p1">
          <img style="width:13%" src="@/assets/imgs/1.png" alt="">
          <span>景悦旅拍</span>
          <a href="javascript:;" class="btn_x" @click="hide">x</a>
      </div>
      <span class="p1">旅拍现金券</span>
      <p class="p2">2000</p>
      <input v-model="inputMsg" type="text" placeholder="请输入电话号码" id="inp" style="color:#000"/>
      <!-- <a href="javascript:;" id="btn" @click="success">立即领取</a> -->
      <el-button id="btn" :plain="true" @click="success">立即领取</el-button>
     </div>
    </div>
    <div class="adbox">
      <div class="adbox_1">
        <div class="mar">
          <span>旅拍现金券</span>
        </div>
        <div class="mar">
          <span class="pad">RMB 2000</span>
        </div>
        <a class="adbox_btn pad" href="javascript:;"  @click="show2">立即领取</a>
      </div>
      <div class="adbox_2">
        <div class="mar">
          <span class="pad">新 人 有 礼</span>
        </div>
        <div class="mar">
          <span class="pad">九折优惠</span>
        </div>
        <a class="adbox_btn pad" href="javascirpt:;" @click="show1">立即领取</a>
        <!-- <el-button :plain="true" @click="open2">成功</el-button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      radio:1,
      input: '',
      inputMsg:""
    }
  },
  mounted:function(){
    setTimeout(()=>{
      this.show2();
    },5000)
  },
  methods:{
    show2(){
      var Bg = document.querySelector(".packet");//添加点击事件
      Bg.style.display = "block"; //点击页面出现遮罩
    },
    show1(){
      this.$router.push('/')
    },
    hide(){
      var packet=document.querySelector(".packet");
      // console.log(packet);
      packet.style.display="none"; 
    },
    success(){
      var packet=document.querySelector(".packet");
      // console.log(packet);
      var reg=/^1[3-9][0-9]{9}$/
      if(reg.test(this.inputMsg)){
        var url="/packet";
        var obj={phone:this.inputMsg};
        console.log(obj)
        this.axios.get(url,{params:obj}).then(res=>{
          console.log(res)
          if(res.data.code==1){
            this.$alert('领取成功,请到个人中心查看','领取成功',{
              confirmButtonText:"确定",
              callback: action => {
                this.$message({
                  type:'info',
                  message:`action: ${ action }`
                })
              }  
            })
            packet.style.display="none"
            this.inputMsg="";
            this.$router.push('/log_reg')
          }else{
            this.$alert('您已经领取过了','领取失败',{
              confirmButtonText:"确定",
              callback: action => {
                this.$message({
                  type:'info',
                  message:`action: ${ action }`
                })
              }  
            })
            this.inputMsg="";
          }
        }).catch(err=>{
          console.log(err);
        })
        
        
        // console.log("lingqu")
      }else{
        this.inputMsg='';
        this.$alert('输入格式有误,请重新输入!', '领取失败', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        return;
      }
      
    }
  },
  
  
}
</script>
<style scoped>
/* 背景图片 */
.container{z-index:10;}
  .all{
    position: relative;
  }
  .packet{
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    z-index: 5000;
    left: 50%;
    top: 50%;
    margin-top:-150px;
    margin-left:-100px;
    display: none;
    width:200px;height:305px;
    background-color:#f00;
    background-image: url( '../assets/imgs/packet.jpg');
    background-repeat:no-repeat;
		background-size:contain;
    color:#F8EDAB;
    border-radius:10px;
  }
  /* 文字样式 */
  .p1{
    text-align: center;
    font-size:25px;
    display: flex;
    justify-content: space-around;
    margin-top:5px;
  }
  .p2{
    text-align: center;
    font-size:45px;
    margin-top:95px;
  }
  #inp{
    display: block;
    width:79%;height:30px;
    margin:5px auto;
    border-radius:5px;
  }
  #btn{
    display: block;
    width:79%;height:30px;
    background: #F8EDAB;
    margin:10px auto;
    border-radius:5px;
    color:#f00;
    text-align: center;
    font-size:25px;
    font-weight: bolder;
    line-height:30px; 
    padding:0;
  }
  .btn_x{
    display: block;
    width:30px;height:30px;
    font-size:25px;
    border-radius:50%;
    background: #000;
    opacity: 0.4;
    color:#fff;
    line-height: 30px;
  }
.adbox{
  width:150px;height:300px;
  background:#000;
  position:fixed;
  right:0;top:50%;
  margin-top:-150px;
   text-align: center;
   z-index: 6000;
}
.contianer{
  width:100%;height:100%;
  position:relative;
}
.adbox_1{
  width:140px;height:135px;
  border:1px solid #FBF9C9;
  margin-top:15px;
  margin-left:15px;
  color:#FBF9C9;
  font-size:20px;
}
.adbox_2{
  width:140px;height:135px;
  border:1px solid #FBF9C9;
  margin-left:15px;
  color:#FBF9C9;
  font-size:20px;
}
.adbox_btn{
  display: block;
    width:110px;height:35px;
    background: #FBF9C9;
    color:#000;
    font-weight:bolder;
    font-size:25px;
    margin:0 auto;
    border-radius: 3px;
    margin-top:12px;
    line-height: 35px;
  }
  .mar{margin-top:10px;}
  
</style>
