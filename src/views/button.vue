<template>
<div>
<el-radio-group v-model="radio1">
<el-radio-button label="上海"></el-radio-button>
<el-radio-button label="北京" @click="index"></el-radio-button>
<el-radio-button label="广州" @click="index"></el-radio-button>
<el-radio-button label="深圳" @click="index"></el-radio-button>
<el-radio-button label="重庆" @click="index"></el-radio-button>
<el-radio-button label="杭州" @click="index"></el-radio-button>
<el-radio-button label="桂林" @click="index"></el-radio-button>
<el-radio-button label="青岛" @click="index"></el-radio-button>
<el-radio-button label="香港" @click="index"></el-radio-button>
<el-radio-button label="澳门" @click="index"></el-radio-button>
<el-radio-button label="香格里拉" @click="index"></el-radio-button>
</el-radio-group>
</div>
</template>

<script>
export default {
data () {
return {
radio1: '#',
radio2: '#',
radio3: '#',
radio4: '#'
};
}
}
</script>
</script>
  <style scope>
  
 .el-radio-button{
  background-color: #d3dce6;
  margin-top:0;
  margin-left:10px;
 }


  </style>
  
    