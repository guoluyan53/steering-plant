<template>
    <div class="dayliscen">
        <PageHeader></PageHeader>
        <div class="main">
            <div class="title">每日一听</div>
            <div class="content">
                <div class="main-content">
                    <div class="audio">
                        <audio :src="currentSrc" controls="controls" @ended="nextSong"></audio>
                    </div>
                    <div class="song">
                        <ul v-for="(song,index) in songs" :key="song.id">
                            <li @click="playMusic(index)" :class="[song.id==currentIndex?activeCLass :'']">
                                <span>
                                    <img :src="greyimg" @mouseover="changeimg()" @mouseout="changeback()" alt="">
                                    {{song.name}}
                                </span>
                                <span>
                                    {{song.date+' '+song.time}}
                                </span>
                            </li>
                        </ul>
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
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>
<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import Axios from 'axios';
    export default{
        name:'dayliscen',
        components:{
            PageHeader,
            PageFooter,
        },
        data(){
            return{
                current: 1,

                songs:[
                    {
                        id:0,
                        name:'星辰大海',
                        src:require('../assets/music/music1.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    {
                        id:1,
                        name:'想见你',
                        src:require('../assets/music/music2.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    {
                        id:2,
                        name:'今日新闻',
                        src:require('../assets/music/music3.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    {
                        id:3,
                        name:'头条新闻---师大校庆',
                        src:require('../assets/music/music4.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    {
                        id:4,
                        name:'原来是80周年',
                        src:require('../assets/music/music5.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    {
                        id:5,
                        name:'校庆校庆小琴是是是',
                        src:require('../assets/music/music6.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    {
                        id:6,
                        name:'英文歌',
                        src:require('../assets/music/music7.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    {
                        id:7,
                        name:'中文测试测试车蝴蝶谷大速度速度和电视的很少几乎电话喝鸡尾酒对本文及我位会的话好的好的会的话测试测试测试测试测试测试',
                        src:require('../assets/music/music8.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    {
                        id:8,
                        name:'中文测试测试鸡尾酒对测试测试测试测试测试测试',
                        src:require('../assets/music/music9.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    {
                        id:9,
                        name:'今天是校庆国际组织',
                        src:require('../assets/music/music10.mp3'),
                        date:'2020-02-9',
                        time:'12:20:08'
                    },
                    
                ],
                currentIndex:0,
                currentSrc:require('../assets/music/music1.mp3'),
                activeCLass:'active',
                greyimg:require('../assets/images/listen/grey.png'),
                blueimg:require('../assets/images/listen/blue.png'),
                blueimg1:require('../assets/images/listen/blue.png')
            }
        },
        // mounted:function(){
        //     this.musicdata();//需要触发的函数
        // },
        methods:{
            //后台数据
            // musicdata(){
            //     axios({
            //         url: "http://47.97.155.31:8081/yichun/policy/audio", // 后端的接口地址
            //         method: "get",
            //         data: {
            //             songs:[],
            //          },
            //         transformRequest: [
            //         function (data) {
            //         data = Qs.stringify(data);
            //         return data;
            //             },
            //         ],
            //         headers: {
            //             "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            //         },
            //         dataType: "json",
            //     })
            //     .then((res) => {
            //         console.log("连接成功"); // 这里多打印一句提示，只是为了更直观一点
            //         console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
            //         })
            //     .catch(function (error) {
            //         console.log("连接失败"); // 作用同上
            //         console.log(error); // 如果连接失败，会抛出错误信息。
            //     });
            // },
            

            // diplay(id){
                // console.log(id);
                // var that = this;
                // axios.get("").then(function(response){
                //     console.log(response);
                //     that.MusicUrl=response.data.data[0].url;
                // },function(err){
                //     console.log(err);
                // });

            // }
            nextSong () {
      // console.log(currentIndex)
      if (this.currentIndex < this.songs.length - 1) {
        this.currentIndex += 1
      } else {
        this.currentIndex = 0
      }
      this.currentSrc = this.songs[this.currentIndex].src
      console.log('currentIndex:' + this.currentIndex)
      console.log('currentSrc:' + this.currentSrc)
    },
    playMusic (id) {
      console.log('id:' + id)
      if (this.currentIndex !== id) {
        this.currentIndex = id
        this.currentSrc = this.songs[this.currentIndex].src
      }
    },
    //分页
    onChange(pageNumber) {
      console.log("Page: ", pageNumber);
    },

    //切换图片
    // changeimg(){
    //     this.greyimg=this.blueimg;
    // },
    // changeback(){
    //     this.greyimg = this.blueimg1;
    // }

        }
    }
</script>
<style scoped>
.main{
    width: 70%;
    margin: 3rem auto;
    background-color: #FFFFFF;
}
.title{
    width: 100%;
    text-align: center;
    background-color: #3386D7;
    font-size: 1.5rem;
    color: white;
    letter-spacing: 1.5rem;
    padding: 0.3rem;
}
.main-content{
    width: 100%;
}
ul{
    margin: 0;
    padding: 0;
}
li{
    color: black;
    font-size: 0.7rem;
    list-style: none;
    border-bottom: 1px solid rgb(185, 183, 183);
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}
li:hover{
    color: #3386D7;
}
li span:first-child{
    width: 80%;
    /* display: block; */
    /* display: flex; */
    /* align-items: center; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
li span:last-child{
    color: gray;overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
audio{
    width: 100%;
    outline: none;
}
.audio{
    width: 70%;
    margin: 0 auto;
}
.song{
    width: 80%;
    margin: 0 auto;
}
img{
    width: 0.5rem;
}
#pagination_box {
  margin: 50px 0;

  display: flex;
  justify-content: center;
}

@media screen and (max-width: 510px){
    audio{
        width: 100%;
        /* min-width: 5rem; */
        height: 5rem;
    }
    .main{
        width: 95vw;
    }
}
</style>