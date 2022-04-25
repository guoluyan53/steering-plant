<template>
  <div class="legalLogin">
    <div class="perUser inputBox">
      <a-icon type="user" class="icons" />
      <input type="text" placeholder="法人账号" />
    </div>
    <div class="legalLoginspan">请填写正确的账号</div>
    <div class="perPsw inputBox">
      <a-icon type="lock" class="icons" />
      <input type="password" name="" id="" placeholder="请输入密码" />
    </div>
    <div class="legalLoginspan">请填写正确的账号</div>
    <div class="twoBox">
      <div class="perVer inputBox">
        <a-icon type="safety-certificate" class="icons" />
        <input type="text" placeholder="请输入验证码" />
      </div>
      <img src="../assets/images/signup/yzm.png" alt="" />
    </div>
    <div class="legalLoginspan">请填写正确的账号</div>
    <button>法人登录</button>
    <div class="smallSize">
      <a @click="lgforgetUser()">忘记账号</a>
      <a class="first" @click="lgforgetPsw()">忘记密码</a>
      <a class="second" @click="lgresNow()">法人注册</a>
      <a @click="havePro()">遇到问题</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "legalLogin",
  data() {
    return {};
  },
  methods: {
    //法人注册
    lgresNow(){
      this.$router.push('/signup/legalResnow');
    },

    // 忘记账号
    lgforgetUser(){
      this.$router.push('/signup/lgforaccount');
    },

    //忘记密码
    lgforgetPsw(){
      this.$router.push('/signup/lgpswfor');
    }
  },
};
</script>

<style scoped>
.legalLogin {
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
.legalLogin > .legalLoginspan {
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
  /* margin-top: 0; */
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
.legalLogin > button {
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
.legalLogin > .smallSize {
  margin-top: 0.75rem;
  text-align: center;
  font-size: 1rem;
}
.legalLogin > .smallSize > .first {
  display: inline-block;
  border-left: 2px solid #366fb6;
  border-right: 2px solid #366fb6;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
}
.legalLogin > .smallSize > .second {
  display: inline-block;
  border-right: 2px solid #366fb6;
  padding-right: 0.5rem;
  margin-right: 0.5rem;
}
@media screen and (max-width: 1200px) {
  .legalLogin {
    width: 80%;
  }
}
@media screen and (max-width: 1000px) {
  .legalLogin {
    width: 100%;
  }
}
</style>