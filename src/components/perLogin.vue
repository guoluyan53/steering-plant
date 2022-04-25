<template>
  <div class="perLogin">
    <div class="perUser inputBox">
      <a-icon type="user" class="icons" />
      <input type="text" placeholder="用户名/手机号" v-model="username"/>
    </div>
    <div class="perLoginspan"></div>
    <div class="perPsw inputBox">
      <a-icon type="lock" class="icons" />
      <input
        type="password"
        placeholder="请输入密码"
        v-model="beforepassword"
      />
    </div>
    <div class="perLoginspan"></div>
    <div class="twoBox">
      <div class="perVer inputBox">
        <a-icon type="safety-certificate" class="icons" />
        <input type="text" placeholder="请输入验证码" v-model="verification" @blur="perverificElt()"/>
      </div>
      <!-- <img src="../assets/images/signup/yzm.png" alt="" /> -->
      <div class="code" @click="refreshCode">
          <!--   ：fresh：父组件向子组件传送刷新验证码的信号；
            @makedCode：子组件向父组件传送验证码的值-->
        <s-identify :fresh="flag" @makedCode="getMakedCode"></s-identify>
      </div>
    </div>
    <div class="perLoginspan">{{verificspan}}</div>
    <button @click="perLogin()">个人登录</button>
    <div class="smallSize">
      <a @click="forgetPsw()">忘记密码</a>
      <a id="specialSpan" @click="resNow()">立即注册</a>
      <a @click="havePro()">遇到问题</a>
    </div>
  </div>
</template>

<script>
import SIdentify from "./identify";
import {Decrypt,Encrypt} from '../assets/js/cryptojs'
import axios from 'axios'
export default {
  name: "perLogin",
  data() {
    return {
      flag: true, //该值变化，就会触发刷新
      code: "", //刷新后的验证码
      username: "",
      user:"",
      phone:"",
      beforepassword:"",
      password: "",//加密密码
      verification: "",
      verificspan:"",
      result:{},
    };
  },
  components: {
    SIdentify,
  },
  // 验证码初始化
  mounted() {
    this.flag = !this.flag;
  },
  methods: {
    //跳转链接
    forgetPsw() {
      this.$router.push("/signup/perForgetpsw");
    },
    resNow() {
      this.$router.push("/signup/perResnow");
    },
    havePro(){

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
    //图片验证码验证
    perverificElt() {
      if (this.verification && this.verification != this.code) {
        this.verificspan = "请输入正确的验证码！";
      } else if (this.verification == this.code) {
        this.verificspan = "";
      }
    },
    
    
    //登录验证
    perLogin() {
      if (!this.username || !this.beforepassword || !this.verification || this.verificspan) {
        alert("请确认信息填写完整并无误！");
      } else {
        //console.log("发送请求");
        //加密密码
        this.password = Encrypt(this.beforepassword);
        //判断登录名
        if(/^[1]([3-9])[0-9]{9}$/.test(this.username)){
          this.phone = this.username;
        }else{
          this.user = this.username;
        }
        //发送请求
        axios({ 
            url:'/loginApi/individual/login',
            method: 'post',
            data:{
                administrator_account:this.user,
                phone:this.phone,
                administrator_password:this.beforepassword,
                //administrator_password:this.password,//加密后
            }
        }).then(res => {
            console.log(res);
            this.result = res;

            // 进行判断
            if(this.result.data.code == 200){
                alert("提交成功！");
                // this.name = this.className = this.sId = this.telephone = this.email = '';
                // console.log(this.$router);

                //提交成功后页面跳转
                // this.$router.push({path:'index'});
            }
            else{
                alert(this.result.data.message);
                // this.name = '';
            }
        }).catch(err => {
            console.log(err);                
        })
      }
    },

  },
};
</script>

<style scoped>
.perLogin {
  width: 60%;
  height: min-content;
  margin: 1.25rem auto;
  text-align: start;
}
/*输入框样式start*/
.inputBox {
  border: 1px solid rgb(207, 204, 204);
  padding: 0.15rem 0;
  /* margin: 0.75rem 0; */
}
.inputBox > .icons {
  font-size: 1.5rem;
  padding: 0 0.65rem;
  margin-right: 0.5rem;
  vertical-align: middle;
  border-right: 2px solid rgb(207, 204, 204);
  color: rgb(207, 204, 204);
}
.inputBox > input {
  font-size: 1rem;
  border: none;
  outline: none;
  vertical-align: middle;
}
.perUser > input,
.perPsw > input {
  width: 80%;
}
/*输入框样式end*/
.perLogin > .perLoginspan {
  color: red;
  font-size: 0.9rem;
  height: 1rem;
  margin: 0.25rem 3.75rem;
}
/* 验证码部分start */
.twoBox {
  display: flex;
  justify-content: space-between;
  /* align-items: stretch; */
}
.perVer {
  width: 60%;
  margin: 0;
}
.perVer > input {
  width: 60%;
}
/* .twoBox > img {
  width: 35%;
  height: 2.5rem;
  border: 1px solid rgb(207, 204, 204);
} */
.twoBox > .code {
  /*margin: 400px auto;*/
  display: inline-block;
  width: 35%;
  height: 2rem;
  vertical-align: top;
  margin-left: 2%;
  /*border: 1px solid red;*/
}
/* 验证码图片end */
.perLogin > button {
  background-color: #366fb6;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  letter-spacing: 0.25em;
  margin-top: 1rem;
  line-height: 2.5rem;
  border-radius: 5px;
}
.perLogin > .smallSize {
  margin-top: 0.75rem;
  text-align: center;
  font-size: 1rem;
}
.smallSize > #specialSpan {
  display: inline-block;
  border-left: 2px solid #366fb6;
  border-right: 2px solid #366fb6;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
}
@media screen and (max-width: 1200px) {
  .perLogin {
    width: 80%;
  }
}
/* @media screen and (max-width: 1000px) {
  .perLogin {
    width: 100%;
  }
} */
</style>
<style>
.peryzSf .perval .ant-input {
  height: 2.5rem;
  border: 1px solid black;
  border-radius: 0;
}

.peryzSf .perval .ant-input:hover {
  border-color: black;
}

.peryzSf .perval input::placeholder {
  color: #757575;
}
</style>