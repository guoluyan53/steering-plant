<template>
  <div class="block">
    <el-carousel trigger="click" height="25rem" >
      <el-carousel-item v-for="item in images" :key="item.id" name="item.id">
        <div class="pic_item" @click="to_article_content('project_information',item.id)">
          <img class="small" :src="item.src" />
          <!-- <h3 class="medium">{{ item.id }}</h3> -->
          <h3>{{item.title}}</h3>
          </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import {carousel_data} from "@/assets/js/MockData";
import axios from "axios";
import qs from "qs";
export default {
  name: "carousel",
  data() {
    return {
      images:[]
    };
  },
  created() {
    this.getImages();
  },
  methods: {
    getImages(){
      console.log('bbb');

      axios({
        url:`/API/yichun/policy/picture`,
        method:"get",
        params:{

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
      .then((res) =>{
        console.log("连接成功");
        console.log(res);
        this.images = res.data.pictures
      })
      .catch(function(error){
        console.log("连接失败");
        console.log(error);
      });
    },
    to_article_content(article_category,article_id){
      this.$router.push({
            path: `/index/project_information/article_content`,
            query: { article_category: article_category, article_id: article_id },
    })
    }
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: white;
  font-size: 0.8rem;
  opacity: 0.75;
  /* line-height: 35rem; */
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.block {
  /* height: 35rem; */
  width: 100%;
}
.small {
  width: 100%;
  height: 100%;
  position: relative;
}
/*修改默认样式 */

/*修改小圆点 */
/* .el-carousel__button{
    width: 1rem;
    height: 1rem;
    background-color: brown;
} */

.pic_item {
  position: relative;
  height: 100%;
}
.pic_item:hover{
  cursor: pointer;
}

.pic_item img {
  width: 100%;
  height: 100%;
}

.pic_item h3 {
  position: absolute;
  left: 1rem;
  bottom: 2rem;
}
.info {
  position: absolute;
  width: 10rem;
  height: 2rem;
  background-color: aquamarine;
}
</style>