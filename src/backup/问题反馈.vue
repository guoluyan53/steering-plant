<template>
  <div class="Project_Information">
    <PageHeader></PageHeader>
    <section>
      <div id="content">
        <a-breadcrumb
          class="contentBreadcrumb"
          :routes="routes"
        >
          <template slot="itemRender" slot-scope="{ route, routes, paths }">
            <!-- {{ obj }} -->
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.breadcrumbName }}
            </span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">
              {{ route.breadcrumbName }}
            </router-link>
          </template>
        </a-breadcrumb>

        <!-- {{ obj }} -->

        <div class="contentWrap">
         
          <div class="main-content">
            <div class="content-box" v-for="item in question_fankui_data" :key="item.q_id">
                <ul>
                    <li class="detail-li">
                        <div class="detail-text-l">项目名称：</div>
                        <div class="detail-text-r">1111</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">问题类型：</div>
                        <div class="detail-text-r">11</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">问题主题：</div>
                        <div class="detail-text-r">11</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">提问人/提问企业：</div>
                        <div class="detail-text-r">11111111</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">承办部门：</div>
                        <div class="detail-text-r">1</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">办理状态：</div>
                        <div class="detail-text-r">1</div>
                    </li>
                </ul>
            </div>
          </div>
        </div>

        
      </div>
    </section>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import { project_article_Data } from "@/assets/js/MockData";
import axios from 'axios';
import Qs from 'qs';
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import ArticleList from "@/components/ArticleList";

export default {
  name: "Question_fankui",
  components: {
    PageHeader,
    PageFooter,
    ArticleList,
  },
  props: {
      question_fankui_data:Object
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      current: 1,
      pageSize: 10,
      total: 500,

      tabPosition: "left",

      ArticleList_props_Data: {
        content_category:this.$route.path.split(`/`)[this.$route.path.split(`/`).length-1],
        current_path: this.$route.path,
      },

      question_fankui_data: question_fankui_data,
        //数据
        question_name:'',  //项目名称
        question_lei:'',  //问题类型
        question_theme:'', //问题主题
        question_company:'', //提问人
        company:'',//承办部门
        status:'', //状态

      basePath: "",
      routes: [
        {
          path: "index",
          breadcrumbName: "首页",
        },
        {
          path: "question_fankui",
          breadcrumbName: "问题反馈",
        },
        
      ],

      obj: [{ x: 1 }, { y: 2 }, { z: 3 }],
    };
  },
  created(){
    // console.log(`created`);
    this.render_breadcrumb_on_router_change();
    this.get_project_article_Data()
  },
  watch: {
    $route(val, preVal) {
      this.render_breadcrumb_on_router_change()
      this.get_project_article_Data()
      console.log("change");

    },
  },
  methods: {
    onChange(pageNumber) {
      console.log("Page: ", pageNumber);
    },

    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
    },

    render_breadcrumb_on_router_change(){
      
      let item = this.$route.path.split(`/`)
      let path = item[item.length-1]
      this.routes = [
        {
          path: "index",
          breadcrumbName: "首页",
        },
        {
          path: "question_fankui",
          breadcrumbName: "问题反馈",
        },
      ];

      this.ArticleList_props_Data.current_path = this.$route.path

      this.ArticleList_props_Data.content_category = path

    },
      

    get_project_article_Data() {

      axios({
        url: `/API/yichun/question/news/?page=${this.current}`, // 后端的接口地址
        method: "get",
        data: {
          page:this.current
        },
        transformRequest: [
          function (data) {
            data = Qs.stringify(data);
            return data;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        dataType: "json",
      })
        .then((res) => {
          console.log("连接成功"); // 这里多打印一句提示，只是为了更直观一点
          console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
          this.project_article_Data = res.data.datas
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
// li {
// //   display: inline-block;
//   margin: 0 10px;
// }
a {
  color: #42b983;
}

#content {
  margin: 0 15vw;
  padding: 5vh 0;
  // background-color: #42b983;
}

.contentBreadcrumb {
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 5vh 0;
}

.tab_label {
  margin: 0 1.5vw 0.5vh 0;
  padding: 1.5vh 1.5vw;
  background-color: #409eff;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 1px;
}

// .tab_label {
//   margin: 1vh 0;
//   padding: 1vh 2vw;
//   background-color:#fff;
//   color:#409eff;
//   font-size: 0.75rem;
// }

.contentWrap {
  display: flex;
}

.aside-content {
  min-width: auto;
}

.main-content {
  flex: 1;
}

.project_content {
  margin: 0 0 20vh 0;
}

.project_article_box {
  margin: calc(15px + 1.25rem) 0;
}

.project_article_box .project_article_title {
  font-size: 1.1rem;
}

.project_article_box .project_article_intro {
  text-indent: 1.6rem;

  font-size: 0.79rem;

  line-height: calc(5px + 1.25rem);

  margin: calc(5px + 1.1rem) 0;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.project_article_box .project_issue_time {
  font-size: 0.7rem;
}

.project_article_box .project_issue_time span {
  margin: 1em;
}

#pagination_box {
  margin: 50px 0;

  display: flex;
  justify-content: center;
}
</style>

<style lang="scss">
.contentWrap .el-tabs__item {
  padding: 0 0;
  height: auto;
  box-sizing: border-box;
  line-height: normal;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
}

.el-tabs__active-bar {
  // height: 160px;
  width: 0;
  display: none;
}

.el-tabs--left .el-tabs__nav-wrap::after {
  content: none;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0px;
  background-color: #e4e7ed;
  z-index: 1;
}

.content-box{
    // background-color: lawngreen;
    width: 100%;
}
.detail-li{
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;

    // justify-content:space-between;
    flex-wrap: wrap;
}
.detail-text-l{
    width: 22%;
    height: 100%;
    color: #fff;
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 600;
    background-color: #359cdb;
    text-align: center;
    padding: 10px 0;
}
.detail-text-r{
    width: 78%;
    height: 100%;
    font-size: 1rem;
    line-height: 2rem;
    padding: 10px 0;
    // background-color: lemonchiffon;
}

@media screen and (max-width:700px) {
    .detail-li{
        display: inline-block;
    }
    .detail-text-l{
        width: 100%;
        text-align: left;
        padding-left: 10px;
    }
    .detail-text-r{
        width: 100%;
        text-align: left;
        padding-left: 10px;
    }
}
</style>
