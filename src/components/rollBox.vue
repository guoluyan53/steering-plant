<template>
  <div class="scollbox">
    <vue-seamless-scroll :data="List" class="seamless-warp" :class-option="classOption">
      <ul>
         <li class="DataList_top" v-for="item in List" :key="item.q_id">
            <div class="DataList_left one">{{item.q_id}}</div>
            <div class="DataList_left two">{{item.name}}</div>
            <div class="DataList_left three">{{item.content}}</div>
            <!-- <div class="DataList_left three" @click="Question_fankui('question_fankui',item.q_id)">{{item.content}}</div> -->
            <div class="DataList_left four">{{item.time}}</div>
            <div class="DataList_left five" :class="iscolor(item.status)">
              {{item.status}}</div>
          </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>
 
<script>

import axios from 'axios';
import qs from 'qs';
import vueSeamless from 'vue-seamless-scroll'
export default {
    data() {
      return{
        List:[],
        // iscolor:true,
        // isred:false
      }
    },
    components: {    //组件
        vueSeamless
    },
    computed: {
 
     classOption () {
       return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 4, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 ,// 单步运动停止的时间(默认值1000ms)
        autoPlay:true
      }
    },
    
  },
 
  created(){
    this.get_rollbox_data();
    // this.DataList();
  },

  methods:{
    get_rollbox_data(){
      console.log('问题反馈');
        axios({
        url: `/API/yichun/allquestions`, // 后端的接口地址
        method: "get",
        params: {
          
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
          this.List = res.data.detail
        })
        .catch(function (error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        })
    },

    iscolor(i){
      if(i=='未办理'){
        return 'redcolor';
      }
      if(i='已解决'){
        return 'greencolor'
      }
    }
    // Question_fankui(article_category,article_id){
    //   this.$router.push({
    //         path: `/index/question_fankui`,
    //         query: { article_category: article_category, article_id: article_id },
    // })
    // }
    
}
}
 
 
</script>
 
 
<style scoped>
.seamless-warp{
  width: 100%;
  height: 18rem;
  overflow: hidden;
}
ul{
  padding: 0;
}
.DataList_top{
  list-style: none;
  width: 100%;
  min-height: 3rem;
  /* line-height: 0.6rem; */
  background-color: #4383C1;
  margin-top: 0.5rem;
  color: white;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  flex-wrap:wrap;
}

.DataList_left{
  /* padding-top: 1rem; */
  /* line-height: 1.2rem; */
  font-size: 0.6rem;
  float: left;
  text-align: center;
  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  /* text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; */
}
.one{
  width: 8%;
}
.two{
  width: 26%;
  margin-left: 1%;
}
.three{
  width: 29%;
  margin-left: 1%;
  /* text-overflow: ellipsis;
  overflow: hidden; */
}

.four{
  width: 19%;
  margin-left: 1%;
}
.five{
  width: 14%;
  margin-left: 1%;
  /* color: greenyellow; */
}

.greencolor{
  color: greenyellow;
}
.redcolor{
  color: rgb(247, 84, 84);
}
</style>
