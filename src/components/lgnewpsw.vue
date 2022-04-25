<template>
  <div class="lgnewpsw">
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
    <!--input框start  -->
    <div class="newpswBox">
      <div class="newpassword">
        <span>新密码：</span>
        <input
          type="password"
          placeholder="长度为6-18位，至少为字母、数字、符号两种或以上组合"
          v-model="beforepassword"
          @blur="lgforpswElt()"
        />
      </div>
      <div class="newpswspan">{{lgnewpswspan}}</div>
      <div class="perconfimpsw">
        <span>确认密码：</span>
        <input
          type="password"
          placeholder="请确认密码"
          v-model="twicepsw"
        />
      </div>
      <div class="newpswspan">{{lgtwicepswspan}}</div>
      <div class="btns">
        <button @click="lgnewpswnext()">下一步</button>
        <button @click="lgnewpswback()">返回</button>
      </div>
    </div>
    <!-- input框end -->
  </div>
</template>
<script>
import {Decrypt,Encrypt} from '../assets/js/cryptojs'
export default {
  name:'lgnewpsw',
  data() {
    return {
      beforepassword:"",
      cPersonPassword:"",//加密密码
      twicepsw:"",
      lgnewpswspan:"",
    }
  },
  computed: {
    // 确认密码
    lgtwicepswspan(){
      if(this.twicepsw && this.twicepsw != this.beforepassword){
        return "密码不一致！";
      }else{
        return "";
      }
    }
  },
  methods: {
    // 返回
    lgnewpswback(){
      this.$router.push('/signup/lgpswgetsfYz');
    },

    //密码验证
    lgforpswElt(){
      // console.log(this.password);
      if(this.beforepassword && !/(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{6,18}$/.test(this.beforepassword)){
        this.lgnewpswspan = '密码不符合要求！';
      }else if (/(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{6,18}$/.test(this.beforepassword)) {
        this.lgnewpswspan = "";
        //密码加密
        this.cPersonPassword = Encrypt(this.beforepassword);
      }
    },

    // 下一步
    lgnewpswnext(){
      if (
        !this.beforepassword ||
        !this.twicepsw ||
        this.lgnewpswspan ||
        this.lgtwicepswspan
      ) {
        alert("请确认信息填写完整并无误！");
      } else {
        this.$router.push("/signup/lgpswfinish");
        //发送请求
      }
    },
  },
}
</script>
<style scoped>
.lgnewpsw {
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.lgnewpsw > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.lgnewpsw > hr {
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
.arrowsBox > .newpsw {
  background-color: #007acc;
}
.arrowsBox > .newpsw > span {
  color: white;
}
.arrowsBox > .newpsw::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .newpsw::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/  
/* input框start */
.newpswBox {
  width: 50%;
  margin: 3.5rem auto 0;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.newpswBox > div > span {
  display: inline-block;
  width: 20%;
  text-align: right;
}
.newpswBox > div > span::before {
  content: "*";
  color: red;
}
.newpswBox > div > input {
  width: 78%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.newpswBox > .newpswspan {
  color: red;
  /* display: inline-block; */
  font-size: 0.9rem;
  height: 1rem;
  margin: 0.75rem 23%;
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