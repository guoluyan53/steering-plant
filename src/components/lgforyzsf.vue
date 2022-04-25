<template>
  <div class="lgforyzsf">
    <h2>法人账号找回</h2>
    <hr />
    <!--  指示箭头start-->
    <div class="arrowsBox">
      <div class="infor jtbox"><span>填写信息</span></div>
      <div class="yzsf jtbox"><span>验证身份</span></div>
      <div class="finish jtbox"><span>完成</span></div>
    </div>
    <!-- 指示箭头end -->
    <div class="lgsfyz">
      <!-- 两种方法选择 -->
      <div class="twomethods">
        <h4>正在为您找回账号，请选择验证方式：</h4>
        <div class="twoBox">
          <input type="text" value="手机号码+验证码方式" readonly>
          <button @click="lgtwoTel()">立即验证</button>
        </div>
        <div class="twoBox">
          <input type="text" value="邮箱+验证码方式" readonly>
          <button @click="lgtwoEmail()">立即验证</button>
        </div>
        <div class="btns">
          <button @click="lgtwoback()">返回</button>
        </div>
      </div>
      <!-- 第一种方法 -->
      <div class="firstmethod">
        <div class="phone">
          <span>手机号码：</span>
          <input
            type="text"
            placeholder="请填写正确的手机号码"
            v-model="cPersonPhone"
            @blur="lgfortelElt()"
          />
        </div>
        <div class="lgfirstspan">{{lgtelspan}}</div>
        <div class="verMes">
          <span>验证码：</span>
          <input type="text" placeholder="请填写短信验证码" v-model="dxver" />
          <button id="lgfordxyzm" @click="lggetVer()">{{ getdxver }}</button>
        </div>
        <div class="lgfirstspan">{{lgverMesspan}}</div>
        <div class="btns">
            <button @click="lgfirstnext()">下一步</button>
            <button @click="lgfirstback()">返回</button>
        </div>
      </div>
      <!-- 第二种方法 -->
      <div class="secondmethod">
        <div class="email">
          <span>邮箱：</span>
          <input
            type="text"
            placeholder="请填写正确的邮箱"
            v-model="cEmail"
            @blur="lgforemailElt()"
          />
        </div>
        <div class="lgsecondspan">{{lgemspan}}</div>
        <div class="verMes">
          <span>验证码：</span>
          <input type="text" placeholder="请填写邮箱验证码" v-model="emver" />
          <button id="lgforemyzm" @click="lggetemVer()">{{ getemver }}</button>
        </div>
        <div class="lgsecondspan">{{lgveremspan}}</div>
        <div class="btns">
            <button @click="lgsecondnext()">下一步</button>
            <button @click="lgsecondback()">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'lgforyzsf',
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
    lgtwoTel(){
      let phone = document.getElementsByClassName('firstmethod')[0];
      let two = document.getElementsByClassName('twomethods')[0];
      phone.style.display = "block";
      two.style.display = "none";
    },

    //进入邮箱验证
    lgtwoEmail(){
      let email = document.getElementsByClassName('secondmethod')[0];
      let two = document.getElementsByClassName('twomethods')[0];
      email.style.display = "block";
      two.style.display = "none";
    },

    //总返回
    lgtwoback(){
      this.$router.push('/signup/lgforaccount');
    },

    //手机号验证
    lgfortelElt(){
      if (this.cPersonPhone && !/^[1]([3-9])[0-9]{9}$/.test(this.cPersonPhone)) {
        this.lgtelspan = "请填写正确的手机号码！";
      } else if (/^[1]([3-9])[0-9]{9}$/.test(this.cPersonPhone)) {
        this.lgtelspan = "";
      }
    },

    //手机验证码
    lggetVer(){
      if (!this.cPersonPhone || this.lgtelspan) {
        this.lgverMesspan = "请先填写正确的手机号！";
      } else if(document.getElementById("lgfordxyzm").style.cursor != "not-allowed") {
        this.lgverMesspan = "";
        let i = 5; //120
        let gettimer = setInterval(() => {
          // console.log(i);
          if (i < 0) {
            clearInterval(gettimer);
            this.getdxver = "发送验证码";
            document.getElementById("lgfordxyzm").style.cursor = "pointer";
          }else if(document.getElementById("lgfordxyzm") === null){
            clearInterval(gettimer);
            return ;
          } 
          else {
            this.getdxver = "(" + i-- + "s)后可重新发送";
            document.getElementById("lgfordxyzm").style.cursor = "not-allowed";
          }
        }, 1000);

        //发送短信请求
      }
    },

    //手机下一步
    lgfirstnext(){
      this.$router.push('/signup/lgforfinish');
    },

    //手机返回
    lgfirstback(){
      let phone = document.getElementsByClassName('firstmethod')[0];
      let two = document.getElementsByClassName('twomethods')[0];
      phone.style.display = "none";
      two.style.display = "block";
    },

    //邮箱验证
    lgforemailElt(){
      if(this.cEmail && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.cEmail)){
        this.lgemspan = '电子邮箱不符合要求！';
      }else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.cEmail)) {
        this.lgemspan = "";
      }
    },

    //邮箱验证码
    lggetemVer(){
      if (!this.cEmail || this.lgemspan) {
        this.lgveremspan = "请先填写正确的邮箱！";
      } else if(document.getElementById("lgforemyzm").style.cursor != "not-allowed") {
        this.lgveremspan = "";
        let i = 5; //120
        let sectimer = setInterval(() => {
          // console.log(i);
          if (i < 0) {
            clearInterval(sectimer);
            this.getemver = "发送验证码";
            document.getElementById("lgforemyzm").style.cursor = "pointer";
          }
          else if(document.getElementById("lgforemyzm") === null){
            clearInterval(sectimer);
            return ;
          } 
           else {
            this.getemver = "(" + i-- + "s)后可重新发送";
            document.getElementById("lgforemyzm").style.cursor = "not-allowed";
          }
        }, 1000);

        //发送邮箱验证码请求
      }
    },

    //邮箱下一步
    lgsecondnext(){
      this.$router.push('/signup/lgforfinish');
    },

    //邮箱返回
    lgsecondback(){
      let email = document.getElementsByClassName('secondmethod')[0];
      let two = document.getElementsByClassName('twomethods')[0];
      email.style.display = "none";
      two.style.display = "block";
    },
  },
}
</script>

