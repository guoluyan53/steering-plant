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
         
          <!-- <div class="aside-content">
            <nav>
              
              <router-link
                to="/index/question_trends"
                @click.native="
                  render_breadcrumb({
                    path: `articlelist`,
                    breadcrumbName: `征解动态`,
                  })
                "
              >
              </router-link>

            </nav>
          </div> -->
          <div class="main-content">
            <ArticleList
              :ArticleList_props_Data="ArticleList_props_Data"
              :project_article_Data="project_article_Data"
            ></ArticleList>
            <!-- <router-view :key="this.$route.fullPath"
              :ArticleList_props_Data="ArticleList_props_Data"
              :project_article_Data="project_article_Data"
            /> -->
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
  name: "Question_Trends",
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
      current: 1,
      pageSize: 10,
      total: 500,

      tabPosition: "left",

      ArticleList_props_Data: {
        content_category:this.$route.path.split(`/`)[this.$route.path.split(`/`).length-1],
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
          path: "articlelist",
          breadcrumbName: "征解动态",
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
      // console.log(val);
      // console.log(val[preVal.length-1].breadcrumbName);
      // console.log(preVal[preVal.length-1].breadcrumbName);

      // render_breadcrumb_on_router_change()

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
      //     path: `${val.path}`,
      //     breadcrumbName: `${val.breadcrumbName}`,
      //   },
      // ];

    },
  },
  methods: {
    onChange(pageNumber) {
      console.log("Page: ", pageNumber);
    },

    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
    },




    // render_breadcrumb_match(val){
    //   switch(val){
    //     case `latest_goverment_affairs`:{
    //       return `最新政务`
    //     }
    //     case `picture_policy`:{
    //       return `图画政务`
    //     }
    //   }
    // },

    render_breadcrumb_on_router_change(){
      
      let item = this.$route.path.split(`/`)
      let path = item[item.length-1]
      this.routes = [
        {
          path: "index",
          breadcrumbName: "首页",
        },
        {
          path: "articlelist",
          breadcrumbName: "征解动态",
        },
        // {
        //   path: `${path}`,
        //   breadcrumbName: `${this.render_breadcrumb_match(path)}`,
        // },
      ];

      this.ArticleList_props_Data.current_path = this.$route.path

      this.ArticleList_props_Data.content_category = path

    },

    render_breadcrumb(breadcrumb_item) {
      // this.ArticleList_props_Data= {
      //   content_category:breadcrumb_item.path,
      //   current_path: this.$route.path,
      // }
      // this.routes[this.routes.length - 1] = {
      //   path: "latest_government_affairs",
      //   breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
      // };
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
      //     path: `${breadcrumb_item.path}`,
      //     breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
      //   },
      // ];

      // this.obj[this.obj.length - 1] = {
      //   path: "latest_government_affairs",
      //   breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
      // };

      // this.obj = [{ x: 1 }, { y: 2 }, { z: `${breadcrumb_item.breadcrumbName}` }],

      // this.ArticleList_props_Data.current_path = this.$route.path
      // console.log(this.routes);
      // console.log("aaa");
      // console.log(this.ArticleList_props_Data.current_path);
      // console.log("bbb");
      // console.log(this.$route.path);
    },

    get_project_article_Data() {
      // console.log(pageNumber);
      // let urlpath;
      // if(this.ArticleList_props_Data.current_path=="/index/open_goverment/picture_policy"){
      //   urlpath='picture'
      // }
      // if(this.ArticleList_props_Data.current_path=="/index/open_goverment/latest_goverment_affairs"){
      //   urlpath='feature'
      // }

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
</style>
