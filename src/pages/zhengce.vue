<template>
  <a-locale-provider :locale="locale">
    <div class="Video">
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

          <div id="category_table">
            <div id="city-content" class="category-content">
              <div class="ul_title">政策级别：</div>
              <ul>
                <li v-for="(item,index) in zhengce_content_Data.level" :key="item" class="category_li" @click="change_bgcolor(index)">
                  <a @click="get_projects_area(item)">{{ item }}</a>
                </li>
              </ul>
              <div class="ul_title">发布行业：</div>
              <ul>
                <li v-for="(item,index) in zhengce_content_Data.industry" :key="item" class="category_li2" @click="change_bgcolor1(index)">
                  <a @click="get_projects_area(item)">{{ item }}</a>
                </li>
              </ul>
            </div>
            
            <a-divider />
            <div id="city-content" class="category-content">
              <p>
                为您找到{{messages_shuju}}条政策数据
              </p>
            </div>
          </div>
          
          <ArticleList
          :ArticleList_props_Data="ArticleList_props_Data"
          :project_article_Data="project_article_Data"
   
         
        ></ArticleList>

          <!-- <div id="pagination_box">
            <a-pagination
              v-model="current"
              show-quick-jumper
              :default-current="1"
              :total="500"
              @change="onChange"
            />
          </div> -->
        </div>
      </section>
      <PageFooter></PageFooter>
    </div>
  </a-locale-provider>
</template>

<script>
import {
  zhengce_content_Data,
  project_article_Data
} from "@/assets/js/MockData";
import ArticleList from "@/components/ArticleList";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import axios from 'axios';
import Qs from 'qs';

