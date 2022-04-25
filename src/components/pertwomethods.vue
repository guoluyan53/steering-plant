<template>
  <div class="pertwomethods">
    <h4>正在为您找回账号，请选择验证方式：</h4>
    <div class="twoBox">
      <input type="text" value="手机号码+验证码方式" readonly>
      <button @click="pertwoTel()">立即验证</button>
    </div>
    <div class="twoBox">
      <input type="text" value="邮箱+验证码方式" readonly>
      <button @click="pertwoEmail()">立即验证</button>
    </div>
    <div class="btns">
      <button @click="pertwoback()">返回</button>
    </div>
  </div>
</template>
<script>
export default {
  name:"pertwomethods",
  methods: {
    pertwoTel(){
      this.$router.push('/signup/perforgetsfYz/perfirst');
    },
    pertwoEmail(){
      this.$router.push('/signup/perforgetsfYz/persecond');
    },
    pertwoback(){
      this.$router.push('/signup/perForgetpsw');
    },
  },
}
</script>
<style scoped>
.twoBox{
  margin: 1rem 0;
}
.twoBox input{
  width: 80%;
  border: 1px solid black;
  outline: none;
}
.twoBox button{
  width: 20%;
  border: none;
  background-color: #007acc;
  border: 1px solid #007acc;
  color: white;
  outline: none;
  cursor: pointer;
}
.btns {
  margin: 3rem auto 0;
  text-align: center;
}
.btns > button {
  border: none;
  outline: none;
  padding: 0.5rem 3rem;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #007acc;
}
</style>