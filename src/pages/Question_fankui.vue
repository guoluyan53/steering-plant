<template>
  <div class="Article_Content">
    <PageHeader></PageHeader>
    <section>
      <div id="content">
        

        <a-breadcrumb class="contentBreadcrumb" :routes="routes">
          <template
            slot="itemRender"
            slot-scope="{ route,  routes, paths }"
          >
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.breadcrumbName }}
            </span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">
              {{ route.breadcrumbName }}
            </router-link>
          </template>
        </a-breadcrumb>
        <div class="article_container">
          <div class="content-box">
                <ul>
                    <li class="detail-li">
                        <div class="detail-text-l">项目名称：</div>
                        <div class="detail-text-r">{{question_name}}</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">问题类型：</div>
                        <div class="detail-text-r">{{question_lei}}</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">问题主题：</div>
                        <div class="detail-text-r">{{question_theme}}</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">提问人/提问企业：</div>
                        <div class="detail-text-r">{{question_company}}</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">承办部门：</div>
                        <div class="detail-text-r">{{company}}</div>
                    </li>
                    <li class="detail-li">
                        <div class="detail-text-l">办理状态：</div>
                        <div class="detail-text-r">{{status}}</div>
                    </li>
                </ul>
            </div>
          
        </div>
      </div>
    </section>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

import axios from "axios";
import qs from "qs";

export default {
  name: "Question_fankui",
  components: {
    PageHeader,
    PageFooter,
  },
  props: {
    // msg: String,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      current: 1,

      article_category: this.$route.query.article_category,

      article_id: this.$route.query.article_id,
      //数据
        question_name:'',  //项目名称
        question_lei:'',  //问题类型
        question_theme:'', //问题主题
        question_company:'', //提问人
        company:'',//承办部门
        status:'', //状态

      // project_article_Data: project_article_Data,

      basePath: "",
      routes: [
        {
          path: "index",
          breadcrumbName: "首页",
        },
        {
          path: this.$route.matched[0].name,
          breadcrumbName: this.getNum(),
        },
        {
          path: "open_goverment/article_content",
          breadcrumbName: "正文",
        },
      ],
    };
  },
  created() {
    // console.log(this.article_category);
    // console.log(this.article_id);
    // console.log(this.$route);
    // console.log(this.$route.matched[0].name);

    this.get_article_data(this.article_id);//这里删了一个参数
  },
  methods: {

    /*
        功能：获取文章内容
        参数：article_category 文章分类
              article_id       文章id
    */
    get_article_data(article_id) {
      // console.log("aaa");
      // console.log(article_category);
      // console.log(article_id);
      console.log("bbb");

      axios({
        url: `/API/yichun/allquestions`, // 后端的接口地址
        method: "get",
        params: {
       
        //   id: this.article_id,

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
          console.log("连接成功"); // 这里多打印一句提示，只是为了更直观一点
          console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
          this.question_name = res.data.detail.q_id
          this.question_lei= res.data.detail.time
          this.question_theme=res.data.content
          this.question_company=res.data.detail.name
        //   this.company = res.data.detail
          this.status=res.data.detail.status
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        });
    },

    getNum() {
      if (this.$route.matched[0].name.indexOf("Question_fankui") != -1) {
        return '问题反馈';
      }
    //   if (this.$route.matched[0].name.indexOf("major_project") != -1) {
    //     return '重点项目';
    //   }
    //   if (this.$route.matched[0].name.indexOf("open_goverment") != -1) {
    //     return '政务公开';
    //   }
    //   if (this.$route.matched[0].name.indexOf("question_trends") != -1) {
    //     return '征解动态';
    //   }
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#content {
  margin: 0 15vw;
  padding: 5vh 0 15vh 0;
  // background-color: #42b983;
}

.contentBreadcrumb {
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 5vh 0;
}

.article_container {
  margin: 5vh 0 0 0;
  padding: 2vh 1vw;
  // width: 70%;
  // box-sizing: border-box;
}

.article_container .article_text_title {
  margin: 0 0 0vh 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.article_container .article_text_message {
  margin: 3vh 0 5vh 0;
  font-size: 0.75rem;
}

.article_container .article_text_content {
  // margin: 3vh 0 5vh 0;
  font-size: 0.75rem;
  line-height: calc(10px + 1.5rem);
  text-indent: 1.5rem;
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
