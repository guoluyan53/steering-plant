<template>
  <div class="perfirst">
    <div class="phone">
      <span>手机号码：</span>
      <input
        type="text"
        placeholder="请填写正确的手机号码"
        v-model="telephone"
        @blur="perfortelElt()"
      />
    </div>
    <div class="perfirstspan">{{pertelspan}}</div>
    <div class="verMes">
      <span>验证码：</span>
      <input type="text" placeholder="请填写短信验证码" v-model="dxver" />
      <button id="fordxyzm" @click="pergetVer()">{{ getdxver }}</button>
    </div>
    <div class="perfirstspan">{{perverMesspan}}</div>
    <div class="btns">
        <button @click="perfirstnext()">下一步</button>
        <button @click="perfirstback()">返回</button>
      </div>
  </div>
</template>
<script>
export default {
  name:"perfirst",
  data() {
    return {
      telephone:"",
      dxver:"",
      pertelspan:"",
      perverMesspan:"",
      getdxver:"发送验证码",
    }
  },
  methods: {
    //返回
    perfirstback(){
      this.$router.push('/signup/perforgetsfYz/pertwomethods');
    },

    // 手机号验证
    perfortelElt(){
      if (this.telephone && !/^[1]([3-9])[0-9]{9}$/.test(this.telephone)) {
        this.pertelspan = "请填写正确的手机号码！";
      } else if (/^[1]([3-9])[0-9]{9}$/.test(this.telephone)) {
        this.pertelspan = "";
      }
    },

    //短信验证
    pergetVer(){
      if (!this.telephone || this.pertelspan) {
        this.perverMesspan = "请先填写正确的手机号！";
      } else if(document.getElementById("fordxyzm").style.cursor != "not-allowed") {
        this.perverMesspan = "";
        let i = 5; //120
        let gettimer = setInterval(() => {
          // console.log(i);
          if (i < 0) {
            clearInterval(gettimer);
            this.getdxver = "发送验证码";
            document.getElementById("fordxyzm").style.cursor = "pointer";
          }else if(document.getElementById("fordxyzm") === null){
            clearInterval(gettimer);
            return ;
          } 
          else {
            this.getdxver = "(" + i-- + "s)后可重新发送";
            document.getElementById("fordxyzm").style.cursor = "not-allowed";
          }
        }, 1000);

        //发送短信请求
      }
    },

     //下一步
    perfirstnext(){
      if (
        !this.telephone ||
        !this.dxver ||
        this.pertelspan ||
        this.perverMesspan
      ) {
        alert("请确认信息填写完整并无误！");
      } else {
        this.$router.push("/signup/pernewpsw");
        //发送请求
      }
    },
  },
}
</script>
<style scoped>
.perfirst {
  margin: 3.5rem auto;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.perfirst > div > span {
  display: inline-block;
  width: 20%;
  text-align: right;
}
.perfirst > div > span::before {
  content: "*";
  color: red;
}
.perfirst > .verMes > input {
  width: 50%;
}
.perfirst > .verMes > button {
  width: 25%;
  margin-left: 2%;
  line-height: 2.4rem;
  vertical-align: top;
  font-size: 0.9rem;
  outline: none;
  background-color: #eff8ff;
  border: 1px solid #007acc;
  cursor: pointer;
}

.perfirst > div > input {
  width: 78%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.perfirst > .perfirstspan {
  color: red;
  font-size: 0.9rem;
  height: 1rem;
  margin: 0.75rem 23%;
}
.btns {
  width: 70%;
  margin: 3rem auto;
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