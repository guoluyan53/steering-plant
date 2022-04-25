<template>
  <div class="Article_Content">
    <PageHeader></PageHeader>
    <section>
      <div id="content">
        <!-- <a-breadcrumb class="contentBreadcrumb">
          <a-breadcrumb-item>
            <router-link to="/index">首页</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link to="/project_information">项目资讯</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link to="/index">正文</router-link>
          </a-breadcrumb-item>
        </a-breadcrumb> -->

        <a-breadcrumb class="contentBreadcrumb" :routes="routes">
          <!-- <a-breadcrumb-item>
            <router-link to="/index">首页</router-link>
          </a-breadcrumb-item> -->
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
          <p>article_category：{{ $route.query.article_category}}</p>
          <p>article_id：{{ $route.query.article_id }}</p>
          <p class="article_text_title">
            {{article_text_title}}
          </p>
          <p class="article_text_message">发布时间:{{article_text_message}}</p>
          <a-divider />
          <p class="article_text_content" v-html="this.article_text_content">
            
          </p>
          
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
  name: "Article_Content",
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
      article_text_title:"",
      article_text_message:'',
      article_text_content:'',

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
        url: `/API/yichun/policy/${this.article_id}`, // 后端的接口地址
        method: "get",
        params: {
          // article_category: this.article_category,
          id: this.article_id,
          // title:"26个项目集中签约 青岛文旅产业再发力",
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
          this.article_text_title = res.data.title
          this.article_text_message= res.data.issue_time
          this.article_text_content=res.data.content
          this.article_category=res.data.article_category
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        });
    },

    getNum() {
      if (this.$route.matched[0].name.indexOf("project_information") != -1) {
        return '项目资讯';
      }
      if (this.$route.matched[0].name.indexOf("major_project") != -1) {
        return '重点项目';
      }
      if (this.$route.matched[0].name.indexOf("open_goverment") != -1) {
        return '政务公开';
      }
      if (this.$route.matched[0].name.indexOf("question_trends") != -1) {
        return '征解动态';
      }
      if (this.$route.matched[0].name.indexOf("zhengce") != -1) {
        return '政策推送';
      }
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
</style>
