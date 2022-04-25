<template>
  <div class="lgforfinish">
    <h2>法人账号找回</h2>
    <hr />
    <!--  指示箭头start-->
    <div class="arrowsBox">
      <div class="infor jtbox"><span>填写信息</span></div>
      <div class="yzsf jtbox"><span>验证身份</span></div>
      <div class="finish jtbox"><span>完成</span></div>
    </div>
    <!-- 指示箭头end -->
    <!--完成页面start  -->
    <div class="finish">
      <img src="../assets/images/signup/finish.png" alt="" />
      <p>账号已成功找回，您的账号：{{cPersonUsername}}，请牢记登录账号，切勿向他人透露！</p>
      <div class="radiobox">
        <input type="radio" name="radio" id="firstcheck" value="first" checked>我已知晓账号，立即登录<br>
        <input type="radio" name="radio" id="secondcheck" value="second">我已知晓账号，但忘记密码，需找回密码<br>
      </div>
      <button @click="lgforfinishback()">确定</button>
    </div>
    <!--完成页面end  -->
  </div>
</template>

<script>
import { log } from 'util';
export default {
  name:"lgforfinish",
  data() {
    return {
      cPersonUsername:"",
    }
  },
  created() {
    //发送请求

  },
  methods: {
    lgforfinishback(){
      let first = document.getElementById('firstcheck').checked;
      let second = document.getElementById('secondcheck').checked;
      if(first){
        this.$router.push('/signup/Login/legalLogin');
      }else{
        this.$router.push('/signup/lgpswfor');
      }
    }
  },
}
</script>

<style scoped>
 .lgforfinish{
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.lgforfinish > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.lgforfinish > hr {
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
.arrowsBox > .finish {
  background-color: #007acc;
}
.arrowsBox > .finish > span {
  color: white;
}
.arrowsBox > .finish::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .finish::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/  
/* 完成页面start */
.lgforfinish > .finish {
  width: 100%;
  margin: 3.5rem auto;
  font-size: 1rem;
  text-align: center;
}
.lgforfinish > .finish img {
  width: 7rem;
  height: 7rem;
  margin-bottom: 1rem;
}
.lgforfinish .finish p {
  margin: 0.5rem;
}
.lgforfinish > .finish p{
  font-size: 1rem;
}
.radiobox{
  width: 30%;
  margin: 0 auto;
  text-align: left;
}
.lgforfinish .finish button {
  background-color: #007acc;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.25rem 1.5rem;
  letter-spacing: 0.2em;
  border-radius: 5px;
}
/* 完成页面end */
</style>