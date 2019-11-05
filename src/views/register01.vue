<template>
    <div>
        <div class="register_bg" v-show="see" :style="z_index">
            <div class="title">
                <div  class="gb" @click="gb">
                    x
                </div>
            </div>
            <div class="logo">
                <img src="../assets/imgs/logo_reg.png" alt="">
                <span>旅拍欢迎您的注册</span>
            </div>
            <div class="form">
            <el-input placeholder="手机" v-model="inputPhone" clearable></el-input>
            </div>
            <div class="form">
            <el-input placeholder="用户名" v-model="inputUser" clearable></el-input>
            </div>
            <div class="form">
            <el-input placeholder="密码" v-model="inputUpwd" show-password></el-input>
            </div>
            <div class="form">
            <input type="checkbox">
            <label for="">阅读并接受旅拍用户协议</label>
            </div>
             <div class="form">
            <button class="btn" @click="reg()">注册</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
            see:true,
            inputPhone:"",
            inputUser:"",
            inputUpwd:"",
             z_index:{
               zIndex:10
           }
        }
    },
    methods:{
        gb(){
            this.see=false
        },
        reg(){
            var regPhone=/^1[3-9][0-9]{9}$/;
            var regUser=/^[a-z0-9]{2,9}$/i;
            var regUpwd=/^[0-9]{3,9}$/;
            var url="register";
            // console.log(this.inputPhone)
            var obj={uname:this.inputUser,upwd:this.inputUpwd,uphone:this.inputPhone}
             if(regUser.test(this.inputUser)&&regUpwd.test(this.inputUpwd)&&regPhone.test(this.inputPhone)){
                 this.axios.get(url,{params:obj}).then(res=>{
                    if(res.data.code<0){
                        console.log(res)
                        this.$message("用户名已存在")
                    }else{
                        this.$message("注册成功！")
                       this.z_index.zIndex--
                    }
                }).catch(err=>{
                    console.log(err);
                })
             }else if(!regUser.test(this.inputUser)){
                this.$message("用户名格式错误")
            }else if(!regUpwd.test(this.inputUpwd)){
                this.$message("密码格式错误")
            }else if(!regPhone.test(this.inputPhone)){
                this.$message("电话格式错误")
            }else{
                this.$message("其他")
            }
        }
    }
    
}
</script>
<style scoped>
.register_bg{
   
     width:376px;
     height:450px;
     position:absolute;
     left:50%;
     top:50%;
     transform:translate(-188px,-225px);
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
    margin:20px auto;
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
</style>