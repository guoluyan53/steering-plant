<template>
  <div class="perResnow">
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
    <div class="peryzTel">
      <div class="phone">
        <span>手机号码：</span>
        <input
          type="text"
          placeholder="请填写正确的手机号码"
          v-model="telephone"
          @blur="pertelElt()"
        />
      </div>
      <div class="yzTelspan">{{ telspan }}</div>
      <div class="verImg">
        <span>图片验证码：</span>
        <input
          type="text"
          placeholder="请填写图片验证码"
          v-model="verification"
          @blur="perverElt()"
        />
        <!-- <img src="../assets/images/signup/yzm.png" alt="" /> -->
        <div class="code" @click="refreshCode">
          <!--   ：fresh：父组件向子组件传送刷新验证码的信号；
            @makedCode：子组件向父组件传送验证码的值-->
          <s-identify :fresh="flag" @makedCode="getMakedCode"></s-identify>
        </div>
      </div>
      <div class="yzTelspan">{{ verspan }}</div>
      <div class="verMes">
        <span>短信验证码：</span>
        <input type="text" placeholder="请填写短信验证码" v-model="dxver" />
        <button id="getdxyzm" @click="getVer()">{{ getdxver }}</button>
      </div>
      <div class="yzTelspan">{{ dxverspan }}</div>
      <div class="btns">
        <button @click="peryzTelnext()">下一步</button>
        <button @click="peryzTelback()">返回</button>
      </div>
    </div>
    <!-- input框end -->
  </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
import SIdentify from "./identify";
export default {
  name: "perResnow",
  data() {
    return {
      flag: true, //该值变化，就会触发刷新
      code: "", //刷新后的验证码
      telephone: "",
      verification: "",
      dxver: "",
      telspan: "",
      verspan: "",
      dxverspan: "",
      getdxver: "获取短信验证码",
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
    peryzTelback() {
      this.$router.push("/signup/Login/perLogin");
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

    // 手机号验证
    pertelElt() {
      if (this.telephone && !/^[1]([3-9])[0-9]{9}$/.test(this.telephone)) {
        this.telspan = "请填写正确的手机号码！";
      } else if (/^[1]([3-9])[0-9]{9}$/.test(this.telephone)) {
        this.telspan = "";
      }
    },

    //图片验证码验证
    perverElt() {
      if (this.verification && this.verification != this.code) {
        this.verspan = "请输入正确的验证码！";
      } else if (this.verification == this.code) {
        this.verspan = "";
      }
    },

    //短信验证
    getVer() {
      if (!this.verification || this.verspan) {
        this.dxverspan = "请先填写图片验证码！";
      } else if(document.getElementById("getdxyzm").style.cursor != "not-allowed") {
        this.dxverspan = "";
        let i = 5; //120
        let timer = setInterval(() => {
          // console.log(i);
          if (i < 0) {
            clearInterval(timer);
            this.getdxver = "获取短信验证码";
            document.getElementById("getdxyzm").style.cursor = "pointer";
          }
          else if(document.getElementById("getdxyzm") === null){
            clearInterval(timer);
            return ;
          }  
          else {
            this.getdxver = "(" + i-- + "s)后可重新发送";
            document.getElementById("getdxyzm").style.cursor = "not-allowed";
          }
        }, 1000);

        //发送短信请求
      }
    },

    //下一步
    peryzTelnext() {
      if (
        !this.telephone ||
        !this.verification ||
        !this.dxver ||
        this.telspan ||
        this.verspan ||
        this.dxverspan
      ) {
        alert("请确认信息填写完整并无误！");
      } else {
        //发送请求
        axios({ 
            url:'http://47.97.155.31:8080/individual/verify1',
            method: 'post',
            data: qs.stringify({phone:this.telephone}),
            // data:{
            //   phone:qs.stringify(this.telephone),//格式化参数
            // },
            headers:{
              // 'Content-Type':'multipart/form-data',
              'Content-Type':'application/x-www-form-urlencoded',
            },
        }).then(res => {
            console.log(res);
            this.result = res;

            // 进行判断
            if(this.result.data.code == 200){
                alert("提交成功！");
                // this.name = this.className = this.sId = this.telephone = this.email = '';
                // console.log(this.$router);

                //提交成功后页面跳转
                this.$router.push("/signup/pertxUser");        
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
.perResnow {
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.perResnow > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.perResnow > hr {
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
.arrowsBox > .yztel {
  background-color: #007acc;
}
.arrowsBox > .yztel > span {
  color: white;
}
.arrowsBox > .yztel::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .yztel::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/

/* input框start */
.peryzTel {
  width: 50%;
  margin: 3.5rem auto;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.peryzTel > div > span {
  display: inline-block;
  width: 20%;
  text-align: right;
}
.peryzTel > div > span::before {
  content: "*";
  color: red;
}
.peryzTel > .verImg > input {
  width: 50%;
}
/* .peryzTel > .verImg > img {
  width: 30%;
  height: 2.8rem;
  vertical-align: top;
  margin-left: 2%;
} */
.peryzTel > .verImg > .code {
  /*margin: 400px auto;*/
  display: inline-block;
  width: 25%;
  height: 2.8rem;
  vertical-align: top;
  margin-left: 2%;
  /*border: 1px solid red;*/
}
.peryzTel > .verMes > input {
  width: 50%;
}
.peryzTel > .verMes > button {
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

.peryzTel > div > input {
  width: 78%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}
.peryzTel > .yzTelspan {
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
@media screen and (max-width: 1300px) {
  .arrowsBox {
    width: 100%;
  }
  .arrowsBox > .jtbox {
    font-size: 1rem;
  }
  .peryzTel {
    width: 75%;
  }
}
@media screen and (max-width: 1000px) {
  .peryzTel {
    width: 95%;
  }
  .arrowsBox > .jtbox {
    font-size: 0.85rem;
  }
}
</style>
