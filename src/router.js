import Vue from "vue";
import Router from "vue-router";
// 引入登录模块

// 引入注册模块
import Logon from "./views/Logon";
// 引入找回密码模块
import FindUpwd from "./components/FindUpwd";
import Works from "./views/Works";
import ClientCom from "./views/ClientCom";
import HomePage from "./views/HomePage";
import Chat from "./views/Chat";
//PCweb页面引入
import Pdetail from "./components/pcweb/Pdetail.vue"
import Sanxi from "./components/pcweb/Sanxi.vue"
import log_reg from "./views/log_reg.vue"
import { Phone } from "./components/Photo.vue";
 
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // 登录路径
    { path: "/", name: "homepage", component: HomePage },
    { path: "/homepage", name: "homepage", component: HomePage },
    { path: "/works", name: "works", component: Works },
    
    { path: "/logon", name: "logon", component: Logon },
    { path: "/findUpwd", name: "findUpwd", component: FindUpwd },
    { path: "/clientcom", name: "clientcom", component: ClientCom },
    { path: "/chat", name: "chat", component: Chat },
    //PCweb页面引入
    {path:"/Pdetail",component:Pdetail},
    {path:"/Sanxi",component:Sanxi},
    {path:"/log_reg",component:log_reg},
    {path:"/Photo",component:Phone}
  ]
});
