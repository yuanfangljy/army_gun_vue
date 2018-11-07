<template>
  <div class="login">
        <div class="nav_bg">
            <div class="bor">
                <div class="wel">用户登录</div>
                <form id="login_form" method="POST">
                    <div class="Login">
                        <img src="img/yonghu.png"/>
                        <p><input type="text" id="userName" name="userName" placeholder="用户名"></p>
                    </div>
                    <div class="pass">
                        <img src="img/pass.png"/>
                        <p><input type="password" id="passWord" name="passWord" placeholder="请输入密码"></p>
                    </div>
                    <div></div>
                    <p><input class="sure" type="button" id="login" value="登录"/></p>
                </form>
                <dl class="sign">
                    <dt><a href="retrievePassword.html">忘记密码？</a></dt>
                    <dd>新用户请先<a href="index.html">注册</a></dd>
                </dl>
                <div class="clearfix"></div>
                <div class="rem"><input class="kuai" type="checkbox" value="1"/>
                    <p>记住密码</p></div>
                <div class="text-center">
                    <span id="error" style="color:red"></span>
                    <span id="errorpass" style="color:red"></span>
                </div>
            </div>
            <div class="jpg"><img src="img/beijing.png"/></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>