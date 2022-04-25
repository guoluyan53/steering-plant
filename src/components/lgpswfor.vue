<template>
  <div class="lgpswfor">
    <h2>法人密码找回</h2>
    <hr />
    <!--  指示箭头start-->
    <div class="arrowsBox">
      <div class="txuser jtbox"><span>填写登录账号</span></div>
      <div class="sfyz jtbox"><span>验证身份</span></div>
      <div class="newpsw jtbox"><span>设置新密码</span></div>
      <div class="finish jtbox"><span>完成</span></div>
    </div>
    <!-- 指示箭头end -->
    <div class="pswfor">
      <div class="loginName">
        <span>账号：</span>
        <input
          type="text"
          placeholder="请填写法定代表人登录名"
          v-model="cPersonUsername"
        />
        <a @click="turn()">忘记账号，请点此找回账号</a>
      </div>
      <div class="txUserspan"></div>
      <div class="loginsfz">
        <span>证件号码：</span>
        <input
          type="text"
          placeholder="请填写法定代表人的证件号码"
          v-model="cId"
        />
      </div>
      <div class="txUserspan"></div>
      <div class="verImg">
        <span>验证码：</span>
        <input
          type="text"
          placeholder="请填写验证码"
          v-model="verification"
          @blur="lgpswverElt()"
        />
        <!-- <img src="../assets/images/signup/yzm.png" alt="" /> -->
        <div class="code" @click="refreshCode">
          <!--   ：fresh：父组件向子组件传送刷新验证码的信号；
            @makedCode：子组件向父组件传送验证码的值-->
          <s-identify :fresh="flag" @makedCode="getMakedCode"></s-identify>
        </div>
      </div>
      <div class="txUserspan">{{lgpswverspan}}</div>
      <div class="btns">
        <button @click="lgpswtxUsernext()">下一步</button>
        <button @click="lgpswtxUserback()">返回</button>
      </div>
    </div>
  </div>
</template>
<script>
import SIdentify from "./identify";
export default {
  name:"lgpswfor",
  data() {
    return {
      flag: true, //该值变化，就会触发刷新
      code: "", //刷新后的验证码
      cPersonUsername:"",
      cId:"",
      verification:"",
      lgpswverspan:"",
    }
  },
  components: {
    SIdentify,
  },
  // 验证码初始化
  mounted() {
    this.flag = !this.flag;
  },
  methods: {
    lgpswtxUserback(){
      this.$router.push("/signup/Login/legalLogin");
    },
    
    // 切换验证码
    refreshCode() {
      this.flag = !this.flag;
    },
    getMakedCode(code) {
      this.code = code;
    },

    //验证码判断
    lgpswverElt(){
      if (this.verification && this.verification != this.code) {
        this.lgpswverspan = "请输入正确的验证码！";
      } else if (this.verification == this.code) {
        this.lgpswverspan = "";
      }
    },

    //链接跳转
    turn(){
      this.$router.push("/signup/lgforaccount");
    },

    //下一步
    lgpswtxUsernext(){
      if(!this.cPersonUsername || !this.verification || this.lgpswverspan){
        alert("请确认信息填写完整并无误！");
      }else{
        this.$router.push("/signup/lgpswgetsfYz");
        //发送请求
      }
    },
    
  }
}
</script>
<style scoped>
.lgpswfor {
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.lgpswfor > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.lgpswfor > hr {
  width: 100%;
  height: 1.5px;
  border: none;
  background-color: rgb(207, 204, 204);
}
/* 指示箭头start */
.arrowsBox {
  display: flex;
  justify-content: space-around;
  margin: 2rem auto 0;
  width: 80%;
}
.arrowsBox > .jtbox {
  width: 15%;
  height: 3rem;
  background-color: #f6f9fa;
  font-size: 1.25rem;
  text-align: center;
  vertical-align: middle;
  position: relative;
}
.arrowsBox > .jtbox > span {
  display: inline-block;
  line-height: 3rem;
  color: black;
  width: 100%;
}
.arrowsBox > .jtbox::before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: -2rem;
  border-top: 1.5rem solid #f6f9fa;
  border-bottom: 1.5rem solid #f6f9fa;
  border-left: 2rem solid transparent;
  background: transparent !important;
}
.arrowsBox > .jtbox::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  border-top: 1.5rem solid transparent;
  border-bottom: 1.5rem solid transparent;
  border-left: 2rem solid #f6f9fa;
}
.arrowsBox > .txuser {
  background-color: #007acc;
}
.arrowsBox > .txuser > span {
  color: white;
}
.arrowsBox > .txuser::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .txuser::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/
/* input框start */
.pswfor {
  width: 50%;
  margin: 3.5rem auto;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.pswfor > div > span {
  display: inline-block;
  width: 20%;
  text-align: right;
}
.pswfor > div > span::before {
  content: "*";
  color: red;
}
.pswfor > .verImg > input {
  width: 50%;
}
.pswfor > .verImg > .code {
  display: inline-block;
  width: 25%;
  height: 2.8rem;
  vertical-align: top;
  margin-left: 2%;
}
.pswfor > div > input {
  width: 78%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.pswfor > .txUserspan {
  color: red;
  font-size: 0.9rem;
  height: 1rem;
  margin: 0.75rem 23%;
}
.btns {
  width: 70%;
  margin: 3rem auto;
  display: flex;
  justify-content: space-around;
}
.btns > button {
  border: none;
  outline: none;
  padding: 0.5rem 3rem;
  border-radius: 5px;
  cursor: pointer;
}
.btns > button:nth-child(1) {
  color: white;
  background-color: #007acc;
}
.btns > button:nth-child(2) {
  background-color: #f6f9fa;
}
.pswfor{
  position: relative;
}
.pswfor a{
  position: absolute;
  top: .5rem;
  right: -40%;
}
/* input框end */
</style>