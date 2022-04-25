<template>
  <div class="lgResfinish">
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
    <!--完成页面start  -->
    <div class="finish">
      <img src="../assets/images/signup/finish.png" alt="" />
      <p>恭喜您，已完成注册！</p>
      <p>{{count}}秒后将自动返回登录页</p>
      <button @click="lgResfinishback()">返回登录页</button>
    </div>
    <!--完成页面end  -->
  </div>
</template>

<script>
export default {
  name:"lgResfinish",
  data() {
    return {
      count:"",
    }
  },
  methods: {
    lgResfinishback() {
      this.$router.push("/signup/Login/legalLogin");
    },
  },
  mounted(){
    this.count = 5;
    let counter = setInterval(() => {
          if (this.count == 1) {
            clearInterval(counter);
            this.$router.push("/signup/Login/legalLogin");
          } else {
            this.count--;
          }
        }, 1000);
  }
}
</script>

<style scoped>
.lgResfinish{
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.lgResfinish > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.lgResfinish > hr {
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
.lgResfinish > .finish {
  width: 50%;
  margin: 3.5rem auto;
  font-size: 1rem;
  text-align: center;
}
.lgResfinish > .finish img {
  width: 7rem;
  height: 7rem;
  margin-bottom: 1rem;
}
.lgResfinish .finish p {
  margin: 0.5rem;
}
.lgResfinish > .finish p:nth-child(2) {
  font-size: 1.5rem;
}
.lgResfinish .finish p:nth-child(3) {
  letter-spacing: 0.2em;
  font-size: 1.25rem;
}
.lgResfinish .finish button {
  background-color: #007acc;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  letter-spacing: 0.2em;
  border-radius: 5px;
}
/* 完成页面end */
</style>