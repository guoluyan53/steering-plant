<template>
  <div class="middleBox">
    <!-- 登录部分start -->
    <div class="leftBox">
      <input class="btns" type="button" value="个人登录" @click="perlogin()" />
      <input
        class="btns"
        type="button"
        value="法人登录"
        @click="legallogin()"
      />
      <router-view></router-view>
    </div>
    <!-- 登录部分end -->
    <div class="midbox"></div>
    <!-- 温馨提示start -->
    <div class="rightBox">
      <p>温馨提示</p>
      <div class="pbox" v-html="wxts">{{ wxts }}</div>
    </div>
    <!-- 温馨提示end -->
  </div>
</template>

<script>
let btns = document.getElementsByClassName("btns");

export default {
  name: "Login",
  data() {
    return {
      flag: true,
      mes1:
        "<p>1.个人登录仅支持办理个人业务，如需办理法人业务，请选择“法人登录”界面进行登录。</p><p>2.个人账号和法人账号，属于两个账号不能共用。</p><p>3.登录名为手机号时，若提示密码错误可通过“忘记密码”功能找回。</p>",
      mes2:
        "<p class='first'>1.因统一身份认证平台个人用户和法人用户进行拆分，2020年3月10日前注册的用户，若绑定过法人信息在使用法人登录模块时请使用原登录名+密码方式登录。</p><p class='first'>2.法人账号尚未注册，请点击“法人注册”，进行法人账号注册。</p><p class='first'>3.如果忘记法人账号，可点击“忘记账号”找回。</p><p class='first'>4.如果忘记法人账号密码，可点击“忘记密码”找回。</p>",
    };
  },
  methods: {
    perlogin() {
      this.flag = true;
      // 改变选中框的样式
      btns[0].style.backgroundColor = "#3386d7";
      btns[0].style.color = "white";
      btns[1].style.backgroundColor = "rgb(207, 204, 204)";
      btns[1].style.color = "black";
      this.$router.push("/signup/Login/perLogin");
    },
    legallogin() {
      this.flag = false;
      // 改变选中框的样式
      btns[1].style.backgroundColor = "#3386d7";
      btns[1].style.color = "white";
      btns[0].style.backgroundColor = "rgb(207, 204, 204)";
      btns[0].style.color = "black";
      this.$router.push("/signup/Login/legalLogin");
    },
  },
  computed: {
    wxts: function () {
      return this.flag == true ? this.mes1 : this.mes2;
    },
  },
};
</script>

<style scoped>
.middleBox {
  width: 70vw;
  display: flex;
  font-size: 1rem;
  justify-content: space-around;
  margin: 0 auto;
  padding: 3rem 0;
  background-color: white;
}
/* 登录部分start*/
.middleBox > .leftBox {
  width: 60%;
  text-align: center;
}
.leftBox > input {
  width: 25%;
  padding: 0.4rem;
  letter-spacing: 0.25em;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
}
.leftBox > input:nth-child(1) {
  background-color: #3386d7;
  color: white;
}
/* 登录部分end */
.middleBox > .midbox {
  width: 2px;
  background-color: rgb(207, 204, 204);
}
/* 温馨提示start */
.middleBox > .rightBox {
  width: 30%;
  text-align: start;
}
.rightBox > p {
  color: #3386d7;
  /* margin-bottom: 0; */
}
.middleBox > .rightBox .pbox {
  font-size:  0.875rem;
}
/* .pbox >>> * {
  margin-bottom: 0;
} */
/* 温馨提示end */
@media screen and (max-width: 1200px) {
  .leftBox > input {
    width: 35%;
  }
}
@media screen and (max-width: 1000px) {
  /* .pbox >>> * {
    margin-bottom: 0;
  } */
  .pbox >>> .first {
    font-size: 0.9rem;
  }
}
</style>