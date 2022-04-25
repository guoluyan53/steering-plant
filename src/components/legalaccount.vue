<template>
  <div class="legalaccount">
    <h2>单位账号注册</h2>
    <hr />
    <!--  指示箭头start-->
    <div class="arrowsBox">
      <div class="lguser jtbox"><span>法人认证</span></div>
      <div class="unit jtbox"><span>填写单位信息</span></div>
      <div class="account jtbox"><span>填写账号信息</span></div>
      <div class="finish jtbox"><span>完成</span></div>
    </div>
    <!-- 指示箭头end -->
    <!--input框start  -->
    <div class="lgaccount">
      <div class="lgusername">
        <span>法定代表人账号名称：</span>
        <input
          type="text"
          placeholder="长度为4-30个字符，支持字母和数字组合，字母开头"
          v-model="cPersonUsername"
          @blur="lgusernameElt()"
        />
      </div>
      <div class="lgaccountspan">{{lgusernamespan}}</div>
      <div class="lgpsw">
        <span>密码：</span>
        <input
          type="password"
          placeholder="长度为6-18位，至少为字母、数字、符号两种或以上组合"
          v-model="cbeforePassword"
          @blur="lgpswElt()"
        />
      </div>
      <div class="lgaccountspan">{{lgpswspan}}</div>
      <div class="lgtwicepsw">
        <span>确认密码：</span>
        <input
          type="password"
          placeholder="请再次输入密码"
          v-model="twicepsw"
        />
      </div>
      <div class="lgaccountspan">{{lgtwicepswspan}}</div>
      <div class="lgphone">
        <span>手机号码：</span>
        <input
          type="text"
          placeholder="请输入手机号码"
          v-model="cPersonPhone"
          @blur="lgphoneElt()"
        />
      </div>
      <div class="lgaccountspan">{{lgphonespan}}</div>
      <div class="lgemail">
        <span>电子邮箱：</span>
        <input
          type="text"
          placeholder="请填写电子邮箱，可通过邮箱找回密码"
          v-model="cEmail"
          @blur="lgemailElt()"
        />
      </div>
      <div class="lgaccountspan">{{lgemailspan}}</div>
      <div class="btns">
        <button @click="legalaccountnext()">下一步</button>
        <button @click="legalaccountback()">返回</button>
      </div>
    </div>
    <!-- input框end -->
  </div>
</template>
<script>
import {Decrypt,Encrypt} from '../assets/js/cryptojs'
export default {
  name:"legalaccount",
  data() {
    return {
      cPersonUsername:"",
      cbeforePassword:"",
      cPersonPassword:"",//加密密码
      twicepsw:"",
      cPersonPhone:"",
      cEmail:"",
      lgusernamespan:"",
      lgpswspan:"",
      // lgtwicepswspan:"",
      lgphonespan:"",
      lgemailspan:"",
    }
  },
  computed: {
    // 确认密码
    lgtwicepswspan(){
      if(this.twicepsw && this.twicepsw != this.cbeforePassword){
        return "密码不一致！";
      }else{
        return "";
      }
    }
  },
  methods: {
    //返回
    legalaccountback(){     
      this.$router.push("/signup/legalunit");
    },

    //法人账号验证
    lgusernameElt(){
      if(this.cPersonUsername && !/^[a-zA-Z]+[a-zA-Z0-9]{3,29}$/.test(this.cPersonUsername)){
        this.lgusernamespan = '法人账号不符合要求！';
      }else if (/^[a-zA-Z]+[a-zA-Z0-9]{3,29}$/.test(this.cPersonUsername)) {
        this.lgusernamespan = "";
      }
    },

    //密码验证
    lgpswElt(){
      if(this.cbeforePassword && !/(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{6,18}$/.test(this.cbeforePassword)){
        this.lgpswspan = '密码不符合要求！';
      }else if (/(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{6,18}$/.test(this.cbeforePassword)) {
        this.lgpswspan = "";
        //密码加密
        this.cPersonPassword = Encrypt(this.cbeforePassword);
      }
    },

    //验证手机号码
    lgphoneElt(){
      if (this.cPersonPhone && !/^[1]([3-9])[0-9]{9}$/.test(this.cPersonPhone)) {
        this.lgphonespan = "请填写正确的手机号码！";
      } else if (/^[1]([3-9])[0-9]{9}$/.test(this.cPersonPhone)) {
        this.lgphonespan = "";
      }
    },

    //验证邮箱
    lgemailElt(){
      if(this.cEmail && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.cEmail)){
        this.lgemailspan = '电子邮箱不符合要求！';
      }else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.cEmail)) {
        this.lgemailspan = "";
      }
    },

    // 下一步
    legalaccountnext(){
      if (
        !this.cPersonUsername ||
        !this.cbeforePassword ||
        !this.twicepsw ||
        !this.cPersonPhone ||
        !this.cEmail ||
        this.lgusernamespan ||
        this.lgpswspan ||
        this.lgtwicepswspan ||
        this.lgphonespan ||
        this.lgemailspan
      ) {
        alert("请确认信息填写完整并无误！");
      } else {
        this.$router.push("/signup/lgResfinish");
        //发送请求
      }
    },
  },
}
</script>
<style scoped>
.legalaccount{
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.legalaccount > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.legalaccount > hr {
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
.arrowsBox > .account {
  background-color: #007acc;
}
.arrowsBox > .account > span {
  color: white;
}
.arrowsBox > .account::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .account::after {
  border-left: 2rem solid #007acc;
}  
/* 指示箭头end*/ 
/* input框start */
.lgaccount {
  width: 60%;
  margin: 3.5rem auto 0;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.lgaccount > div > span {
  display: inline-block;
  width: 28%;
  text-align: right;
}
.lgaccount > div > span::before {
  content: "*";
  color: red;
}
.lgaccount > div > input {
  width: 70%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.lgaccount > .lgaccountspan {
  color: red;
  /* display: inline-block; */
  font-size: 0.9rem;
  height: 1rem;
  margin: 0.75rem 30%;
}
.btns {
  width: 70%;
  margin: 3rem auto 0;
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
/* input框end */
</style>