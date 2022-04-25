<template>
  <div class="Project_Information">
    <PageHeader></PageHeader>
    <section>
      <div id="content">
        <!-- <a-breadcrumb class="contentBreadcrumb">
          <a-breadcrumb-item>
            <router-link to="/index">首页</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link to="/index/project_information">项目资讯</router-link>
          </a-breadcrumb-item>
        </a-breadcrumb> -->

        <a-breadcrumb class="contentBreadcrumb" :routes="routes">
          <!-- <a-breadcrumb-item>
            <router-link to="/index">首页</router-link>
          </a-breadcrumb-item> -->
          <template slot="itemRender" slot-scope="{ route, routes, paths }">
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.breadcrumbName }}
            </span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">
              {{ route.breadcrumbName }}
            </router-link>
          </template>
        </a-breadcrumb>
        <!-- <div class="project_content">
          <div
            class="project_article_box"
            v-for="item in project_article_Data"
            :key="item.id"
          >
            <h1
              class="project_article_title"
              @click="to_article_content('Project_Information', item.id)"
            >
              <a href="javascript:">{{ item.title }}</a>
            </h1>
            <p class="project_article_intro">{{ item.intro }}</p>
            <p class="project_issue_time">
              1000-1-1<span>10:10</span>来源: {{ item.source }}
            </p>
            <a-divider />
          </div>
        </div>
        <div id="pagination_box">
          <a-pagination
            v-model="current"
            show-quick-jumper
            :default-current="1"
            :page-size="pageSize"
            :total="total"
            @change="onChange"
          />
        </div> -->

        <ArticleList :project_article_Data="project_article_Data"></ArticleList>
      </div>
    </section>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import { project_article_Data } from "@/assets/js/MockData";

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
  props: {
    // msg: String,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      current: 2,
      pageSize: 10,
      total: 500,

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
    };
  },
  methods: {
    onChange(pageNumber) {
      console.log("Page: ", pageNumber);
    },

    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
    },

    get_project_article_Data(pageNumber) {
      console.log(pageNumber);

      axios({
        url: "/api/aaa/bbb", // 后端的接口地址
        method: "post",
        data: {
          username: "hello",
          password: "world",
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
