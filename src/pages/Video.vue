<template>
  <a-locale-provider :locale="locale">
    <div class="Video">
      <PageHeader></PageHeader>
      <section>
        <div id="content">
          <a-breadcrumb class="contentBreadcrumb">
            <a-breadcrumb-item>
              <a href>首页</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <a href>重大项目视频调阅</a>
            </a-breadcrumb-item>
          </a-breadcrumb>
          <div id="category_table">
            <div id="city-content" class="category-content">
              <div class="ul_title">项目地区</div>
              <ul>
                <li v-for="(item,index) in category_content_Data.area" :key="item" class="category_li" @click="change_bgcolor(index)">
                  <a @click="get_projects_area(item)">{{ item }}</a>
                </li>
              </ul>
            </div>
            <a-divider />
            <div id="city-content" class="category-content">
              <p>
                {{ category_content_Data.current_year }}年{{
                  category_content_Data.city
                }}重大项目共计{{
                  category_content_Data.projectsMessage.majorProjects_num
                }}个，其中计划开工数目{{
                  category_content_Data.projectsMessage
                    .majorProjects_PlanToStart_num
                }}个，正施工建设项目{{
                  category_content_Data.projectsMessage
                    .majorProjects_ConstructionInProgress_num
                }}个
              </p>
            </div>
          </div>
          <div id="card_list" style="padding: 20px">
            <a-row type="flex" :gutter="16">
              <a-col
                v-for="item in item_list_Data"
                :key="item.id"
                :span="6"
                :xs="24"
                :sm="12"
                :md="8"
                :lg="8"
                :xl="6"
              >
                <a-card
                  class="item_card"
                  :data="item"
                  :ref="`pro_item${item.id}`"
                  @click="print(item.id)"
                  hoverable
                >
                  <img
                    @click="showDrawer"
                    slot="cover"
                    alt="example"
                    :src="`${item.imgUrl}`"
                  />
                  <div class="item_card_message">
                    <p class="item_card_message-title">
                      {{ item.item_message_title }}
                    </p>
                    <p class="item_card_message-description">
                      {{ item.item_message_description }}
                    </p>
                  </div>
                </a-card>
              </a-col>
              <!-- <a-col :span="6" :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
                <a-card class="item_card" hoverable style="width: ">
                  <img
                    @click="showDrawer"
                    slot="cover"
                    alt="example"
                    src="../assets/images/common/062d2e6.jpg"
                  />
                  <div class="item_card_message">
                    <p class="item_card_message-title">
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                    </p>
                    <p class="item_card_message-description">
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                    </p>
                  </div>
                </a-card>
              </a-col> -->
              <!-- <a-col :span="6" :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
                <a-card class="item_card" hoverable style="width: ">
                  <img
                    @click="showDrawer"
                    slot="cover"
                    alt="example"
                    src="../assets/images/common/062d2e6.jpg"
                  />
                  <a-card-meta
                    class="item_card_message"
                    title="中韩自贸地方经济合作示范区园区基础设施配套工程"
                  >
                    <template slot="description">
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                      中韩自贸地方经济合作示范区园区基础设施配套工程
                      
                      <br />
                    </template>
                    <template slot="description"
                      >中韩自贸地方经济合作示范区园区基础设施配套工程
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col> -->
            </a-row>
            <a-drawer
              :title="a_drawer_Data.a_drawer_title"
              :width="a_drawer_width"
              placement="right"
              :closable="true"
              :visible="visible"
              :after-visible-change="afterVisibleChange"
              @close="onClose"
            >
              <a-tabs
                default-active-key="1"
                :tab-position="mode"
                :style="{ height: '' }"
                @prevClick="callback"
                @nextClick="callback"
              >
                <a-tab-pane key="1" :tab="`实时视频`">
                  <div class="a-tab-pane-wrap">
                    <div class="RVC_box">
                      <video :src="`${a_drawer_Data.RVC_url}`" controls></video>
                    </div>
                    <div class="message_box">
                      <div>
                        <a-row type="flex">
                          <a-col flex="1">
                            <p class="message_box_title">
                              {{ a_drawer_Data.project_message.project_name }}
                            </p>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="11rem">
                            <p class="message_box_title">总投资:</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message.investment_total
                              }}
                            </p>
                          </a-col>
                          <a-col flex="11rem">
                            <p class="message_box_title">年度计划投资：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message
                                  .investment_annual_Planned
                              }}
                            </p>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="11rem">
                            <p class="message_box_title">累计完成投资：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message
                                  .investment_accumulated
                              }}
                            </p>
                          </a-col>
                          <a-col flex="11rem">
                            <p class="message_box_title">年度累计完成投资：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message
                                  .investment_annual_accumulated
                              }}
                            </p>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="11rem">
                            <p class="message_box_title">项目类型：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{ a_drawer_Data.project_message.project_type }}
                            </p>
                          </a-col>
                          <a-col flex="11rem">
                            <p class="message_box_title">所在地区：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{ a_drawer_Data.project_message.project_area }}
                            </p>
                          </a-col>
                        </a-row>

                        <a-row type="flex">
                          <a-col flex="11rem">
                            <p class="message_box_title">项目简介：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message
                                  .project_introduction
                              }}
                            </p>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="200px">
                            <p class="message_box_title">工程投资进度:</p>
                          </a-col>
                          <a-col flex="1">
                            <p></p>
                            <div>
                              <a-progress
                                :percent="
                                  a_drawer_Data.project_message
                                    .project_investment_schedule
                                "
                                status="active"
                                :strokeWidth="strokeWidth"
                              />
                              <a-button-group>
                                <!-- <a-button icon="minus" @click="decline" />
                              <a-button icon="plus" @click="increase" />-->
                              </a-button-group>
                            </div>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="200px">
                            <p class="message_box_title">年度投资进度:</p>
                          </a-col>
                          <a-col flex="1">
                            <p></p>
                            <div>
                              <a-progress
                                :percent="
                                  a_drawer_Data.project_message
                                    .project_investment_annual_schedule
                                "
                                status="active"
                                :strokeWidth="strokeWidth"
                              />
                              <a-button-group>
                                <!-- <a-button icon="minus" @click="decline" />
                              <a-button icon="plus" @click="increase" />-->
                              </a-button-group>
                            </div>
                          </a-col>
                        </a-row>
                      </div>
                    </div>
                  </div>
                </a-tab-pane>
                <a-tab-pane key="2" :tab="`图片小视频`">
                  <div class="a-tab-pane-wrap">
                    <div class="Carousel-image-wrap">
                      <h2>
                        形
                        <br />象 <br />图 <br />片
                      </h2>
                      <div class="Carousel-image-content">
                        <a-carousel arrows>
                          <div
                            slot="prevArrow"
                            slot-scope
                            class="custom-slick-arrow"
                            style="left: 10px; z-index: 1"
                          >
                            <a-icon type="left-circle" />
                          </div>
                          <div
                            slot="nextArrow"
                            slot-scope
                            class="custom-slick-arrow"
                            style="right: 10px"
                          >
                            <a-icon type="right-circle" />
                          </div>
                          <div
                            v-for="item in a_drawer_Data.image_url"
                            :key="item"
                          >
                            <img :src="`${item}`" alt />
                          </div>
                        </a-carousel>
                      </div>
                    </div>
                    <div class="Carousel-video-wrap">
                      <h2>
                        现
                        <br />场 <br />视 <br />频
                      </h2>
                      <div class="Carousel-video-content">
                        <a-carousel arrows>
                          <div
                            slot="prevArrow"
                            slot-scope
                            class="custom-slick-arrow"
                            style="left: 10px; zindex: 1"
                          >
                            <a-icon type="left-circle" />
                          </div>
                          <div
                            slot="nextArrow"
                            slot-scope
                            class="custom-slick-arrow"
                            style="right: 10px"
                          >
                            <a-icon type="right-circle" />
                          </div>
                          <div>
                            <video
                              src="https://v-cdn.zjol.com.cn/280443.mp4"
                              controls
                            ></video>
                          </div>
                          <div>
                            <video
                              src="https://v-cdn.zjol.com.cn/280443.mp4"
                              controls
                            ></video>
                          </div>
                          <div>
                            <video
                              src="https://v-cdn.zjol.com.cn/280443.mp4"
                              controls
                            ></video>
                          </div>
                          <div>
                            <video
                              src="https://v-cdn.zjol.com.cn/280443.mp4"
                              controls
                            ></video>
                          </div>
                        </a-carousel>
                      </div>
                    </div>
                    <div class="message_box">
                      <div>
                        <a-row type="flex">
                          <a-col flex="1">
                            <p class="message_box_title">
                              {{ a_drawer_Data.project_message.project_name }}
                            </p>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="11rem">
                            <p class="message_box_title">总投资:</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message.investment_total
                              }}
                            </p>
                          </a-col>
                          <a-col flex="11rem">
                            <p class="message_box_title">年度计划投资：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message
                                  .investment_annual_Planned
                              }}
                            </p>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="11rem">
                            <p class="message_box_title">累计完成投资：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message
                                  .investment_accumulated
                              }}
                            </p>
                          </a-col>
                          <a-col flex="11rem">
                            <p class="message_box_title">年度累计完成投资：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message
                                  .investment_annual_accumulated
                              }}
                            </p>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="11rem">
                            <p class="message_box_title">项目类型：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{ a_drawer_Data.project_message.project_type }}
                            </p>
                          </a-col>
                          <a-col flex="11rem">
                            <p class="message_box_title">所在地区：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{ a_drawer_Data.project_message.project_area }}
                            </p>
                          </a-col>
                        </a-row>

                        <a-row type="flex">
                          <a-col flex="11rem">
                            <p class="message_box_title">项目简介：</p>
                          </a-col>
                          <a-col flex="1">
                            <p>
                              {{
                                a_drawer_Data.project_message
                                  .project_introduction
                              }}
                            </p>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="200px">
                            <p class="message_box_title">工程投资进度:</p>
                          </a-col>
                          <a-col flex="1">
                            <p></p>
                            <div>
                              <a-progress
                                :percent="
                                  a_drawer_Data.project_message
                                    .project_investment_schedule
                                "
                                status="active"
                                :strokeWidth="strokeWidth"
                              />
                              <a-button-group>
                                <!-- <a-button icon="minus" @click="decline" />
                              <a-button icon="plus" @click="increase" />-->
                              </a-button-group>
                            </div>
                          </a-col>
                        </a-row>
                        <a-row type="flex">
                          <a-col flex="200px">
                            <p class="message_box_title">年度投资进度:</p>
                          </a-col>
                          <a-col flex="1">
                            <p></p>
                            <div>
                              <a-progress
                                :percent="
                                  a_drawer_Data.project_message
                                    .project_investment_annual_schedule
                                "
                                status="active"
                                :strokeWidth="strokeWidth"
                              />
                              <a-button-group>
                                <!-- <a-button icon="minus" @click="decline" />
                              <a-button icon="plus" @click="increase" />-->
                              </a-button-group>
                            </div>
                          </a-col>
                        </a-row>
                      </div>
                    </div>
                  </div>
                </a-tab-pane>
              </a-tabs>
            </a-drawer>
          </div>
          <div id="pagination_box">
            <a-pagination
              v-model="current"
              show-quick-jumper
              :default-current="1"
              :total="500"
              @change="onChange"
            />
          </div>
        </div>
      </section>
      <PageFooter></PageFooter>
    </div>
  </a-locale-provider>
</template>

<script>
import {
  category_content_Data,
  item_list_Data,
  a_drawer_Data,
} from "@/assets/js/MockData";

import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default {
  name: "Video",
  components: {
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",

      locale: zhCN,

      a_drawer_width: `calc(100vw)`,

      message_box_title_width: `calc(11rem)`,

      //分类菜单数据
      category_content_Data: category_content_Data,

      //项目列表数据
      item_list_Data: item_list_Data,

      //项目展示框数据
      a_drawer_Data: a_drawer_Data,

      form: this.$form.createForm(this),
      visible: false,

      mode: "left",

      percent: 100,

      strokeWidth: 25,

      current: 2,
    };
  },
  methods: {
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
        liList[i].style.backgroundColor = ""
      }

      console.log(index);

      liList[index].style.backgroundColor = "#42b983";
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
  display: flex;
  margin: 5px;
  font-size: 0.75rem;
}

.ant-divider-horizontal {
  margin: 15px 0;
}

.ul_title {
  /* min-width: 100px; */
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
