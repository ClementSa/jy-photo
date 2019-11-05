<template>
  <div>
    <Header></Header>
    <Com :com="comments"></Com>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Com from "@/components/Com";

export default {
  data() {
    return{
      comments:[]
    }
  },
  components:{
    Footer,Header,Com
  }
}
</script>

<style scoped lang="less"></style>