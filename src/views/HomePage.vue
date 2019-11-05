<template>
	<div class="index">
		<!-- header部分 -->
		<Header />
		<!-- 轮播图部分 -->
		<Tab :tab="tabNode" class="tab-content"></Tab>
		<Chat class="chat"></Chat>
		<Adversion class="adversion"></Adversion>
		<!-- Footer部分 -->
		<lunbotu class="lunbo"></lunbotu>
		<bread class="bread"></bread>
		<!-- <shoufengqin class="shoufengqin"></shoufengqin> -->
		<exam01 class="exam"></exam01>
		
		<Footer class="footer" />
  </div>
</template>
    
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tab from "@/components/index/Tab";
import Chat from "./Chat.vue";
import Adversion from "./Adversion.vue";
import lunbotu from "./lunbotu.vue";
import bread from "./bread.vue";
import exam01 from "./image.vue";
import shoufengqin from "./shoufengqin.vue"
export default {
	components:{
		Header,Footer,Tab,Chat,Adversion,lunbotu,bread,exam01,shoufengqin
	},
	data () {
		return{
			tabNode:{
				image:[
					require('@/assets/imgs/bannerp1.jpg'),
					require('@/assets/imgs/bannerp2.jpg'),
					require('@/assets/imgs/bannerp3.jpg')
				],
				index:0,
				bottomNode:-57,
				interval:null
			},
			details:{

			}
		}
	},
	mounted() {

	},

};
</script>

<style scoped>
	.index{
		text-align: center;	
	}
	.footer{
		margin-top:200px;
	}
	.shoufengqin{
		margin-top:20px;	
		margin-left:5px;
	}
	.exam{
	 text-align: center;
	}
	.bread{
		padding:10px 0 10px 5px;
	}
	.lunbo{
		margin-top:20px;	
	}
	.tab-content{
		z-index: 0;
	}
	.chat{
		z-index: 200;
	}
	.adversion{
		z-index: 100;
	}
	
	.demo-image__lazy{
  width:100%;
  height:1000px;
  margin-left:100px;

    }
</style>