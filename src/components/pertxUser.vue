<template>
  <div class="pertxUser">
    <h2>个人账号注册</h2>
    <hr />
    <!--  指示箭头start-->
    <div class="arrowsBox">
      <div class="yztel jtbox"><span>验证手机号</span></div>
      <div class="txuser jtbox"><span>填写账号信息</span></div>
      <div class="yzsf jtbox"><span>验证身份</span></div>
      <div class="finish jtbox"><span>完成</span></div>
    </div>
    <!-- 指示箭头end -->
    <!--input框start  -->
    <div class="txUser">
      <div class="perusername">
        <span>用户名：</span>
        <input
          type="text"
          placeholder="长度为4-30个字符，支持字母和数字组合，字母开头"
          v-model="username"
          @blur="perusernameElt()"
        />
      </div>
      <div class="txUserspan">{{ userspan }}</div>
      <div class="perpsw">
        <span>密码：</span>
        <input
          type="password"
          placeholder="长度为6-18位，至少为字母、数字、符号两种或以上组合"
          v-model="beforepassword"
          @blur="perpswElt()"
        />
      </div>
      <div class="txUserspan">{{ pswspan }}</div>
      <div class="perconfimpsw">
        <span>确认密码：</span>
        <input
          type="password"
          placeholder="请再次输入密码"
          v-model="twicepsw"
        />
      </div>
      <div class="txUserspan">{{ twicepswspan }}</div>
      <div class="peremail">
        <span>电子邮箱：</span>
        <input
          type="text"
          placeholder="请填写电子邮箱，可通过邮箱找回密码"
          v-model="email"
          @blur="peremailElt()"
        />
      </div>
      <div class="txUserspan">{{ emailspan }}</div>
      <div class="btns">
        <button @click="pertxUsernext()">下一步</button>
        <button @click="pertxUserback()">返回</button>
      </div>
    </div>
    <!--input框end  -->
    <!-- <div>
      原数据：<input type="text" v-model="d1">
      <button @click="jiami">加密</button>
      <button @click="jiemi">解密</button>
      加密数据：<input type="text" v-model="d2">
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import { log } from 'util';
import {Decrypt,Encrypt} from '../assets/js/cryptojs'
export default {
  name: "pertxUser",
  data() {
    return {
      username: "",
      beforepassword: "",
      password:"",//加密密码
      twicepsw: "",
      email: "",
      userspan: "",
      pswspan: "",
      // twicepswspan: "",
      emailspan: "",
      // d1:'',
      // d2:'',
    };
  },
  computed: {
    // 确认密码
    twicepswspan(){
      if(this.twicepsw && this.twicepsw != this.beforepassword){
        return "密码不一致！";
      }else{
        return "";
      }
    }
  },
  methods: {
    //用户名验证
    perusernameElt(){
      if(this.username && !/^[a-zA-Z]+[a-zA-Z0-9]{3,29}$/.test(this.username)){
        this.userspan = '用户名不符合要求！';
      }else if (/^[a-zA-Z]+[a-zA-Z0-9]{3,29}$/.test(this.username)) {
        this.userspan = "";
      }
    },
    
    //密码验证
    perpswElt(){
      // console.log(this.password);
      if(this.beforepassword && !/(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{6,18}$/.test(this.beforepassword)){
        this.pswspan = '密码不符合要求！';
      }else if (/(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{6,18}$/.test(this.beforepassword)) {
        this.pswspan = "";
        //密码加密
        this.password = Encrypt(this.beforepassword);
      }
    },

    //验证邮箱
    peremailElt(){
      if(this.email && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email)){
        this.emailspan = '电子邮箱不符合要求！';
      }else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email)) {
        this.emailspan = "";
      }
    },

    pertxUsernext() {
      if (
        !this.username ||
        !this.beforepassword ||
        !this.twicepsw ||
        !this.email ||
        this.userspan ||
        this.pswspan ||
        this.twicepswspan ||
        this.emailspan
      ) {
        alert("请确认信息填写完整并无误！");
      } else {
        //发送请求
        axios({
          url: 'http://47.97.155.31:8080/individual/verify2',	// 后端的接口地址
          // url: '/api/individual/verify2',
          method: 'post',
          data: {
            email:this.email,
            password:this.password,
            username:this.username,
          },
          transformRequest: [function (data) {
            data = qs.stringify(data);
            return data; 
          }],
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
          dataType: "json"
        })
          .then(res => {
            console.log(res);
            // 进行判断
            if(res.data.code == 200){
                alert("提交成功！");
                // this.name = this.className = this.sId = this.telephone = this.email = '';
                // console.log(this.$router);

                //提交成功后页面跳转
                this.$router.push("/signup/peryzSf");       
            }
            else{
                alert(res.data.message);
                // this.name = '';
            }
        }).catch(err => {
            console.log(err);                
        })
      }
    },
    pertxUserback() {
      this.$router.push("/signup/perResnow");
    },
    // jiami(){
    //   console.log("加密-----",this.d1);
    //   let dd = Encrypt(this.d1)
    //   console.log(dd)
    //   this.d2= dd
    // },
    // jiemi(){
    //   console.log("解密-----",this.d2);
    //   this.d1= Decrypt(this.d2)
    //   console.log(this.d1);
    // },
  },
};
</script>

<style scoped>
.pertxUser {
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  /* padding-bottom: 0.1rem; */
  background-color: white;
}
.pertxUser > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.pertxUser > hr {
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
.arrowsBox > .txuser {
  background-color: #007acc;
}
.arrowsBox > .txuser > span {
  color: white;
}
.arrowsBox > .txuser::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .txuser::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/
/* input框start */
.txUser {
  width: 50%;
  margin: 3.5rem auto 0;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.txUser > div > span {
  display: inline-block;
  width: 20%;
  text-align: right;
}
.txUser > div > span::before {
  content: "*";
  color: red;
}
.txUser > div > input {
  width: 78%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.txUser > .txUserspan {
  color: red;
  /* display: inline-block; */
  font-size: 0.9rem;
  height: 1rem;
  margin: 0.75rem 23%;
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
@media screen and (max-width: 1300px) {
  .arrowsBox {
    width: 100%;
  }
  .arrowsBox > .jtbox {
    font-size: 1rem;
  }
  .txUser {
    width: 75%;
  }
}
@media screen and (max-width: 1000px) {
  .txUser {
    width: 95%;
  }
  .arrowsBox > .jtbox {
    font-size: 0.85rem;
  }
}
</style>