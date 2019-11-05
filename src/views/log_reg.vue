<template>
    <div>
        <div class="Mask"></div>
        <register01 class="reg"></register01>
        <login1 class="login">
        </login1>
        
    </div>
</template>
<script>
// 组件引入
import login1 from "./login1"
import register01 from "./register01"
export default {
    // 引入组件login
    components:{login1,register01}
}
</script>
<style scoped>
 .Mask{
     overflow: hidden;
     position:fixed;
     z-index:1;
     width:100%;
     height:1600px;
     top:0px;
     left: 0px;
     background: rgb(0, 0, 0);
     opacity: 0.6;
 }
 
 /* .reg{
      z-index: 3;
     width:376px;
     height:450px;
     position:absolute;
     left:50%;
     top:50%;
     transform:translate(-188px,-225px);
     background-color: aliceblue

 } */
</style>



