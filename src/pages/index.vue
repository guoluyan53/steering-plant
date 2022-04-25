<template>
  <div class="index">
    <PageHeader></PageHeader>
    <div class="main">
    <!-- 项目资讯 -->
      <div class="xmzx">
        <div class="part-1">
            <div class="title-1">
                <div class="t-left">
                    <div class="img-left img1"></div>
                    <div class="text-left">项目资讯</div>
                </div>
                <div class="t-right">
                    <div class="btn-right">
                        <button class="btn-r-2" @click="more1">更多&gt;</button>
                    </div>
                </div>
            </div>
            <div class="content-1">
                <carousel></carousel>
            </div>
            <!-- <a @click="a">
            <div class="info">
                <div class="info-box">
                    <div class="img-info"><a-icon type="form" style="font-size:2.5rem;color:white;"/></div>
                    <div class="text-info">项目填报</div>
                </div>
            </div>
            </a> -->
        </div>
      </div>
    <!-- 重点项目 -->
      <div class="zdxm">
        <div class="part-3">
             <div class="title-1">
                <div class="t-left">
                    <div class="img-left img3"></div>
                    <div class="text-left">重点项目</div>
                </div>
            </div>
            <div class="content-3">
                <div class="content-part3">
                    <div class="top-title">
                        <div class="t-left3">精品成果展示</div>
                        <div class="t-right3" @click="more3_1">&rarr;</div>
                    </div>
                    <div class="bottom-text3">
                        <li v-for="item in itemlist" :key="item.id">
                            <a @click="to_article_content_production('Major_Project',item.id)">{{item.project_name}}</a></li>
                    </div>
                </div>
                <div class="content-part3">
                    <div class="top-title">
                        <div class="t-left3">进展公示</div>
                        <div class="t-right3" @click="more3_2">&rarr;</div>
                    </div>
                    <div class="bottom-text3">
                        <div class="text3-part" v-for="item in jinzhanlist.slice(0,2)" :key="item.id">
                            <a @click="to_article_content_progress('Major_Project',item.id)">{{item.title}}</a>
                        </div>
                        
                    </div>
                </div>
                <div class="content-part3">
                    <div class="top-title">
                        <div class="t-left3">督导推进</div>
                        <div class="t-right3" @click="more3_3">&rarr;</div>
                    </div>
                    <div class="bottom-text3">
                        <div class="text3-part" @click="dudaotuijin" v-for="item in dudaotuijin.slice(0,2)" :key="item.id">
                            <a @click="to_article_content_supervision('major_project',item.id)">{{item.title}}</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    <!-- 视频调阅 -->
  <div class="spdy">
    <div class="part-4">
            <div class="title-1">
                <div class="t-left">
                    <div class="img-left img4"></div>
                    <div class="text-left">视频调阅</div>
                </div>
                <div class="t-right">
                    <div class="btn-right">
                        <button class="btn-r-1" @click="change"><a-icon type="sync" />换一换</button>
                        <button class="btn-r-2" @click="more4">更多></button>
                    </div>
                </div>
            </div>
            <div class="content-1">
                <div class="content-part">
                    <div class="top-img"></div>
                    <div class="bottom-text">
                        <h2>这是视频</h2>
                    </div>
                </div>
                <div class="content-part">
                    <div class="top-img"></div>
                    <div class="bottom-text">
                        <h2>这是视频</h2>
                    </div>
                </div>
                <div class="content-part">
                    <div class="top-img"></div>
                    <div class="bottom-text">
                        <h2>这是视频</h2>
                    </div>
                </div>
            </div>
    </div>
  </div>
    <!-- 政务公开 -->
      <div class="zwgk">
        <div class="part-5">
            <div class="title-1">
                <div class="t-left">
                    <div class="img-left img5"></div>
                    <div class="text-left">政务公开</div>
                </div>
                <div class="t-right">
                    <div class="btn-right">
                            
                            <div class="choose">
                                政策行业：
                            <select placeholder="不限" class="select">
                                <option value="a">不限</option>
                                <option value="b">新一代信息技术</option>
                                <option value="c">高端装备</option>
                                <option value="d">新能源新材料</option>
                                <option value="e">现代海洋</option>
                                <option value="f">医养健康</option>
                                <option value="g">高端化工</option>
                                <option value="h">现代高效农业</option>
                                <option value="i">文化创意</option>
                                <option value="j">精品旅游</option>
                                <option value="k">现代金融服务</option>
                            </select>
                            </div>
                            <div>
                            政策级别：
                            <select placeholder="不限" class="select">
                                <!-- @focus="handleFocus" @blur="handleBlur" @change="handleChange" -->
                                <option value="every">不限</option>
                                <option value="nation">国家级</option>
                                <option value="province">省级</option>
                                <option value="city">市级</option>
                            </select>
                            </div>
                            <div>
                                <input type="search" class="search" >
                            <!-- <a-select show-search :value="value" placeholder="政策关键字" style="width: 7rem;margin-left:1rem" :default-active-first-option="false" 
                                    :show-arrow="false" :filter-option="false" :not-found-content="null" >
                                     @search="handleSearch" @change="handleChange"
                                <a-select-option v-for="d in data" :key="d.value">
                                    {{ d.text }}
                                </a-select-option>
                            </a-select> -->
                            
                            <button style="background-color:#1A5288" class="button" @click="zhengcesearch()">搜索</button>
                            </div>
                    </div>
                </div>
            </div>
            <div class="content-5">
                <div class="part5">
                    <div class="left-title5">
                        <div class="title5-img"><img src="../assets/images/index/thzw.png" style="width:2rem" alt=""></div>
                        <div class="title5-text">图画政务</div>
                    </div>
                    <div class="right-content5">
                        <div class="part-content5" v-for="item in imgzhengwu" :key="item.id">
                            <img class="part-content5-img" :src="item.src">
                            <div class="part-content5-text" @click="to_article_imgzhengwu('Open_Goverment',item.id)">{{item.title}}</div>
                        </div>
                    </div>
                    <div class="more5" @click="more5_1">更多</div>
                </div>
            </div>

            <div class="content-5">
                <div class="part5">
                    <div class="left-title5">
                        <div class="title5-img"><img src="../assets/images/index/tpsc.png" style="width:2rem" alt=""></div>
                        <div class="title5-text">最新政务</div>
                    </div>
                    <div class="right-content5-3">
                        <div class="part-content5-3">
                            <div class="content-5-3-link" v-for="item in latestzhengwu.slice(0,3)" :key="item.id">
                                <div class="content-5-3-text" @click="to_article_newzhengwu('Open_Goverment',item.id)"><a>{{item.title}}</a></div>
                                <div class="content-5-3-date">{{item.issue_time}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="more5" @click="more5_3">更多</div>
                </div>
            </div>
        </div>
      </div>
    <!-- 决策/绩效评估 -->
      <div class="pg">
        <div class="part-7">
            <div class="title-1">
                <div class="t-left">
                    <div class="img-left img6"></div>
                    <div class="text-left">决策/绩效评估</div>
                </div>
            </div>
            <div class="content-7">
                <div class="content7-part">
                    <div class="left-title7">
                        <div class="title7-img1"></div>
                        <div class="title7-text">决策评估</div>
                    </div>
                    <div class="right-text7">项目决策是对某项复杂的一次性的生产和工程项目进行投资决策，决策评估商对项目目标、性质、
                        边界、方针、工量、时限、标准、责任、权益等方面进行评估。
                    </div>
                </div>
                <div class="content7-part">
                    <div class="left-title7">
                        <div class="title7-img2"></div>
                        <div class="title7-text">绩效评估</div>
                    </div>
                    <div class="right-text7">绩效评估是根据效率、能力、服务质量、公共责任和公众满意程度
                        等方面的分析与判断，对政府部门管理过程中投入、产出、中期成果和最终成果所反映的绩效进行评定。
                    </div>
                </div>
            </div>
        </div>
      </div>
    <!-- 问题征解 -->
       <div class="wtzj">
        <div class="part-6">
            <div class="title-1">
                <div class="t-left">
                    <div class="img-left img7"></div>
                    <div class="text-left-wtzj">问题征解</div>
                </div>
                <div class="t-right">
                    <div class="btn-right">
                        <button class="btn-r-1" @click="myquestion">我的问题</button>
                        <button class="btn-r-2" @click="jianyan">建言献策</button>
                    </div>
                </div>
            </div>
            <div class="content-6">
                <div class="wtfk">
                    <div class="wtfk-title">问题反馈</div>
                    <div class="wtfk-data">
                        <div class="data-month same">30天处理190条</div>
                        <div class="data-year same">年度处理300条</div>
                        <div class="data-all same">总计处理1000条</div>
                    </div>
                    <div class="wtfk-top">
                        <div class="li-number same1" >序号</div>
                        <div class="li-name same1">提问企业</div>
                        <div class="li-question same1">问题主题</div>
                        <div class="li-time same1">提问时间</div>
                        <div class="li-state same1">办理状态</div>
                    </div>
                    <rollBox></rollBox>
                </div>
                <div class="zjdt">
                    <div class="zjdt-title">
                        <div>征解动态</div>
                        <div class="zjdt-more" @click="zjdt_more"><a>&rarr;</a></div>
                    </div>
                    <div class="zjdt-main">
                        <div class="zjdt-main-part" v-for="item in zhengjiedongtai.slice(0,2)" :key="item.id">
                            <div class="zjdt-main-part-title" @click="question_article_content('Question_Trends',item.id)">{{item.title}}</div>
                            <img class="zjdt-main-part-img" :src="item.src">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import {imgzhengwu} from "@/assets/js/MockData";
import Aplayer from 'vue-aplayer'
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import rollBox from "@/components/rollBox";
import carousel from "@/components/carousel";
export default {
  name: 'index',
  components:{
      PageHeader,
      PageFooter,
      rollBox,
      carousel,
      'aplayer':Aplayer
  },
  props: {
    msg: String,
    // ArticleList_props_Data: Object,
  },
  data(){
      return{

        //重点项目
     
            //精品成果展示首页三条数据
            itemlist:[],
            //进展公示首页数据
            jinzhanlist:[],  //现在传的是列表的内容
            //督导推进首页数据两条
            dudaotuijin:[],

        //政务公开
            //图画政策首页数据两条
            imgzhengwu:[],
            //图画政策首页三条数据
            latestzhengwu:[],

        //问题征解
            //征解动态首页数据展示两条
            zhengjiedongtai:[],

          //换一换数据
          qList:[],
          newList:[],  //处理后的list
          timeStart:0,  //截取第几组的开始参数
          timeEnd:1,  //截取第几组结束参数
          group:0,  //默认为0组
          num:3,  //一次展示list的数量
          clickNum:0,  //点击的次数
        
      }
  },

  created(){
    this.get_production_show_data();
    this.get_progress_data();
    this.get_supervision();
    this.get_imgzhengwu_data();
    this.get_latest_data();
    this.get_zhengjie_data();
  },
  methods: {
    //精品成果展示首页
    get_production_show_data(){
        // console.log("精品成果展示")
        //后台请求
     axios({
        url: `/API/yichun/project/list`, // 后端的接口地址
        method: "get",
        params: {
          
        },
        transformRequest: [
          function (data) {
            data = qs.stringify(data);
            return data;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        dataType: "json",
      })
        .then((res) => {
          console.log("精品成果展示连接成功"); // 这里多打印一句提示，只是为了更直观一点
          console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
          this.itemlist = res.data.data
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        });
    },
    //进展公示首页
    get_progress_data(){

        // console.log('进展公示');
        axios({
        url: `/API/yichun/policy/news/jinzhangongshi`, // 后端的接口地址
        method: "get",
        params: {
          
        },
        transformRequest: [
          function (data) {
            data = qs.stringify(data);
            return data;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        dataType: "json",
      })
        .then((res) => {
          console.log("进展公示连接成功"); // 这里多打印一句提示，只是为了更直观一点
          console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
          this.jinzhanlist = res.data.datas
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        });
    },
    //督导推进首页展示两条数据
    get_supervision(){
        // console.log('督导推进');
        axios({
        url: `/API/yichun/policy/news/dudaotuijin`, // 后端的接口地址
        method: "get",
        params: {
          
        },
        transformRequest: [
          function (data) {
            data = qs.stringify(data);
            return data;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        dataType: "json",
      })
        .then((res) => {
          console.log("督导推进连接成功"); // 这里多打印一句提示，只是为了更直观一点
          console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
          this.dudaotuijin = res.data.datas
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        });
    },

    //政务公开--图画政务展示两条数据
    get_imgzhengwu_data(){
        // console.log('图画政务');
        axios({
        url: `/API/yichun/policy/pictures`, // 后端的接口地址
        method: "get",
        params: {
          
        },
        transformRequest: [
          function (data) {
            data = qs.stringify(data);
            return data;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        dataType: "json",
      })
        .then((res) => {
          console.log("图画政策连接成功"); // 这里多打印一句提示，只是为了更直观一点
          console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
        //   this.pro_img_src = res.data.src;
        //   this.pro_img_title = res.data.pictures
        this.imgzhengwu = res.data
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        })
    },

    //最新政务首页展示三条数据
    get_latest_data()
    {
        // console.log('最新政务');
        axios({
        url: `/API/yichun/policy/news/feature`, // 后端的接口地址
        method: "get",
        params: {
          
        },
        transformRequest: [
          function (data) {
            data = qs.stringify(data);
            return data;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        dataType: "json",
      })
        .then((res) => {
          console.log("最新政务连接成功"); // 这里多打印一句提示，只是为了更直观一点
          console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
          this.latestzhengwu = res.data.datas
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        })
    },

    //征解动态首页展示两条数据
    get_zhengjie_data()
    {
        // console.log('征解动态');
        axios({
        url: `/API/yichun/question/news`, // 后端的接口地址
        method: "get",
        params: {
        //   page:1,
        },
        transformRequest: [
          function (data) {
            data = qs.stringify(data);
            return data;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        dataType: "json",
      })
        .then((res) => {
          console.log("征解动态连接成功"); // 这里多打印一句提示，只是为了更直观一点
          console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
          this.zhengjiedongtai = res.data.datas
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        })
    },

    //轮播图跳到详情


    //重点项目---进展公示
    major_project(){
        this.$router.push('/index/major_project')
    },

    //重点项目-精品成果展示-跳到详情页
    to_article_content_production(article_category,article_id){
        this.$router.push({
            path: `/index/major_project/production_show/article_content`,
            // path: `${this.ArticleList_props_Data.current_path}/article_content`,
            query: { article_category: article_category, article_id: article_id },
        })
    },
    //重点项目-进展公示-跳到详情页
    to_article_content_progress(article_category,article_id){
        this.$router.push({
            path: `/index/major_project/progress_show/article_content`,
            // path: `${this.ArticleList_props_Data.current_path}/article_content`,
            query: { article_category: article_category, article_id: article_id },
    })
    },
    //重点项目-督导推进-跳到详情页
    to_article_content_supervision(article_category,article_id){
         this.$router.push({
            path: `/index/major_project/supervision/article_content`,
            // path: `${this.ArticleList_props_Data.current_path}/article_content`,
            query: { article_category: article_category, article_id: article_id },
    })
    },
    //政务公开-图画政务跳到详情
    to_article_imgzhengwu(article_category,article_id){
        this.$router.push({
            path: `/index/open_goverment/picture_policy/article_content`,
            // path: `${this.ArticleList_props_Data.current_path}/article_content`,
            query: { article_category: article_category, article_id: article_id },
    })
    },
    //政务公开-最新政务详情
    to_article_newzhengwu(article_category,article_id){
        this.$router.push({
            path: `/index/open_goverment/latest_goverment_affairs/article_content`,
            // path: `${this.ArticleList_props_Data.current_path}/article_content`,
            query: { article_category: article_category, article_id: article_id },
    })
    },
    question_article_content(article_category,article_id){
        this.$router.push({
            path: `/index/question_trends/article_content`,
            // path: `${this.ArticleList_props_Data.current_path}/article_content`,
            query: { article_category: article_category, article_id: article_id },
    })
    },

//换一换-----视频调阅
    change(){
        if(this.qList.length > 4 && this.qList.length > this.num){
            //点击的时候获取分为几组
            this.listlen();
            //每点击一次记录点击次数
            this.autoIncre();
            this.clear();
            this.renderR();
        }
    },
    //计算数据的长度，共分为几组，如果不能整除则加1
    listlen(){
        var len = this.qList.length;
        this.group = len/this.num;
        if(len % this.num!=0){
            this.group = parseInt(this.group) +1;
        }
    },
    //计算将点击次数开始截取的参数清空，如果点击此时大于当前数据的组数，则重新开始计数。
    claer(){
        if(this.clickNum > this.group - 1){
            this.timeStart = 0;
            this.timeEnd = 1;
            this.clickNum = 0;
        }
    },
    //每点击一次，记录次数
    autoIncre(){
        this.clickNum++;
        this.timeStart++;
        this.timeEnd++;
    },
    //截取当前每组的数据
    renderR(){
        this.newList = this.qList.slice(
            this.num * this.timeStart,
            this.num * this.timeEnd
        );
        console.log(this.newList)
    },
    //获取总数据-----axios
    created(){
        let params = {
            keyword:""
        };
        this.$http("get","/XXX/XXX",params)
         .then(res =>{
             var data = res.data.data;
             this.qList = data;
             this.renderR();
         })
         .catch(err=>{

         });
    },


// 更多的点击事件
    // 项目资讯
    more1(){
        this.$router.push('/index/project_information')
    },
    //重点项目
    more3_1(){
        this.$router.push('/index/major_project/production_show')
    },
    more3_2(){
        this.$router.push('/index/major_project/progress_show')
    },
    more3_3(){
        this.$router.push('/index/major_project/supervision')
    },
    //视频调阅
    more4(){
        this.$router.push('/index/video')
    },
    //政务公开
    more5_1(){
        this.$router.push('/index/open_goverment/picture_policy')
    },
    more5_2(){
        this.$router.push('/daylisten')
    },
    more5_3(){
        this.$router.push('/index/open_goverment/latest_goverment_affairs')
    },
    //问题征解
    myquestion(){
        this.$router.push('/signup/Login/perLogin')
    },
    jianyan(){
        this.$router.push('/jianyanxc')
    },
    zjdt_more(){
        this.$router.push('/index/question_trends')
    },
    //政策搜索
    zhengcesearch()
    {
        this.$router.push('/index/zhengce')
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    /* width:100vw; */
    margin: 0 auto;
    /* padding-bottom: 3rem; */
}
/*part-----------------------1 */
.xmzx{
    padding: 2rem;
    /* width: 100vw; */
    padding-left: 15vw;
    background:linear-gradient(360deg,#cce9fc,#ffffff);
}
.part-1{
    width: 70vw;
    /* height: 43rem; */
    /* margin-top: 2rem; */
    /* background:linear-gradient(90deg,#cce9fc,#ffffff); */
}
.title-1{
    width: 100%;
    /* height: 3rem; */
}
.t-left{
    width: auto;
    /* height: 3rem; */
    float: left;
    display: flex;
    justify-content: center; 
    align-items: center; 
}
.img-left{
    width: 1.2rem;
    height: 1.2rem;
    float: left;
}
.text-left{
    width: auto;
    float: left;
    font-size: 1rem;
    margin-left: 0.5rem;
    letter-spacing: 0.3rem;
    color: black;
}
.t-right{
    width: auto;
    /* height: 3rem; */
    float: right;
    display: flex;
    justify-content: center; 
    align-items: center; 
}
/* .btn-right{
    width: auto;
} */
.btn-r-1{
    float: left;
    font-size: 0.7rem;
    border:1px solid gray;
    border-radius: 5px;
    background-color:white;
    outline: none;  
    cursor: pointer;
}
.btn-r-2{
    float: left;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border:1px solid gray;
    border-radius: 5px;
    background-color:white;
    outline: none; 
    cursor: pointer;
}
.content-1{
    width: 100%;
    /* height: 35rem; */
    display: flex;
    justify-content: space-between;
}
.content-part{
    height: 17rem;
    width: 30%;
}
.top-img{
    width: 100%;
    height: 75%;
    background-color: green;
}
.bottom-text{
    width: 100%;
    height: 25%;
}
/* h2{
    width: 100%;
    text-align: center;
    padding-top: 0.5rem;
} */
.data{
    float: left;
    margin-left: 1rem;
    font-size: 1rem;
    margin-top: -0.5rem;
    color: grey;
}
.more{
    float: right;
    margin-right: 1rem;
    font-size: 1.5rem;
    margin-top: -1rem;
    cursor: pointer;
    color: grey;
}

.info{
    width: 100%;
    /* height: 4rem; */
    background-color:#3386D7;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}
.info-box{
   /* width: 10rem; */
   padding: 0.3rem 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.img-info{
    width: 2rem;
    display: inline-block;
}
.text-info{
    font-size: 1.2rem;
    color: white;
    display: inline-block;
    margin-left: 1rem;
} 
/* part-------------------------3*/
.zdxm{
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 15vw;
    background: linear-gradient(-150deg,#5a98d6,#ffffff);
}
.part-3{
    /* margin-top: 2rem; */
    width: 70vw;
    /* height: 23rem; */
}
.content-3{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.content-part3{
    /* height: 20rem; */
    width: 30%;
    background-color: #2869A9;
    border: 0.1rem gray solid;
    border-radius: 5px;
}
.top-title{
    width: 100%;
    /* padding: 1rem 0; */
    height: 3rem;
    display: flex;
    justify-content: space-between;
}
.t-left3{
    font-size: 1rem;
    line-height: 3rem;
    color: white;
    margin-left: 1rem;
}
.t-right3{
    font-size: 2rem;
    color: white;
    line-height: 3rem;
    margin-right: 1rem;
    cursor: pointer;
}
.bottom-text3{
    width: 90%;
    padding-bottom: 2rem;
    margin: 0 auto;
    font-size: 0.8rem;
    /* line-height: 1rem; */
    color: white;
    margin-top: 1rem;
}
.bottom-text3 a{
    color: white;
    /* font-size: 1.2rem; */
}
.bottom-text3 a:hover{
    font-weight: 600;
}
.bottom-text3 li{
    margin-top: 1rem;
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    /* line-height: 8rem; */
}
.text3-part{
    font-size: 0.8rem;
}
.text3-part a{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.text3-part a:hover{
    font-weight: 700;
}
.text3-part:nth-of-type(2){
    margin-top: 2rem;
}
.text3-part:nth-of-type(2){
    margin-top:2rem ;
}
.text{
    /* font-size: 1rem; */
    color: rgb(216, 213, 213);
}
.a3:hover{
    font-weight: 700;
}
/*part--------------------------4 */
.spdy{
    padding-top:2rem;
    padding-left: 15vw;
    background: linear-gradient(90deg,#cce9fc,#ffffff);
}
.part-4{
    /* height: 20rem; */
    width: 70vw;
    margin-top: 2rem;
}
.part-4 h2{
    width: 80%;
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
}
/*part------------------------------5 政务公开*/
.zwgk{
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 15vw;
    background:#0384c5;
}
.part-5{
    /* margin-top: 2rem; */
    width: 70vw;
}
.part5{
    width: 100%;
    background-color:#F6F9FA;
    margin-top: 1rem;
    /* height: 12rem; */
    display: flex;
    align-items: center;
}
.left-title5{
    /* width:3rem; */
    padding: 2rem 0.5rem;
    background-color: #1A5288;
    /* height: 12rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* float: left; */
}
.title5-img{
    width: 2rem;
    /* height: 2rem; */
}

.title5-text{
    width: 1.2rem;
    font-size: 1.2rem;
    writing-mode: sideways-lr;
    letter-spacing: 0.5rem;
    margin-top: 0.5rem;
    color: white;
}
.btn-right{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
/* .choose{
    font-size: 1.2rem;
} */
.search{
    outline: none;
    border: 1px solid black;
    border-radius: 3px;
    margin-right: 0.2rem;
}
.select{
    /* font-size: 0.7rem; */
    margin-right: 1rem;
}
.button{
    outline: none;
    border: none;
    color: white;
    border-radius: 3px;
}
.right-content5{
    width: 85%;
    /* float: left; */
    display: flex;
    /* background-color: aqua; */
    justify-content: space-between;
    align-items: center;
}
.part-content5{
    width: 45%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
}
.part-content5-img{
    width: 15rem;
    height: 10rem;
    background-color: wheat;
}
.part-content5-text{
    width: 9rem;
    font-size: 0.8rem;
    padding: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* line-height: calc(5px + 1.25rem); */
}
.part-content5-text:hover{
    cursor: pointer;
    text-decoration: underline;
    font-weight: 600;
}
.more5{
    cursor: pointer;
    align-self:flex-start;
    margin-left: 1rem;
    margin-top: 0.5rem;
    font-size: 0.8rem;
}
.right-content5-2{
    width: 85%;
    float: left;
    padding-left: 2rem; 
    /* padding-top: 5px; */
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
}
audio{
    width: 85%;
    /* height: 20px; */
    height: 100%;
    outline: none;
}
.audio{
    /* width: 60%; */
    height: 15px;
    /* padding-top: 10px; */
}
.right-content5-2 ul{
    padding: 0;
    margin: 0;
}
.right-content5-2 ul li{
    list-style: none;
    font-size: 1rem;
    margin-top: 1rem;
    width: 40rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.right-content5-3{
    width: 85%;
    /* height: 11rem; */
    float: left;
    display: flex;
    justify-content: center;
}
.part-content5-3{
    width: 100%;
    padding-left:10px ;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* .part-content5-3:nth-of-type(2){
    border-left: 1px solid gray;
    border-right: 1px solid gray;
} */
.content-5-3-link{
    width: 100%;
    text-align: center;
    /* background-color: #0384c5; */
    padding-left: 0.5rem;
}
.content-5-3-link:nth-of-type(2){
    /* font-size: 1rem; */
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    /* line-height: 1.5rem; */
}
.content-5-3-date{
    font-size: 0.8rem;
    color: grey;
    margin-top: 1rem;
}
.content-5-3-text a{
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.content-5-3-text a:hover{
    text-decoration: underline;
    font-weight: 700;
}

/*part---------------------------------6问题征解 */
.wtzj{
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 15vw;
    background: #1a5288;
}
.part-6{
    /* margin-top: 2rem; */
    width: 70vw;
}
.text-left-wtzj{
    width: auto;
    float: left;
    font-size: 1rem;
    margin-left: 0.5rem;
    letter-spacing: 0.3rem;
    color:#ffffff;
}
.content-6{
    width: 100%;
    /* height: 30rem; */
    background-color: #2869A9;
    display: flex;
    justify-content: space-between;
}
    /*滚榜 */

.wtfk{
    width: 60%;
    /* height: 30rem; */
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.wtfk-title{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    color: white;
    letter-spacing: 0.4rem;
    font-size: 1rem;
    text-align: center;
}
.wtfk-data{
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.8rem;
    background-color: #3386D7;
    color: white;
    display: flex;
    justify-content: space-between;
}
.same{
    width: 33.3%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.data-year{
    border-left: 1px solid rgb(223, 220, 220);
    border-right: 1px solid  rgb(223, 220, 220);
}
.wtfk-top{
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: white;
    font-size: 0.8rem;
}
.same1{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.li-number{
    width: 8%;
    background-color:#3386D7;
}
.li-name{
    width: 26%;
    margin-left: 1%;
    background-color:#3386D7;
}
.li-question{
    width: 29%;
    margin-left: 1%;
    background-color:#3386D7;
}
.li-time{
    width: 19%;
    margin-left: 1%;
    background-color: #3386D7;
}
.li-state{
    width: 14%;
    margin-left: 1%;
    background-color:#3386D7;
}
    /**滚榜结束 */
.zjdt{
    width: 40%;
    padding-top: 1rem;
    padding-left: 4rem;
    padding-right: 2rem;
}
.zjdt-title{
    width: 100%;
    height: 3.3rem;
    line-height: 3.3rem;
    color: white;
    letter-spacing: 0.4rem;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
}
.zjdt-more a{
    color: white;
    font-size: 2rem;
}
.zjdt-main{
    width: 100%;
    height: 24rem;
    background-color:#1A5288;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.zjdt-main-part{
    width: 60%;
    /* height: 10rem; */
    margin-left: 20%;
}
.zjdt-main-part:nth-of-type(2){
    margin-top: 1rem;
}
.zjdt-main-part-title{
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    color: white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.zjdt-main-part-title:hover{
    cursor: pointer;
    text-decoration: underline;
    font-weight: 600;
}
.zjdt-main-part-img{
    width: 100%;
    height: 8rem;
    /* min-height: 8rem; */
    background-color: yellow;
}
/*part------------------------7决策/绩效评估 */
.pg{
    padding-top: 2rem;
    padding-left: 15vw;
    padding-bottom: 2rem;
    background: #f0f9ff;
}
.part-7{
    /* margin-top: 2rem; */
    width: 70vw;
}
.content-7{
    width: 100%;
    /* height: 20rem; */
    padding-left:3rem;
    padding-right: 3rem;
    display: flex;
    justify-content: space-between;
}
.content7-part{
    width: 45%;
    /* height: 20rem; */
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: 1px 1px gray;
    border: 1px solid gray;
}

.left-title7{
    width: 15%;
    height: 100%;
}
.title7-img1{
    width: 2rem;
    height: 2rem;
    background: url("../assets/images/index/jzpg.png");
    background-size: 100% 100%;
}
.title7-img2{
    width: 2rem;
    height: 2rem;
    background: url("../assets/images/index/jx.png");
    background-size: 100% 100%;
}
.title7-text{
    width: 3rem;
    writing-mode: sideways-lr;
    font-size: 1.2rem;
    letter-spacing: 1rem;
    margin-top: 1rem;
    text-align: center;
    /* vertical-align: middle; */
    color: rgb(8, 118, 207);
}
.right-text7{
    width: 80%;
    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis;
    line-clamp: 6;
    padding-top: 1rem;
    font-size: 1rem;
    text-indent: 2.4rem;
    letter-spacing: 0.2rem;
}

/*标题小图标 */
.img1{
    background:url(../assets/images/index/xmzx.png);
    background-size: 100% 100%;
}
.img3{
    background: url(../assets/images/index/zdxm.png);
    background-size: 100% 100%;
}
.img4{
    background: url(../assets/images/index/spdy.png);
    background-size: 100% 100%;
}
.img5{
    background: url(../assets/images/index/zwgk.png);
    background-size: 100% 100%;
}
.img6{
    background: url(../assets/images/index/jxpg.png);
    background-size: 100% 100%;
}
.img7{
    background: url(../assets/images/index/wtzj.png);
    background-size: 100% 100%;
}

@media screen and (max-width: 750px){
    .bottom-text3 a li{
        font-size: 0.5rem;
        /* line-height: 1rem; */
    }
   
}
@media screen and (max-width: 510px){
    .zjdt-main-part-img{
        height: 6rem;
    }
    .zjdt-main-part-title{
        font-size: 0.5rem;
    }
    .right-content5-2 ul{
        font-size: 0.5rem;
        /* line-height: 0; */
        margin-top: 0.1rem;
    }
    audio{
        width: 70%;
    }
    .main{
        width: 95vw;
    }
}
</style>
