<template>
    <div class="jianyanxc">
        <PageHeader></PageHeader>
        <div class="main">
            <div class="title">建言献策</div>
            <div class="content">
                <div class="formall">
                  <form action="" class="form">
                    <div class="form-1">
                      <span>姓名或单位:</span>
                      <input type="text" v-model="name">
                    </div>
                    <div class="form-2">
                      
                        <span class="span">联系电话:</span>
                        <input type="text" v-model="tel" @blur="pertelElt()">
                   
                    </div>
                    <div class="form-2">
                   
                        <span>电子邮箱:</span>
                        <input type="text" v-model="mail" @blur="permailElt()">
                    </div>
                 
                    <div class="form-3">
                      <span>建议内容:</span>
                      <textarea name="" id="" cols="30" rows="10" v-model="desc"></textarea>
                    </div>
                    <div class="form-4">
                      <span>验证码:</span>
                
                      <input type="text"
                       placeholder="请填写验证码"
                       v-model="verification"
                       @blur="perverElt()"
                       >
                       <div class="code" @click="refreshCode">
                         <s-identify :fresh="flag" @makedCode="getMakedCode"></s-identify>
                       </div>

                    </div>
                  </form>
                    
                </div>
                <div class="btn">
                  <button @click="submit">提交建议</button>
                </div>
                
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>
<script>

import qs from 'qs'
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
// import {GVerify} from '../assets/js/verifyCode';
import SIdentify from "../components/identify";
import axios from 'axios';

export default{
    name:'jianyanxc',
    components:{
    PageHeader,
    PageFooter,
    SIdentify
    },
    data() {
      return {
        name: '',
        tel:'',
        mail:'',
        desc:'',
       //验证码部分
        flag: true, //该值变化，就会触发刷新
        code: "", //刷新后的验证码,
        verification:''
      }
    },
     mounted() {
    this.flag = !this.flag;
  },
  methods: {

    //电话验证
    pertelElt() {
      if (this.tel && !/^[1]([3-9])[0-9]{9}$/.test(this.tel)) {
        alert('请输入正确的号码！')
        this.tel=''
      }
      // } else(/^[1]([3-9])[0-9]{9}$/.test(this.tel)) {
      //   //向后台传递数据
        
      // }
    },

    //邮箱验证
    permailElt(){
      if(this.mail && !/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.mail)){
        alert('请输入正确的邮箱！')
      }
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
    perverElt() {
      if (this.verification && this.verification != this.code) {
        alert("验证码错误！")
        this.verification=''
      } else if (this.verification == this.code) {
        this.verspan = "";
      }
    },
    //提交建议按钮
    submit(){
      if(this.desc==0 && this.tel==0 &&this.verification==0)
      {
        alert('请填入相关内容！')
      }else{
        //向后台发送数据
        axios({
          url:'/API/yichun/question',
          method:'post',
          data:{
            name:this.name,
            phone:this.tel,
            email:this.mail,
            content:this.desc
          },
          transformRequest: [function (data) {
            data = qs.stringify(data);
            return data;
          }],
        }).then(res=>{
          console.log(res)
          // alert('提交成功！');
          this.$router.push('/jyxcsuccess') //建议成功
        }).catch(err=>{
          console.log(err)
        })
        
      }
    }
  }
}
</script>

<style scoped>
.jianyanxc{
    background-color:#F6F9FA;
}
.main{
  width: 60%;
  margin: 3rem auto;
  background-color: #FFFFFF;
}
.title{
    width: 100%;
    text-align: center;
    background-color: #3386D7;
    font-size: 1.5rem;
    color: white;
    letter-spacing: 1.5rem;
    padding: 0.3rem;
}
.content{
    width: 100%;
    color: black;
    padding-bottom: 1rem;
}
.formall{
  width: 80%;
  margin: 0 auto;
}
.form{
    width: 100%;
    background-color: #FFFFFF;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.form-1,.form-2,.form-3,.form-4{
  width: 100%;
  margin-top: 1rem;
  /* display: flex;
  flex-wrap: wrap; */
  /* justify-content: center; */
  /* align-items: center; */
}
span{
  display: inline-block;
  /* width: 10vw; */
  min-width: 10vw;
  text-align: right;
  margin-left: 10px;
  margin-right:0.5rem;
  font-size: 1rem;
  color: black;
  letter-spacing: 0.1rem;
}
input{
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
  line-height: 2rem;
}
.form-1 input{
  width: 60%;
}
.form-2 input{
  width: 60%;
}
/* .form-2{
  display: flex;
  justify-content: space-between;
} */
/* .form-2-son{
  width: 50%;
} */
.form-2 span::before{
  content:"*";
  color:red;
}
.form-3 span::before{
  content:"*";
  color:red;
}
.form-4 span::before{
  content:"*";
  color:red;
}
/* .form-2-son input{
  width: 70%;
} */
textarea{
  width: 60%;
  border-radius: 5px;
  outline: none;
}
.form-3 span{
  vertical-align: top;
}
.form-4 input{
  width: 40%;
}
.btn{
  width: 100%;
  display: flex;
  justify-content: center;
}

button{
  width: 15vw;
  padding: 0.2rem;
  font-size: 1rem;
  color: white;
  background-color: #3386D7;
  outline: none;
  border: 0;
}
/* 验证码框 */
.code{
  width: 6rem;
  /* min-width: 6vw; */
  /* height: 2vh; */
  display: inline-block; 
   vertical-align: top;
  margin-left: 1rem;
}
/* .form-4{
  display: flex;
} */

/* @media screen and(min-width:750px){
  span{
    width: 0;
  }
} */
</style>