<style scoped>
.lgforyzsf{
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.lgforyzsf > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.lgforyzsf > hr {
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
.arrowsBox > .yzsf {
  background-color: #007acc;
}
.arrowsBox > .yzsf > span {
  color: white;
}
.arrowsBox > .yzsf::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .yzsf::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/ 
.lgsfyz > div {
  width: 60%;
  margin: 3.5rem auto 0;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.lgsfyz > div > div > span {
  display: inline-block;
  width: 28%;
  text-align: right;
}
.lgsfyz > div > div > span::before {
  content: "*";
  color: red;
}
.lgsfyz > div > .verMes> input {
  width: 50%;
}
.lgsfyz > div > .verMes> button {
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
.lgsfyz > div > div > input {
  width: 70%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.lgsfyz > div > .lgfirstspan,.lgsfyz > div > .lgsecondspan {
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
.lgsfyz > .twomethods .twoBox{
  margin: 1rem 0;
}
.lgsfyz > .twomethods .twoBox input{
  width: 70%;
  line-height: 1.5rem;
  border: 1px solid black;
  outline: none;
}
.lgsfyz > .twomethods .twoBox button{
  width: 20%;
  border: none;
  background-color: #007acc;
  border: 1px solid #007acc;
  color: white;
  outline: none;
  cursor: pointer;
}
/* 选择验证方式end */
.firstmethod{
  display: none;
}
.secondmethod{
  display: none;
}
</style>