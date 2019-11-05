<template>
    <div>
        <div class="login_bg" v-show="see" :style="z_index">
            <div class="title">
                <div  class="gb" @click="gb">
                    x
                </div>
            </div>
            <div class="logo">
                <img src="../assets/imgs/logo_reg.png" alt="">
                <span>旅拍用户名密码登录</span>
            </div>
            <div class="form">
            <el-input placeholder="手机/用户名" v-model="inputUser" clearable></el-input>
            </div>
            <div class="form">
            <el-input placeholder="密码" v-model="inputUpwd" show-password></el-input>
            </div>
            <div class="form">
            <input type="checkbox">
            <label for="">下次自动登录</label>
            </div>
            <div class="form">
            <button class="btn" @click="login">登录</button>
            </div>
            <div class="reg">
                <span @click="reg()">注册</span>
            </div>
    </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            see:true,
            // inputObj:{inputUser:"",inputPhone:""},
            inputUpwd:"",
            inputUser:"",
           z_index:{
               zIndex:10
           }
        }
    },
    methods:{
        gb(){
            this.see=false
        },
        login(){
            var regPhone=/^1[3-9][0-9]{9}$/;
            var regUser=/^[a-z0-9]{2,9}$/i;
            var regUpwd=/^[0-9]{3,9}$/
            var url="login"
             console.log(this.inputUser)
            var obj={uname:this.inputUser,upwd:this.inputUpwd}
            console.log(obj)
            if(regUser.test(this.inputUser)&&regUpwd.test(this.inputUpwd)){
                this.axios.get(url,{params:obj}).then(res=>{
                    if(res.data.code<0){
                        console.log(res)
                        this.$message("用户名不存在或密码错误")
                    }else{
                       this.$router.push("/")
                    }
                })
            }else if(!regUser.test(this.inputUser)){
                this.$message("用户名格式错误")
            }else if(!regUpwd.test(this.inputUpwd)){
                this.$message("密码格式错误")
            }
        },
        reg(){
          this.z_index.zIndex--
        }
    }
}
</script>
<style scoped>
.login_bg{
     width:356px;
     height:408px;
     position:absolute;
     left:50%;
     top:50%;
     transform:translate(-178px,-204px);
     background-color: aliceblue
 }
.title{
    width:100%;
    height:44px;
}
.gb{
    font-size:20px;
    color:#bbb;
    line-height: 44px;
    position: absolute;
    right:30px;
    cursor: pointer;
}
.logo{
    display: flex;
    justify-content: space-around;
    width:300px;
    height:64px;
    line-height: 32px
}
.logo>img{
    width: 32px;
    height: 32px;
}
.form{
    margin:15px auto;
    width: 300px
}
.btn{
    padding: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(100,198,246);
    color: white;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}
.reg{
   text-align: center;
    margin:25px auto;
    width: 300px
}
.reg>span{
    cursor: pointer;
    color: rgb(100,198,246);
}
</style>


