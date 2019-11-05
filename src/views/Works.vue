<template>
  <div class="home">
    <Header></Header>
    <Photo></Photo>
    <Chat class="chat"></Chat>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Chat from "./Chat.vue"
export default {
  name: "home",
  components: {
    Header,Footer,Photo,Chat
  }
};
</script>
<style scoped>
  .chat{
    margin-right:200px;
  }
</style>
