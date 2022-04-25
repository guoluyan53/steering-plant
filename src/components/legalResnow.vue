<template>
  <div class="legalResnow">
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
    <div class="lgResnow">
      <div class="lgname">
        <span>法定代表人姓名：</span>
        <input
          type="text"
          placeholder="请填写法定代表人姓名"
          v-model="cPersonName"
          @blur="lgnameElt()"
        />
      </div>
      <div class="Resnowspan">{{lgnamespan}}</div>
      <div class="lgsfzh">
        <span>法定代表人身份证号：</span>
        <input
          type="text"
          placeholder="请填写法定代表人身份证号"
          v-model="cId"
          @blur="lgsfzhElt()"
        />
      </div>
      <div class="Resnowspan">{{lgsfzhspan}}</div>
      <div class="btns">
        <button @click="legalResnownext()">下一步</button>
        <button @click="legalResnowback()">返回</button>
      </div>
    </div>
    <!-- input框end -->
  </div>
</template>
<script>
export default {
  name:"legalResnow",
  data() {
    return {
      cPersonName:"",
      cId:"",
      lgnamespan:"",
      lgsfzhspan:"",
    }
  },
  methods: {
    // 返回
    legalResnowback(){
      this.$router.push('/signup/Login/legalLogin');
    },

    //法人姓名验证
    lgnameElt(){
      if(this.cPersonName && !/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,}$/.test(this.cPersonName)){
        this.lgnamespan = '法定代表人姓名不符合要求！';
      }else if (/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,}$/.test(this.cPersonName)) {
        this.lgnamespan = "";
      }
    },

    //法人身份证号验证
    lgsfzhElt(){
      if(this.cId && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.cId)){
        this.lgsfzhspan = '法定代表人身份证号不符合要求！';
      }else if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.cId)) {
        this.lgsfzhspan = "";
      }
    },

    //下一步
    legalResnownext(){
      if (
        !this.cPersonName ||
        !this.cId ||
        this.lgnamespan ||
        this.lgsfzhspan
      ) {
        alert("请确认信息填写完整并无误！");
      } else {
        this.$router.push("/signup/legalunit");
        //发送请求
      }
    },
  },
}
</script>
<style scoped>
.legalResnow{
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.legalResnow > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.legalResnow > hr {
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
.arrowsBox > .lguser {
  background-color: #007acc;
}
.arrowsBox > .lguser > span {
  color: white;
}
.arrowsBox > .lguser::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .lguser::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/
/* input框start */
.lgResnow {
  width: 60%;
  margin: 3.5rem auto 0;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.lgResnow > div > span {
  display: inline-block;
  width: 28%;
  text-align: right;
}
.lgResnow > div > span::before {
  content: "*";
  color: red;
}
.lgResnow > div > input {
  width: 70%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.lgResnow > .Resnowspan {
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