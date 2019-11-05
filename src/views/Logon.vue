<template>
  <div>
      
  </div>
</template>


<script>
export default {
  data(){
    // 年龄
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
  // 用户
  var checkphone = (rule, value, callback) => {
        var reg=/^1[3-9][0-9]{9}$/
        if (!value) {
          return callback(new Error('电话不能为空'));
        }
        setTimeout(() => {
          if (!reg.test(value)) {
            callback(new Error('请输入正确的电话号码'));
          }  else {
              callback();
            }
          } ,1000);
      };
      // 密码
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      // 密码确认
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      // 数据
      return{
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          phone:''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          phone:[
            {validator:checkphone,trigger:"blur"}
          ]
        },
      };
  },
  methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功');
          } else {
            console.log('注册失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>

<style scoped>
.container{
  width:100%;
  height:100%;
}
.head{
  margin:20px 0px 15px 0px;
  display:flex;
  justify-content:space-around;
  width:350px;
  height:25%;
}
.logo>img{
  width:70px;
  height:70px;
}
.title_{
    font-size:40px;
    line-height:70px;
    color:#bbb
}
.title{
    font-size: 20px;
    /* vertical-align:middle; */
    line-height:80px;
    color:#bbb
}
.form{
    width:350px;
}
</style>


