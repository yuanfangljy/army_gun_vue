<template>
  <div id="app">
   <app-login></app-login>
  </div>
</template>

<script>
import Logins from "./components/entrance/Login"
export default {
  name: "App",
  components: {//对当前组件进注册
    appLogin:Logins,
  }
};
</script>

<style>
</style>
