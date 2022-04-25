<template>
  <div class="persecond">
    <div class="email">
      <span>邮箱：</span>
      <input
        type="text"
        placeholder="请填写正确的邮箱"
        v-model="email"
        @blur="perforemailElt()"
      />
    </div>
    <div class="persecondspan">{{peremspan}}</div>
    <div class="verMes">
      <span>验证码：</span>
      <input type="text" placeholder="请填写邮箱验证码" v-model="emver" />
      <button id="foremyzm" @click="pergetemVer()">{{ getemver }}</button>
    </div>
    <div class="persecondspan">{{perveremspan}}</div>
    <div class="btns">
        <button @click="persecondnext()">下一步</button>
        <button @click="persecondback()">返回</button>
      </div>
  </div>
</template>
<script>
export default {
  name:"persecond",
  data() {
    return {
      email:"",
      emver:"",
      peremspan:"",
      perveremspan:"",
      getemver:"发送验证码",
    }
  },
  methods: {
    //返回
    persecondback(){
      this.$router.push('/signup/perforgetsfYz/pertwomethods');
    },

    //邮箱验证
    perforemailElt(){
      if(this.email && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email)){
        this.peremspan = '电子邮箱不符合要求！';
      }else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email)) {
        this.peremspan = "";
      }
    },
    
    //邮箱验证码验证
    pergetemVer(){
      if (!this.email || this.peremspan) {
        this.perveremspan = "请先填写正确的邮箱！";
      } else if(document.getElementById("foremyzm").style.cursor != "not-allowed") {
        this.perveremspan = "";
        let i = 5; //120
        let sectimer = setInterval(() => {
          // console.log(i);
          if (i < 0) {
            clearInterval(sectimer);
            this.getemver = "发送验证码";
            document.getElementById("foremyzm").style.cursor = "pointer";
          }
          else if(document.getElementById("foremyzm") === null){
            clearInterval(sectimer);
            return ;
          } 
           else {
            this.getemver = "(" + i-- + "s)后可重新发送";
            document.getElementById("foremyzm").style.cursor = "not-allowed";
          }
        }, 1000);

        //发送邮箱验证码请求
      }
    },

     //下一步
    persecondnext(){
      if (
        !this.email ||
        !this.emver ||
        this.peremspan ||
        this.perveremspan
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
.persecond {
  margin: 3.5rem auto;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.persecond > div > span {
  display: inline-block;
  width: 20%;
  text-align: right;
}
.persecond > div > span::before {
  content: "*";
  color: red;
}
.persecond > .verMes > input {
  width: 50%;
}
.persecond > .verMes > button {
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

.persecond > div > input {
  width: 78%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.persecond > .persecondspan {
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