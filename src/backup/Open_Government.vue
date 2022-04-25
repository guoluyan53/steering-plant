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

        <div class="contentWrap">
          <!-- <el-tabs :tab-position="tabPosition" style="height: ">
            <el-tab-pane>
              <div class="tab_label" slot="label">
                <span> 政策资料</span>
              </div>

              <div class="componentWrap">
                <ArticleList
                  :ArticleList_props_Data="ArticleList_props_Data"
                  :project_article_Data="project_article_Data"
                ></ArticleList>
              </div>
            </el-tab-pane>
            <el-tab-pane>
              <div class="tab_label" slot="label">
                <span> 每日一听</span>
              </div>
              <div class="compnentWrap"></div>
            </el-tab-pane>
            <el-tab-pane>
              <div class="tab_label" slot="label">
                <span> 图画政务</span>
              </div>
              <div class="compnentWrap"></div
            ></el-tab-pane>
          </el-tabs> -->

          <div class="aside-content">
            <nav>
              <li></li>
              <li></li>
              <li></li>
            </nav>
          </div>
          <div class="main-content"></div>
        </div>

        <!-- <ArticleList
          :ArticleList_props_Data="ArticleList_props_Data"
          :project_article_Data="project_article_Data"
        ></ArticleList> -->
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

      tabPosition: "left",

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
          path: "open_government",
          breadcrumbName: "政务公开",
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
</style>
