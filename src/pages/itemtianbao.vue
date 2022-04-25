<template>
    <div class="itemtb">
        <PageHeader></PageHeader>
        <div class="main">
            <div class="title">项目填报</div>
            <div class="content">
              <div class="form">  
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="135px" class="demo-ruleForm">
                  <div class="form-1"> 
                    <el-form-item label="项目名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-2">           
                            <el-form-item label="项目类型" prop="types">
                                <el-select v-model="ruleForm.type" placeholder="请选择项目类型">
                                    <el-option label="市级重大" value="shanghai"></el-option>
                                    <el-option label="省级重大" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="所在地区" prop="region">
                                <el-select v-model="ruleForm.region" placeholder="请选择所在地区">
                                    <el-option label="市级重大" value="shanghai"></el-option>
                                    <el-option label="省级重大" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>                  
                            <el-form-item label="所属产业" prop="product">
                              <el-select v-model="ruleForm.product" placeholder="请选择所属产业">
                                <el-option label="市级重大" value="shanghai"></el-option>
                                <el-option label="省级重大" value="beijing"></el-option>
                              </el-select>
                            </el-form-item>
                  </div>
                  <div class="form-3">                  
                    <el-form-item label="申报人" prop="pname">
                        <el-input v-model="ruleForm.pname"></el-input>
                    </el-form-item>
                     <el-form-item label="总投资" prop="all">
                        <el-input v-model="ruleForm.all"></el-input>
                    </el-form-item>
                    <el-form-item label="年度计划投资" prop="yearplan">
                        <el-input v-model="ruleForm.yearplan"></el-input>
                    </el-form-item>
                  </div>

                  <div class="form-4">
                    <el-form-item label="累计完成投资" prop="total">
                      <el-input v-model="ruleForm.total"></el-input>
                    </el-form-item>
                     <el-form-item label="年度累计完成投资" prop="yeartotal">
                        <el-input v-model="ruleForm.yeartotal"></el-input>
                    </el-form-item>
                      <!-- <div class="form-4-item">
                          <el-form-item label="累计完成投资" prop="total">
                        <el-input v-model="ruleForm.total"></el-input>
                    </el-form-item>
                      </div>
                      <div class="form-4-item">
                          <el-form-item label="年度累计完成投资" prop="yeartotal">
                        <el-input v-model="ruleForm.yeartotal"></el-input>
                    </el-form-item>
                      </div> -->
                  </div>

                  <div class="form-5">
                    <el-form-item label="项目简介" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc" :rows="4"></el-input>
                    </el-form-item>
                  </div>
                  <!-- <div class="submit">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                  </div> -->
                  <div class="submit">
                    <button type="submit" @click="submitForm('ruleForm')">提交</button>
                  </div>
                </el-form>
                
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
import axios from 'axios';
export default{
    name:'itemtb',
    components:{
        PageHeader,
        PageFooter,
    },
    data() {
      return {
        ruleForm: {
          name: '',
          pname:'',
          type: '',
          region:'',
          product:'',
          all:'',
          yearplan:'',
          total:'',
          yeartotal:'',
          delivery: false,
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
            { min: 3, max: 30, message: '长度在 3 到 30个字符', trigger: 'blur' }
          ],
          type:[
            {required:true,message:'请选择项目类型',trigger:'change'}
          ],
          product:[
            {required:true,message:'请选择所属产业',trigger:'change'}
          ],
          region: [
            { required: true, message: '请选择所在区域', trigger: 'change' }
          ],
          pname:[
            {required:true,message:'请填写申报人姓名',trigger:'blur'}
          ],
          all:[
            {required:true,message:'请填写总投资额',trigger: 'blur'}
          ],
          yearplan:[
            {required:true,message:'请填写年度计划投资',trigger: 'blur'}
          ],
          total:[
            {required:true,message:'请填写累计完成投资',trigger: 'blur'}
          ],
          yeartotal:[
            {required:true,message:'请填写年度累计完成投资',trigger: 'blur'}
          ],
          desc: [
            { required: true, message: '请填写项目简介', trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
      submitForm(formName) {
        if(!this.ruleForm.name&&!this.pname){
          alert('请填写信息')
        }else{
          //发送请求
          axios({
            url:'/API/yichun/project',
            method:'post',
            data:{
              p_name:this.ruleForm.name,
              p_type:this.ruleForm.type,
              p_location:this.ruleForm.region,
              p_industry:this.ruleForm.product,
              informant:this.ruleForm.pname,
              total_investment:this.ruleForm.all,
              annual_planned_investment:this.ruleForm.yearplan,
              complted_investment:this.ruleForm.total,
              annual_complted_investment:this.ruleForm.yeartotal,
              p_introduction:this.ruleForm.desc,
            },
            transformRequest: [function (data) {
            data = qs.stringify(data);
            return data;
          }],
          }).then(res =>{
            console.log(res)
            this.$router.push('/tjsuccess')
            // this.ruleForm = res;
          }).catch(err =>{
            console.log(err);
          })
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        // this.$router.puth("/itemtb/tjsuccess")
      }
    }
}
</script>

<style scoped>
.itemtb{
  background-color: #F6F9FA;
}
.main{
  width: 70vw;
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
.form{
    width: 70vw;
    background-color: #FFFFFF;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
}
.form-1{
    width: 60vw;
}
.form-2{
    width: 60vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.form-3{
    width: 60vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.form-4{
    width: 60vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.form-5{
  width: 100%;
}
.submit{
  width: 100%;
  display: flex;
  justify-content: center;
}
.form-4-item{
  width: 30rem;
}
.submit button{
  width: 15vw;
  /* height: 3vh; */
  font-size: 1.2rem;
  /* letter-spacing: 1.5rem; */
  color: white;
  background-color:#3386D7;
  border: none;
  border-radius: 5px;
  text-align:center;
  outline: none;
  cursor: pointer;
}
@media screen and (max-width: 450px) {
  .main{
    width: 100vw;
  }
  .form{
    width: 100vw;
    display: block;
  }
  .form-1,.form-2,.form-3,.form-4,.form-5{
    width: 90vw;
  }
  .submit button{
    width: 20vw;
  }
}
</style>