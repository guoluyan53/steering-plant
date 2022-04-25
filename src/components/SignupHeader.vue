<template>
  <div class="SignupHeader">
    <header>
      <div id="SheaderWrap">
        <img id="SheaderLogo" @click="to_index()" src="../assets/images/signup/logo.png" alt />
        <nav id="SheaderNav">
          <span>用户通行证</span>
          <div></div>
          <span>宜春市统一政府服务门户</span>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "SignupHeader",
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
.SignupHeader {
  background-image: url(../assets/images/signup/sky.png);
  background-size: 100% 100%;
}
#SheaderWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 17.5vw;
  padding: 4vh 0;
  /* background-image: url(../assets/images/sky.png); */
}

#SheaderLogo {
  width: 30%;
}
#SheaderLogo:hover{
  cursor: pointer;
}
#SheaderNav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#SheaderNav > span:nth-child(1) {
  font-size: 1.25rem;
}
#SheaderNav > div:nth-child(2) {
  width: 2px;
  height: 1.25rem;
  background-color: black;
  margin: 0 0.25rem;
}
@media screen and (max-width: 800px) {
  #SheaderNav {
    display: none;
  }
}
</style>
