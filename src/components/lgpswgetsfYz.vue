<template>
  <div class="lgpswgetsfYz">
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
    <div class="lgpswsfyz">
      <!-- 两种方法选择 -->
      <div class="pswtwomethods">
        <h4>正在为您找回密码，请选择验证方式：</h4>
        <div class="twoBox">
          <input type="text" value="手机号码+验证码方式" readonly>
          <button @click="lgpswtwoTel()">立即验证</button>
        </div>
        <div class="twoBox">
          <input type="text" value="邮箱+验证码方式" readonly>
          <button @click="lgpswtwoEmail()">立即验证</button>
        </div>
        <div class="btns">
          <button @click="lgpswtwoback()">返回</button>
        </div>
      </div>
      <!-- 第一种方法 -->
      <div class="pswfirstmethod">
        <div class="phone">
          <span>手机号码：</span>
          <input
            type="text"
            placeholder="请填写正确的手机号码"
            v-model="cPersonPhone"
            @blur="lgpswtelElt()"
          />
        </div>
        <div class="lgfirstspan">{{lgtelspan}}</div>
        <div class="verMes">
          <span>验证码：</span>
          <input type="text" placeholder="请填写短信验证码" v-model="dxver" />
          <button id="lgpswdxyzm" @click="lgpswgetVer()">{{ getdxver }}</button>
        </div>
        <div class="lgfirstspan">{{lgverMesspan}}</div>
        <div class="btns">
            <button @click="lgpswfirstnext()">下一步</button>
            <button @click="lgpswfirstback()">返回</button>
        </div>
      </div>
      <!-- 第二种方法 -->
      <div class="pswsecondmethod">
        <div class="email">
          <span>邮箱：</span>
          <input
            type="text"
            placeholder="请填写正确的邮箱"
            v-model="cEmail"
            @blur="lgpswemailElt()"
          />
        </div>
        <div class="lgsecondspan">{{lgemspan}}</div>
        <div class="verMes">
          <span>验证码：</span>
          <input type="text" placeholder="请填写邮箱验证码" v-model="emver" />
          <button id="lgpswemyzm" @click="lgpswgetemVer()">{{ getemver }}</button>
        </div>
        <div class="lgsecondspan">{{lgveremspan}}</div>
        <div class="btns">
            <button @click="lgpswsecondnext()">下一步</button>
            <button @click="lgpswsecondback()">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'lgpswgetsfYz',
  data() {
    return {
      cPersonPhone:"",
      lgtelspan:"",
      dxver:"",
      getdxver:"发送验证码",
      lgverMesspan:"",
      cEmail:"",
      lgemspan:"",
      emver:"",
      getemver:"发送验证码",
      lgveremspan:"",
    }
  },
  methods: {
    //进入手机验证
    lgpswtwoTel(){
      let phone = document.getElementsByClassName('pswfirstmethod')[0];
      let two = document.getElementsByClassName('pswtwomethods')[0];
      phone.style.display = "block";
      two.style.display = "none";
    },

    //进入邮箱验证
    lgpswtwoEmail(){
      let email = document.getElementsByClassName('pswsecondmethod')[0];
      let two = document.getElementsByClassName('pswtwomethods')[0];
      email.style.display = "block";
      two.style.display = "none";
    },

    //总返回
    lgpswtwoback(){
      this.$router.push('/signup/lgpswfor');
    },

    //手机号验证
    lgpswtelElt(){
      if (this.cPersonPhone && !/^[1]([3-9])[0-9]{9}$/.test(this.cPersonPhone)) {
        this.lgtelspan = "请填写正确的手机号码！";
      } else if (/^[1]([3-9])[0-9]{9}$/.test(this.cPersonPhone)) {
        this.lgtelspan = "";
      }
    },

    //手机验证码
    lgpswgetVer(){
      if (!this.cPersonPhone || this.lgtelspan) {
        this.lgverMesspan = "请先填写正确的手机号！";
      } else if(document.getElementById("lgpswdxyzm").style.cursor != "not-allowed") {
        this.lgverMesspan = "";
        let i = 5; //120
        let gettimer = setInterval(() => {
          // console.log(i);
          if (i < 0) {
            clearInterval(gettimer);
            this.getdxver = "发送验证码";
            document.getElementById("lgpswdxyzm").style.cursor = "pointer";
          }else if(document.getElementById("lgpswdxyzm") === null){
            clearInterval(gettimer);
            return ;
          } 
          else {
            this.getdxver = "(" + i-- + "s)后可重新发送";
            document.getElementById("lgpswdxyzm").style.cursor = "not-allowed";
          }
        }, 1000);

        //发送短信请求
      }
    },

    //手机下一步
    lgpswfirstnext(){
      this.$router.push('/signup/lgnewpsw');
    },

    //手机返回
    lgpswfirstback(){
      let phone = document.getElementsByClassName('pswfirstmethod')[0];
      let two = document.getElementsByClassName('pswtwomethods')[0];
      phone.style.display = "none";
      two.style.display = "block";
    },

    //邮箱验证
    lgpswemailElt(){
      if(this.cEmail && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.cEmail)){
        this.lgemspan = '电子邮箱不符合要求！';
      }else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.cEmail)) {
        this.lgemspan = "";
      }
    },

    //邮箱验证码
    lgpswgetemVer(){
      if (!this.cEmail || this.lgemspan) {
        this.lgveremspan = "请先填写正确的邮箱！";
      } else if(document.getElementById("lgpswemyzm").style.cursor != "not-allowed") {
        this.lgveremspan = "";
        let i = 5; //120
        let sectimer = setInterval(() => {
          // console.log(i);
          if (i < 0) {
            clearInterval(sectimer);
            this.getemver = "发送验证码";
            document.getElementById("lgpswemyzm").style.cursor = "pointer";
          }
          else if(document.getElementById("lgpswemyzm") === null){
            clearInterval(sectimer);
            return ;
          } 
           else {
            this.getemver = "(" + i-- + "s)后可重新发送";
            document.getElementById("lgpswemyzm").style.cursor = "not-allowed";
          }
        }, 1000);

        //发送邮箱验证码请求
      }
    },

    //邮箱下一步
    lgpswsecondnext(){
      this.$router.push('/signup/lgnewpsw');
    },

    //邮箱返回
    lgpswsecondback(){
      let email = document.getElementsByClassName('pswsecondmethod')[0];
      let two = document.getElementsByClassName('pswtwomethods')[0];
      email.style.display = "none";
      two.style.display = "block";
    },
  },
}
</script>

