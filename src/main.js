// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引用路由
import VueRouter from "vue-router"
  //引入公共路由通道
import { routes } from "./router/routes.js"
//使用axios进行http请求
import axios from "axios"
//对状态进行管理
import vuex from 'vuex'


//状态存储是响应式
Vue.use(vuex)
//使用路由
Vue.use(VueRouter)

//使用Axios
Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://127.0.0.1:8888';
axios.defaults.timeout = 10000;
//http request 拦截器
/* axios.interceptores.request.use(
    config=>{
      const token=getCookie('session');
      config.data=JSON.stringify(config.data);
      config.headers={
        'Content-Type':'application/x-www-form-urlencoded'
      }
      if(token){
        config.params={'token':token}
      }
      return config;
    },
    err=>{
      return Promise.reject(err);
    }
) */


/* Axios.defaults.headers.common['token'] ="SHRIOSESSIONIDwerq"
Axios.defaults.headers.post['Content'] = "application/json" */

Vue.config.productionTip = false

//配置路由、
const router=new VueRouter({
  routes,
  mode:"history",
  scrollBehavior(to, from, savedPosition) {//路由控制滚动行为
    //return {x:0,y:100}
    //return {selector:'.btn'}
    //回到浏览器上次页面的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  
})


//全局守卫
/**
 * == 1、全局守卫 ==
 * 回调函数
 * to:你要弄进入到哪一个路由中
 * from:你从哪一个路由离开  
 * next：对应的函数
 */
/* router.beforeEach((to, from, next) => {
  //next("/login");
    //console.log(to);
  //判断store.gettes.isLogin===fasle
  if (to.path == '/' || to.path =='/gunList'){
    next();//会正常访问，加false就不会访问
  }else{
    //alert("请先登录！");
    next(true);
  }
}) */

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
