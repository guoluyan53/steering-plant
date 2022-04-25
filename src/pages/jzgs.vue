<template>
    <div class="jzgs">
        <PageHeader></PageHeader>
        <div class="breadcrumb">进展公示>正文</div>
        <div class="main">
            <div class="title">哈哈哈哈哈哈哈哈哈项目进展公示</div>
            <div class="data">
                <div class="source">绝绝绝觉公司</div>
                <div class="time">2020-20-20 20:20:20</div>
            </div>
            <div class="text">哈哈哈哈绝了绝了绝了绝了绝了绝了解决了了解了解决了了解了解了
                    交流交流哈无ID号前五我后期无力低于过渡期遇到过说一首歌曲吴宇森阿浴室柜去网上过去式
                    阿浴室柜倾诉去上滚去睡拱墅区送过去qqusgq us过去数过去qgssgqqausgq一个号收拾收拾是
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
export default{
    name:'jzgs',
    components:{
        PageHeader,
        PageFooter,
    },
}
</script>

<style scoped>
.jzgs{
    background-color: #F6F9FA;
}
.main{
    width: 70rem;
    margin: 1rem auto;
    background-color: #FFFFFF;
    padding: 1rem 2rem;
    color: black;
}
.breadcrumb{
    width: 70rem;
    margin: 0 auto;
    margin-top: 0.5rem;
}
.title{
    width: 100%;
    font-size: 2rem;
    text-align: center;
}
.data{
    width: 50%;
    margin-left: 25%;
    display: flex;
    justify-content: space-around;
    color: grey;
    font-size: 1rem;
}
.text{
    font-size: 1.2rem;
    text-indent: 2.4rem;
    margin-top: 2rem;
}
</style>