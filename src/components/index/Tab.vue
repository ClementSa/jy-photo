<template>
	<div class="tabbar-main" @mouseover='over' @mouseout='out'>
		<div class='outNode'>
			<ul>
				<li v-for='(img,i) in allImage' :key="i" :class='index=i' v-show='needIndex==i?true:false' transition='fade'>
					<router-link to="" ><img :src="img" alt=""></router-link>
				</li>
			</ul>
		</div>
		<ol class='tabHover' :style="`width:${allImage.length*20}px`">
			<li v-for='(img,i) in allImage' :key="i" :class="`${needIndex==i?'active':''}`" @click='needIndex=i'>
			</li>
		</ol>
		<div class="mini" :style="`width:${allImage.length*83}px;bottom:${bottomN}px;`">
			<img :src="img" v-for='(img,i) in allImage' :key="i" width="77" height="46" @mouseover='needIndex=i'>
		</div>
	</div>
</template>

<script>
export default {
	props:['tab'],
	data(){
		return {
			allImage:[],
			needIndex:'',
			bottomN:'',
			interval:''
		}
	},
	methods:{
		over(){
			this.bottomN = 4;
			clearInterval(this.interval);
		},
		out(){
			this.bottomN=-56;
			clearInterval(this.interval);
			this.interval = setInterval(()=>{
				this.needIndex++;
				this.needIndex == this.allImage.length && (this.needIndex = 0);
			},1500);
		}
	},
	mounted(){
		this.allImage = this.tab.image;
		this.needIndex = this.tab.index;
		this.bottomN = this.tab.bottomNode;
		this.interval = this.tab.interval;
		console.log(this.allImage)

		clearInterval(this.interval);
		this.interval = setInterval(()=>{
			this.needIndex++;
			this.needIndex == this.allImage.length && (this.needIndex = 0);
		},3000);
	}
}
</script>

<style scoped lang="less">

	.fade-transition{	opacity:1;transition:.9s;	}
	.fade-enter{opacity:0;}
	.fade-leave{opacity:0;}
	.tabbar-main{	position: relative;	padding-top: 80px;overflow: hidden;	width: 100%;}

	/* tabmain 轮播图主体 */ 
	.outNode{	img{width: 100%} }

	/* tabHover 小点效果 */
	.tabHover{position:absolute;height:20px;z-index:10;bottom:7px;left:50%;transform:translateX(-50%);
		li{ float:left; width:6px; height:6px; background:#fff; margin:7px 7px; padding:0 !important;	border-radius:50%;transition:0.8s; cursor:pointer;}
		li.active{background:#ff0002;}
	}

	/* 轮播小图导航 */
	.mini{transition:.8s;	height:50px;background:rgba(255,255,255,0.7);	position:absolute;z-index:11;	bottom:-56px;	left:50%;	transform:translateX(-50%);
		img{float: left;margin: 0.25rem 0.25rem 0.5rem;}
	}
</style>