export default {
  name: "zhengce",
  components: {
    PageHeader,
    PageFooter,
    ArticleList
  },
  data() {
    return {
    //   msg: "Welcome to Your Vue.js App",

      locale: zhCN,

      a_drawer_width: `calc(100vw)`,

      message_box_title_width: `calc(11rem)`,
      messages_shuju:'',
      //分类菜单数据
      zhengce_content_Data: zhengce_content_Data,

      //项目列表数据
      // item_list_Data: item_list_Data,
      project_article_Data:project_article_Data,
      //项目展示框数据
      // a_drawer_Data: a_drawer_Data,
      ArticleList_props_Data: {
        current_path: this.$route.path,
      },

      basePath: "",
      routes: [
        {
          path: "index",
          breadcrumbName: "首页",
        },
        {
          path: "zhengce",
          breadcrumbName: "政策推送",
        },
      ],

      form: this.$form.createForm(this),
      visible: false,

      mode: "left",

      percent: 100,

      strokeWidth: 25,

      current: 2,
    };
  },

  created(){
    this.get_project_article_Data()
  },
  methods: {

    //axios
    get_project_article_Data() {

      axios({
        url: `/API/yichun/policy/news/benefit?${this.current}`, // 后端的接口地址
        // url: `/API/yichun/policy/news/project`, // 后端的接口地址
        method: "get",
        params: {
         page: this.current,
        //  status:this.index,
        //  industry:''
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
          this.project_article_Data=res.data.data
          this.messages_shuju = res.data.size
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        });
    },

    to_article_content(article_category, article_id) {
      this.$router.push({
        path: "/index/zhengce/article_content",
        query: { article_category: article_category, article_id: article_id },
      });
    },

    afterVisibleChange(val) {
      console.log("visible", val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    callback(val) {
      console.log(val);
    },

    increase() {
      let percent = this.percent + 10;
      if (percent > 100) {
        percent = 100;
      }
      this.percent = percent;
    },
    decline() {
      let percent = this.percent - 10;
      if (percent < 0) {
        percent = 0;
      }
      this.percent = percent;
    },

    onChange(pageNumber) {
      console.log("Page: ", pageNumber);
    },

    //自定义方法
    get_projects_area(projects_area) {
      console.log(projects_area);
      return projects_area;
    },

    print() {
      // let a = this.getAttribute("data");
      console.log(this);
    },

    change_bgcolor(index){



      let liList = document.getElementsByClassName("category_li");

      console.log(liList);

      for(let i=0;i<liList.length;i++){
        liList[i].style.backgroundColor= ""
      }

      console.log(index);

      liList[index].style.backgroundColor = "#A8CEFD";
    },

    change_bgcolor1(index){



      let liList = document.getElementsByClassName("category_li2");

      console.log(liList);

      for(let i=0;i<liList.length;i++){
        liList[i].style.backgroundColor = ""
      }

      console.log(index);

      liList[index].style.backgroundColor = "#A8CEFD";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;

  text-decoration: none;
}

#content {
  margin: 0 10vw;
  padding: 5vh 0;
}

.contentBreadcrumb {
  font-size: 1rem;
  font-weight: 600;
}
#category_table {
  margin: 5vh 0;
  padding: 3vh 1.5vw;
  box-sizing: border-box;
  border: solid 1px #42b983;
  border:solid 1px rgba(0, 0, 0, 0.45);
}

.category-content {
  /* display: flex; */
  margin: 5px;
  font-size: 0.75rem;
}

.ant-divider-horizontal {
  margin: 15px 0;
}

.ul_title {
  /* min-width: 100px; */
  /* width: 100%; */
  /* height: auto; */
  margin: 5px 0;
  padding: 0 10px;
}

.category-content p {
  display: flex;
  margin: 5px 0;
  padding: 0 10px;
  font-weight: 700;
}

.category-content ul {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.category-content li {
  margin: 5px 1vw;
}

.category-content li a {
  color: rgba(0, 0, 0, 1);
}

#card_list {
  margin: calc(10px + 1vw) 0;
  background-color: rgba(255, 255, 255, 1);
}

.item_card {
  margin: 20px 0;
  padding: 0 0 15px 0;
}

.item_card .item_card_message {
  /* line-height: 25px; */
  /* height: 150px; */
  text-overflow: ellipsis;
}

.item_card_message-title {
  overflow: hidden;
  color: rgba(24, 144, 255, 0.85);
  font-weight: 500;
  font-size: 16px;
  font-size: 0.75rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;

  margin-bottom: 8px;
}

.item_card_message-description {
  color: rgba(0, 0, 0, 0.45);
  height: 90px;
  line-height: 30px;
  overflow: hidden;
  margin-bottom: 0px;
  font-size: 0.65rem;
}

.a-tab-pane-wrap {
  padding: 25px 0;
}

.RVC_box {
  width: 80%;
  margin: auto;
}

.RVC_box video {
  width: 100%;
}

.RVC_box img {
  width: 100%;
}

.message_box {
  width: 80%;
  margin: 50px auto;
}

.message_box p {
  /* height: 50px; */
  line-height: calc(0.75rem + 30px);
  /* background-color: rgba(0, 160, 233, 0.7); */
  vertical-align: middle;
  padding: 0 1vw;
  font-size: 0.75rem;
}

.message_box p.message_box_title {
  font-weight: 700;
}

.Carousel-image-wrap {
  position: relative;
  width: 100%;
}

.Carousel-image-content {
  width: 80%;
  margin: auto;
}

/* .Carousel-image-wrap .ant-carousel .slick-slide img {
    width: 90%;
} */

.Carousel-image-wrap h2 {
  z-index: 100;
  position: absolute;
  margin: 0 1vw;
  padding: 1vh 1vw;

  font-size: 1rem;
  font-weight: 500;
  background-color: rgba(24, 144, 255, 0.85);
}

.Carousel-video-wrap {
  width: 100%;
}

.Carousel-video-content {
  width: 80%;
  margin: 100px auto;
}

/* .Carousel-video-wrap .ant-carousel .slick-slide video {
    width: 90%;
} */

.Carousel-video-wrap h2 {
  z-index: 100;
  position: absolute;
  margin: 0 1vw;
  padding: 1vh 1vw;

  font-size: 1rem;
  font-weight: 500;
  background-color: rgba(24, 144, 255, 0.85);
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  /* height: 160px; */
  /* line-height: 160px; */
  /* background: #364d79; */
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.ant-carousel >>> .slick-slide video {
  width: 100%;
}

.ant-carousel >>> .slick-slide img {
  width: 100%;
}

#pagination_box {
  margin: 50px 0;

  display: flex;
  justify-content: center;
}

@media screen and (max-width: 500px) {
  #content {
    margin: 0;
    padding: 3vh 0;
  }

  #category_table {
    margin: 2.5vh 0;
    padding: 1vh 1vw;
  }

  .ant-divider-horizontal {
    display: block;
    clear: both;
    width: 100%;
    min-width: 100%;
    height: 1px;
    margin: 10px 0;
  }

  .item_card {
    margin: 10px 0;
    padding: 0 0 0 0;
  }

  .item_card_message-description {
    color: rgba(0, 0, 0, 0.45);
    height: 50px;
    line-height: 25px;
    overflow: hidden;
    margin-bottom: 0px;
    font-size: 0.5rem;
  }
}
</style>

<style>
</style>
