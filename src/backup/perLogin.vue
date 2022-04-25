<template>
  <div class="perLogin">
    <div class="perUser inputBox">
      <a-icon type="user" class="icons" />
      <input type="text" placeholder="用户名/手机号" v-model="username" />
    </div>
    <div class="perLoginspan"></div>
    <div class="perPsw inputBox">
      <a-icon type="lock" class="icons" />
      <input
        type="password"
        name=""
        id=""
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="perLoginspan"></div>
    <div class="twoBox">
      <div class="perVer inputBox">
        <a-icon type="safety-certificate" class="icons" />
        <input type="text" placeholder="请输入验证码" v-model="verification" />
      </div>
      <img src="../assets/images/signup/yzm.png" alt="" />
    </div>
    <div class="perLoginspan"></div>
    <button @click="perLogin()">个人登录</button>
    <div class="smallSize">
      <a @click="forgetPsw()">忘记密码</a>
      <a id="specialSpan" @click="resNow()">立即注册</a>
      <a @click="havePro()">遇到问题</a>
    </div>
  </div>
</template>

<script>
let perLoginspan = document.getElementsByClassName("perLoginspan");
export default {
  name: "perLogin",
  data() {
    return {
      username: "",
      password: "",
      verification: "",
    };
  },
  methods: {
    forgetPsw() {
      this.$router.push("/signup/perForgetpsw");
    },
    resNow() {
      this.$router.push("/signup/perResnow");
    },

    //验证
    perLogin() {
      if (!this.username || !this.password || !this.verification) {
        alert("请将信息填写完整！");
      } else {
        console.log("发送请求");
        //发送请求
      }
    },

    havePro(){
      
    }
  },
};
</script>

<style scoped>
.perLogin {
  width: 65%;
  height: min-content;
  margin: 1.25rem auto;
  text-align: start;
}
/*输入框样式start*/
.inputBox {
  border: 1px solid rgb(207, 204, 204);
  padding: 0.5rem 0;
  margin: 0.75rem 0;
}
.inputBox > .icons {
  font-size: 2rem;
  padding: 0 0.65rem;
  margin-right: 0.5rem;
  vertical-align: top;
  border-right: 2px solid rgb(207, 204, 204);
  color: rgb(207, 204, 204);
}
.inputBox > input {
  border: none;
  outline: none;
  vertical-align: top;
}
.perUser > input,
.perPsw > input {
  width: 80%;
}
/*输入框样式end*/
.perLogin > .perLoginspan {
  color: red;
  font-size: 0.9rem;
  height: 1rem;
  margin: 0.75rem 3.75rem;
}
/* 验证码部分start */
.twoBox {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
.perVer {
  width: 60%;
  margin: 0;
}
.perVer > input {
  width: 60%;
}
.twoBox > img {
  width: 35%;
  height: 3rem;
  border: 1px solid rgb(207, 204, 204);
}
/* 验证码图片end */
.perLogin > button {
  background-color: #366fb6;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  line-height: 3rem;
  border-radius: 5px;
}
.perLogin > .smallSize {
  margin-top: 0.75rem;
  text-align: center;
  font-size: 1rem;
}
.smallSize > #specialSpan {
  display: inline-block;
  border-left: 2px solid #366fb6;
  border-right: 2px solid #366fb6;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
}
@media screen and (max-width: 1200px) {
  .perLogin {
    width: 80%;
  }
}
@media screen and (max-width: 1000px) {
  .perLogin {
    width: 100%;
  }
}
</style>