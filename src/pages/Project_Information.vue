<template>
  <div class="Project_Information">
    <PageHeader></PageHeader>
    <section>
      <div id="content">
        <a-breadcrumb class="contentBreadcrumb" :routes="routes">
          <template slot="itemRender" slot-scope="{ route, routes, paths }">
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.breadcrumbName }}
            </span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">
              {{ route.breadcrumbName }}
            </router-link>
          </template>
        </a-breadcrumb>

        <ArticleList
          :ArticleList_props_Data="ArticleList_props_Data"
          :project_article_Data="project_article_Data"
          :current="current"
          :pageSize="pageSize"
        ></ArticleList>
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
  name: "Project_Information",
  components: {
    PageHeader,
    PageFooter,
    ArticleList,
  },
  // props: {
  //   // msg: String,
  // },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      current: 1,
      pageSize: 10,
      total: 500,

      ArticleList_props_Data: {
        current_path: this.$route.path,
      },

      project_article_Data: project_article_Data,

      basePath: "",
      routes: [
        {
          path: "index",
          breadcrumbName: "首页",
        },
        {
          path: "project_information",
          breadcrumbName: "项目资讯",
        },
      ],
    }
  },

  created(){
    this.get_project_article_Data()
  },

  methods: {
    onChange(pageNumber) {
      console.log("From project information");
      console.log("Page: ", pageNumber);
      // this.get_project_article_Data();
    },

    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
      // this.get_project_article_Data();
    },

    get_project_article_Data() {

      axios({
        url: `/API/yichun/policy/news/project?${this.current}`, // 后端的接口地址
        // url: `/API/yichun/policy/news/project`, // 后端的接口地址
        method: "get",
        params: {
         page: this.current,
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
          this.project_article_Data=res.data.datas
          this.pageSize = res.data.pages
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        });
    },

    to_article_content(article_category, article_id) {
      this.$router.push({
        path: "/index/project_information/article_content",
        query: { article_category: article_category, article_id: article_id },
      });
    },
  },
}
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
  padding: 5vh 0;
  // background-color: #42b983;
}

.contentBreadcrumb {
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 5vh 0;
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
