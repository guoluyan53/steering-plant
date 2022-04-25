<template>
  <div class="PageHeader">
    <header>
      <div id="headerWrap">
        <img id="headerLogo" @click="to_index()" src="../assets/images/Header/logo.png" alt />
        <nav id="headerNav">
          <ul>
            <li>
              <router-link to="/index">平台首页</router-link>
            </li>
            <li>
              <router-link to="/index/project_information">项目资讯</router-link>
            </li>
            <li>
              <router-link to="/index/major_project">重点项目</router-link>
            </li>
            <li>
              <router-link to="/index/video">视频调阅</router-link>
            </li>
            <br>
            <li>
              <router-link to="/index/open_goverment">政务公开</router-link>
            </li>
            <li>
              <router-link to="">决策评估</router-link>
            </li>
            <li>
              <router-link to="/jianyanxc">问题征解</router-link>
            </li>
            <li>
              <router-link to="">后台管理</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    to_index(){
      this.$router.push('/index')
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
}
li {
  display: inline-block;
  margin: 0 10px;
}
router-link {
  color: #42b983;
}

.PageHeader{
  background: url("../assets/images/Header/sky.png");
  background-size: cover;
}


#headerWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10vw;
  padding: 3vh 0;
  /* background: url("../assets/images/Header/sky.png"); */
}

#headerLogo{
  width: 25%;
}
#headerLogo:hover{
  cursor: pointer;
}
#headerNav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#headerNav ul {
  /* width: 50vw; */
  /* display: flex; */
  flex-wrap: wrap;
  margin: 1em 0;
  /* align-items: center; */
}

#headerNav ul li {
  display: flex;
  /* width: 20%; */
  float: left;
  margin: 0 1vw;
  padding: 5px 10px;
  box-sizing: border-box;
  justify-content: center;
  font-size: 1rem;
}

#headerNav ul li router-link{
  color: rgba(0, 0, 0,1);
}

#headerNav ul li router-link:hover{
  color: rgba(24,144,255,1);
}

@media screen and (max-width: 500px) {



  #headerWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.5vw;
  padding: 2.5vh 0;
}

#headerNav ul li {
  padding: 5px 1px;
  font-size: 0.5rem;


}
}
</style>
