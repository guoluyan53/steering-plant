<template>
  <div class="perforgetsfYz">
    <h2>个人密码找回</h2>
    <hr />
    <!--  指示箭头start-->
    <div class="arrowsBox">
      <div class="txuser jtbox"><span>填写账号信息</span></div>
      <div class="sfyz jtbox"><span>身份验证</span></div>
      <div class="newpsw jtbox"><span>设置新密码</span></div>
      <div class="finish jtbox"><span>完成</span></div>
    </div>
    <!-- 指示箭头end -->
    <div class="persfyz">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name:"perforgetsfYz",
}
</script>
<style scoped>
.perforgetsfYz{
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.perforgetsfYz > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.perforgetsfYz > hr {
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
.persfyz{
  width: 50%;
  margin: 3.5rem auto;
  font-size: 1rem;
  color: black;
  text-align: left;
}
</style>