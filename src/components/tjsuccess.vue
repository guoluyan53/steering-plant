<template>
    <div class="tjsuccess">
        <PageHeader></PageHeader>
        <div class="main">
            <div class="title">项目填报</div>
            <div class="content">
                <div class="main-content">
                    <div class="imgbox">
                        <div class="img"></div>
                    </div>
                    <div class="text-1">提交成功，审核需{{day}}个工作日</div>
                    <div class="text-2">{{count}}秒后将自动返回首页</div>
                    <button @click="return_index">返回首页</button>
                </div>
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
export default{
    name:'tjsuccess',
    components:{
        PageHeader,
        PageFooter,
    },
    data(){
        return{
            day:'7',
            count:'', //倒计时
        }
    },
    created(){
        this.index()
    },
    methods:{
        //4秒后跳转到首页
        index(){
            const TIME_COUNT = 4
            if(!this.timer){
                this.count = TIME_COUNT
                this.show = false
                this.timer = setInterval(() =>{
                    if(this.count >0 && this.count <= TIME_COUNT){
                        this.count--
                    }else{
                        this.show = true
                        clearInterval(this.timer)
                        this.timer = null
                        //跳转到首页
                        this.$router.push('/index')
                    }
                },1000)
            }
        },
        return_index(){
            this.$router.push('/index')
        }
    }
}
</script>

<style scoped>
.tjsuccess{
    background-color: #F6F9FA;
}
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
.imgbox{
    width: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
}
.img{
    width: 7rem;
    height: 7rem;
    background: url(../assets/images/common/finish.png);
    background-size: 100% 100%;
}
.text-1{
    width: 100%;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    margin-top: 2rem;
}
.text-2{
    width: 100%;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    margin-top: 1rem;
}
button{
    outline: none;
    background-color:  #3386D7;
    border: none;
    border-radius: 5px;
    /* width: 15vw; */
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    /* height: 2.5rem; */
    color: white;
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
}
</style>