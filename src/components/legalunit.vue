<template>
  <div class="legalunit">
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
    <div class="lgunit">
      <div class="lgcname">
        <span>单位名称：</span>
        <input
          type="text"
          placeholder="请填写您的单位名称"
          v-model="cName"
        />
      </div>
      <div class="lgunitspan">{{lgNamespan}}</div>
      <div class="lgctype">
        <span>单位类型：</span>
        <input
          type="text"
          placeholder="请填写您单位的类型"
          v-model="cType"
        />
      </div>
      <div class="lgunitspan">{{lgtypespan}}</div>
      <div class="lgcreditCode">
        <span>统一社会信用代码：</span>
        <input
          type="text"
          placeholder="请填写您单位的统一社会信用代码"
          v-model="creditCode"
        />
      </div>
      <div class="lgunitspan">{{lgcreditCodespan}}</div>
      <div class="btns">
        <button @click="legalunitnext()">下一步</button>
        <button @click="legalunitback()">返回</button>
      </div>
    </div>
    <!-- input框end -->
  </div>
</template>
<script>
export default {
  name:"legalunit",
  data() {
    return {
      cName:"",
      cType:"",
      creditCode:"",
      lgNamespan:"",
      lgtypespan:"",
      lgcreditCodespan:"",
    }
  },
  methods: {
    // 返回
    legalunitback(){
      this.$router.push('/signup/legalResnow');
    },

    //下一步
    legalunitnext(){
      if (
        !this.cName ||
        !this.cType ||
        !this.creditCode
      ) {
        alert("请确认信息填写完整并无误！");
      } else {
        this.$router.push("/signup/legalaccount");
        //发送请求
      }
    },
  },
}
</script>
<style scoped>
.legalunit{
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.legalunit > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.legalunit > hr {
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
.arrowsBox > .unit {
  background-color: #007acc;
}
.arrowsBox > .unit > span {
  color: white;
}
.arrowsBox > .unit::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .unit::after {
  border-left: 2rem solid #007acc;
}  
/* 指示箭头end*/
/* input框start */
.lgunit {
  width: 60%;
  margin: 3.5rem auto 0;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.lgunit > div > span {
  display: inline-block;
  width: 28%;
  text-align: right;
}
.lgunit > div > span::before {
  content: "*";
  color: red;
}
.lgunit > div > input {
  width: 70%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.lgunit > .lgunitspan {
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