<style scoped>
.lgpswgetsfYz {
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.lgpswgetsfYz > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.lgpswgetsfYz > hr {
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
.arrowsBox > .sfyz {
  background-color: #007acc;
}
.arrowsBox > .sfyz > span {
  color: white;
}
.arrowsBox > .sfyz::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .sfyz::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/ 
.lgpswsfyz > div {
  width: 65%;
  margin: 3.5rem auto 0;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.lgpswsfyz > div > div > span {
  display: inline-block;
  width: 28%;
  text-align: right;
}
.lgpswsfyz > div > div > span::before {
  content: "*";
  color: red;
}
.lgpswsfyz > div > .verMes> input {
  width: 50%;
}
.lgpswsfyz > div > .verMes> button {
  width: 20%;
  margin-left: 1%;
  line-height: 2.4rem;
  vertical-align: top;
  font-size: 0.9rem;
  outline: none;
  background-color: #eff8ff;
  border: 1px solid #007acc;
  cursor: pointer;
}
.lgpswsfyz > div > div > input {
  width: 70%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.lgpswsfyz > div > .lgfirstspan,.lgpswsfyz > div > .lgsecondspan {
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
/* 选择验证方式start */
.lgpswsfyz > .pswtwomethods .twoBox{
  margin: 1rem 0;
}
.lgpswsfyz > .pswtwomethods .twoBox input{
  width: 70%;
  line-height: 1.5rem;
  border: 1px solid black;
  outline: none;
}
.lgpswsfyz > .pswtwomethods .twoBox button{
  width: 20%;
  border: none;
  background-color: #007acc;
  border: 1px solid #007acc;
  color: white;
  outline: none;
  cursor: pointer;
}
/* 选择验证方式end */
.pswfirstmethod{
  display: none;
}
.pswsecondmethod{
  display: none;
}
</style>