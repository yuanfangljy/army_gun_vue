// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引用路由
import VueRouter from "vue-router"
//使用axios进行http请求
import axios from "axios";


import Home from './components/main/Home'
import Login from './components/entrance/Login'
import Elements from './components/main/other/Elements'
import Tables from './components/main/other/Tables'
import GunList from './components/main/other/GunList'
import DeliveryWarehouse from "./components/main/other/DeliveryWarehouse"
import AllocationGun from "./components/main/other/AllocationGun"
import StorageWarehouse from "./components/main/other/StorageWarehouse"
import DistributionStorage from "./components/main/other/DistributionStorage"
import Predistribution from "./components/main/other/Predistribution"
import FinalStorage from "./components/main/other/FinalStorage"

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
  mode:"history",
  routes:[
    {
      path: "/", name: "Home", components: {
      default: Home,//默认显示
    }},
   // { path: "/", name: "Home", component: Home },
    { path: "/elements", name: "Elements", component: Elements },
    { path: "/login", name: "Login", component: Login },
    { path: "/tables", name: "Tables", component: Tables },
    { path: "/gunList", name: "GunList", component: GunList },
    { path: "/deliveryWarehouse", name: "DeliveryWarehouse", component: DeliveryWarehouse },
    { path: "/allocationGun", name: "AllocationGun", component: AllocationGun },
    { path: "/storageWarehouse", name: "StorageWarehouse", component: StorageWarehouse },
    { path: "/distributionStorage", name: "DistributionStorage", component: DistributionStorage },
    { path: "/predistribution", name: "Predistribution", component: Predistribution },
    { path: "/finalStorage", name: "FinalStorage", component: FinalStorage },
    
    
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
