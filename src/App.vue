<template>
  <div id="app">
      <!-- WRAPPER -->
      <div id="wrapper">
            <!-- Start LEFT SIDEBAR And Navbar -->
              <app-left-sidebar-navbar></app-left-sidebar-navbar>
            <!-- END   LEFT SIDEBAR And Navbar -->

            <!-- Start MAIN -->
            <div class="main">
              <router-view></router-view>
            </div>  
            <!-- END   MAIN -->

            <!-- Start Footer -->
              <app-footer></app-footer>
            <!-- End   Footer -->
      </div>
  </div>
</template>

<script>
import Footer from "./components/shelf/Footer"
import LeftSidebarNavbar from "./components/shelf/LeftSidebarNavbar";
import Navbar from "./components/shelf/Navbar";

export default {
  name: "App",
  components: {//对当前组件进注册
    appFooter:Footer,
    appLeftSidebarNavbar:LeftSidebarNavbar,
    appNavbar:Navbar
  }
};
</script>

<style>
</style>
