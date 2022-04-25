<template>
  <div class="lgforaccount">
    <h2>法人账号找回</h2>
    <hr />
    <!--  指示箭头start-->
    <div class="arrowsBox">
      <div class="infor jtbox"><span>填写信息</span></div>
      <div class="yzsf jtbox"><span>验证身份</span></div>
      <div class="finish jtbox"><span>完成</span></div>
    </div>
    <!-- 指示箭头end -->
    <!--input框start  -->
    <div class="foraccount">
      <div class="lgname">
        <span>法人姓名：</span>
        <input
          type="text"
          placeholder="请填写营业执照法定代表人/负责人姓名"
          v-model="cPersonName"
        />
      </div>
      <div class="foraccountspan"></div>
      <div class="loginName">
        <span>法人身份证号：</span>
        <input
          type="text"
          placeholder="请填写营业执照法定代表人/负责人身份证号"
          v-model="cId"
        />
      </div>
      <div class="foraccountspan"></div>
      <div class="verImg">
        <span>验证码：</span>
        <input
          type="text"
          placeholder="请填写验证码"
          v-model="verification"
          @blur="lgforverElt()"
        />
        <!-- <img src="../assets/images/signup/yzm.png" alt="" /> -->
        <div class="code" @click="refreshCode">
          <!--   ：fresh：父组件向子组件传送刷新验证码的信号；
            @makedCode：子组件向父组件传送验证码的值-->
          <s-identify :fresh="flag" @makedCode="getMakedCode"></s-identify>
        </div>
      </div>
      <div class="foraccountspan">{{lgforverspan}}</div>
      <div class="btns">
        <button @click="lgforaccountnext()">下一步</button>
        <button @click="lgforaccountback()">返回</button>
      </div>
    </div>
    <!-- input框end -->
  </div>
</template>
<script>
import SIdentify from "./identify";
export default {
  name:"lgforaccount",
  data() {
    return {
      flag: true, //该值变化，就会触发刷新
      code: "", //刷新后的验证码
      cPersonName:"",
      cId:"",
      verification:"",
      lgforverspan:"",
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
    //返回
    lgforaccountback(){
      this.$router.push("/signup/Login/legalLogin");
    },

    // 切换验证码
    refreshCode() {
      this.flag = !this.flag;
    },
    getMakedCode(code) {
      this.code = code;
      // console.log(this.code);
      // console.log("getMakedCode:", this.code);
    },

    //验证码
    lgforverElt(){
      if (this.verification && this.verification != this.code) {
        this.lgforverspan = "请输入正确的验证码！";
      } else if (this.verification == this.code) {
        this.lgforverspan = "";
      }
    },

    // 下一步
    lgforaccountnext(){
      if(!this.cPersonName || !this.cId || !this.verification || this.lgforverspan){
        alert("请确认信息填写完整并无误！");
      }else{
        this.$router.push("/signup/lgforyzsf");
        //发送请求
      }
    },
  },
}
</script>
<style scoped>
.lgforaccount{
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.lgforaccount > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.lgforaccount > hr {
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
.arrowsBox > .infor {
  background-color: #007acc;
}
.arrowsBox > .infor > span {
  color: white;
}
.arrowsBox > .infor::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .infor::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/ 
/* input框start */
.foraccount {
  width: 60%;
  margin: 3.5rem auto 0;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.foraccount > div > span {
  display: inline-block;
  width: 28%;
  text-align: right;
}
.foraccount > div > span::before {
  content: "*";
  color: red;
}
.foraccount > .verImg > input {
  width: 50%;
}
.foraccount > .verImg > .code {
  /*margin: 400px auto;*/
  display: inline-block;
  width: 18%;
  height: 2.8rem;
  vertical-align: top;
  margin-left: 2%;
  /*border: 1px solid red;*/
}
.foraccount > div > input {
  width: 70%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.foraccount > .foraccountspan {
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