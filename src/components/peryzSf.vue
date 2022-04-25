<template>
  <div class="peryzSf">
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
    <div class="yzSf">
      <!-- <div class="perdoctype">
        <span>证件类型：</span>
        <select name="selectEle" id="selectEle">
          <option value="jmsfz">居民身份证</option>
          <option value="gasfz">港澳身份证</option>
        </select>
      </div> -->
      <!-- <div class="yzSfspan"></div> -->
      <div class="pername">
        <span>姓名：</span>
        <input type="text" placeholder="请填写证件上的姓名，用于身份信息比对" v-model="name" @blur="pernameElt()"/>
      </div>
      <div class="yzSfspan">{{namespan}}</div>
      <div class="perid">
        <span>证件号码：</span>
        <input type="text" placeholder="请填写与证件类型一致的证件号码" v-model="idcard" @blur="peridcardElt()"/>
      </div>
      <div class="yzSfspan">{{idcardspan}}</div>
      <div class="perval">
        <span>有效期：</span>
        <a-range-picker>
          <template slot="renderExtraFooter"> extra footer </template>
        </a-range-picker>
      </div>
      <div class="yzSfspan"></div>
      <div class="btns">
        <button @click="peryzSfnext()">下一步</button>
        <button @click="peryzSfback()">返回</button>
      </div>
    </div>
    <!--input框end  -->
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import { log } from 'util';
export default {
  name: "peryzSf",
  data() {
    return {
      name:"",
      idcard:"",
      starttime:"",
      endtime:"",
      namespan:"",
      idcardspan:"",
    }
  },
  methods: {
    //姓名验证
    pernameElt(){   
      if(this.name && !/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,}$/.test(this.name)){
        this.namespan = '姓名不符合要求！';
      }else if (/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,}$/.test(this.name)) {
        this.namespan = "";
      }
    },
    //身份证号验证
    peridcardElt(){
      if(this.idcard && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.idcard)){
        this.idcardspan = '身份证号不符合要求！';
      }else if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.idcard)) {
        this.idcardspan = "";
      }
    },


    peryzSfnext() {
      this.starttime = document.getElementsByClassName("ant-calendar-range-picker-input")[0].value;
      this.endtime = document.getElementsByClassName("ant-calendar-range-picker-input")[1].value;
      
      if (
        !this.name ||
        !this.idcard ||
        !this.starttime ||
        !this.endtime ||
        this.namespan ||
        this.idcardspan
      ) {
        alert("请确认信息填写完整并无误！");
      } else {
        //发送请求
        axios({
          url: 'http://47.97.155.31:8080/individual/verify3',	// 后端的接口地址
          // url: '/api/individual/verify2',
          method: 'post',
          data: {
            endTime:this.endtime,
            startTime:this.starttime,
            pNumber:this.idcard,
            name:this.name,
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
                this.$router.push("/signup/perResfinish");    
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
    peryzSfback() {
      this.$router.push("/signup/pertxUser");
    },
  },
  mounted() {
    // 修改组件input框内容
    document.getElementsByClassName("ant-calendar-range-picker-input")[0].setAttribute("placeholder", "开始日期");
    document.getElementsByClassName("ant-calendar-range-picker-input")[1].setAttribute("placeholder", "结束日期");
  },
};
</script>

<style scoped>
.peryzSf {
  width: 85%;
  height: min-content;
  font-size: 1.25rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}
.peryzSf > h2 {
  text-align: start;
  font-size: 1.25rem;
  color: #3386d7;
}
.peryzSf > hr {
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
.arrowsBox > .yzsf {
  background-color: #007acc;
}
.arrowsBox > .yzsf > span {
  color: white;
}
.arrowsBox > .yzsf::before {
  border-top: 1.5rem solid #007acc;
  border-bottom: 1.5rem solid #007acc;
}
.arrowsBox > .yzsf::after {
  border-left: 2rem solid #007acc;
}
/* 指示箭头end*/
/* input框start */
.yzSf {
  width: 50%;
  margin: 3.5rem auto;
  font-size: 1rem;
  color: black;
  text-align: left;
}
.yzSf > div > span {
  display: inline-block;
  width: 20%;
  text-align: right;
}
.yzSf > .perval > span:nth-child(2) {
  width: 78%;
  margin-left: 1%;
}
.yzSf > .perdoctype > span::before,
.yzSf > .pername > span::before,
.yzSf > .perid > span::before {
  content: "*";
  color: red;
}
.yzSf > .perval > span:nth-child(1)::before {
  content: "*";
  color: red;
}
.yzSf > div > input {
  width: 78%;
  margin-left: 1%;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid black;
}

.yzSf > .yzSfspan {
  color: red;
  font-size: 0.9rem;
  height: 1rem;
  margin: 0.75rem 23%;
}
/* .perval .ant-input {
  height: 2.5rem;
} */
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
  .yzSf {
    width: 75%;
  }
}
@media screen and (max-width: 1000px) {
  .yzSf {
    width: 95%;
  }
  .arrowsBox > .jtbox {
    font-size: 0.85rem;
  }
}
</style>
<style>
  .perval input{
    font-size: .85rem;
  }
</style>