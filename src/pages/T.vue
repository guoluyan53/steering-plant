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
            {{ obj }}
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.breadcrumbName }}
            </span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">
              {{ route.breadcrumbName }}
            </router-link>
          </template>
        </a-breadcrumb>

        {{ obj }}

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
              <router-link
                to="/index/open_government/latest_government_affairs"
                @click.native="
                  render_breadcrumb({
                    path: `latest_government_affairs`,
                    breadcrumbName: `最新政务`,
                  })
                "
              >
                <div class="tab_label">
                  <span> 最新政务</span>
                </div>
              </router-link>
              <router-link
                to="/index/open_government/daily_sound"
                @click.native="
                  render_breadcrumb({
                    path: `daily_sound`,
                    breadcrumbName: `每日一听`,
                  })
                "
              >
                <div class="tab_label">
                  <span> 每日一听</span>
                </div>
              </router-link>
              <router-link
                to="/index/open_government/picture_policy"
                @click.native="
                  render_breadcrumb({
                    path: `picture_policy`,
                    breadcrumbName: `图画政务`,
                  })
                "
              >
                <div class="tab_label">
                  <span> 图画政务</span>
                </div>
              </router-link>
            </nav>
          </div>
          <div class="main-content">
            <!-- <ArticleList
              :ArticleList_props_Data="ArticleList_props_Data"
              :project_article_Data="project_article_Data"
            ></ArticleList> -->
            <router-view
              :ArticleList_props_Data="ArticleList_props_Data"
              :project_article_Data="project_article_Data"
            />
          </div>
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
        {
          path: "latest_government_affairs",
          breadcrumbName: "最新政务",
        },
        // {
        //   path: "daily_sound",
        //   breadcrumbName: "每日一听",
        // },
        // {
        //   path: "picture_policy",
        //   breadcrumbName: "图画政务",
        // },
      ],

      obj: [{ x: 1 }, { y: 2 }, { z: 3 }],
    };
  },
  watch: {
    routes(val, oldVal) {
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

    render_breadcrumb(breadcrumb_item) {
      this.routes[this.routes.length - 1] = {
        path: "latest_government_affairs",
        breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
      };
      // this.routes = [
      //   {
      //     path: "index",
      //     breadcrumbName: "首页",
      //   },
      //   {
      //     path: "open_government",
      //     breadcrumbName: "政务公开",
      //   },
      //   {
      //     path: "latest_government_affairs",
      //     breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
      //   },
      // ];

      // this.obj[this.obj.length - 1] = {
      //   path: "latest_government_affairs",
      //   breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
      // };

      // this.obj = [{ x: 1 }, { y: 2 }, { z: `${breadcrumb_item.breadcrumbName}` }],

      console.log(this.routes);
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
</style>
