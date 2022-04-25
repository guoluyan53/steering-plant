<template>
    <div class="dayliscen">
        <PageHeader></PageHeader>
        <div class="main">
            <div class="title">每日一听</div>
            <div class="content">
                <div class="main-content">
                    <audio :src="MusicUrl" controls="controls"></audio>
                    <!-- <audio :src="item.src" controls="controls" autoplay="autoplay"></audio> -->

                    <ul>
                        <li v-for="(item,index) in MusicArr" :key="index">
                            {{item.name}}
                            <input type="button" value="播放" @click="display(item.id)">
                            
                        </li>
                    </ul>

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
                MusicArr:[
                    {
                        id:0,
                        name:'新城大海',
                        src:require('../assets/music/music1.mp3')
                    }
                ],
                MusicUrl:''
                // MusicUrl:require('../assets/music/music1.mp3'),
            }
        },
        methods:{
            diplay(id){
                // console.log(id);
                // var that = this;
                // axios.get("").then(function(response){
                //     console.log(response);
                //     that.MusicUrl=response.data.data[0].url;
                // },function(err){
                //     console.log(err);
                // });

            }
        }
    }
</script>
<style scoped>
.main{
    width: 80%;
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
    text-align: center;
}

</style>