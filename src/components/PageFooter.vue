<template>
  <div class="PageFooter">
    <footer>
      <div id="footerWrap">
        <p><span>Copyright © 2018-2019 江西省发展和改革委员会</span><span> All rights reserved.</span></p>
        <p><span>主办单位：江西省发展和改革委员会</span><span>技术支持：江西省信息中心</span></p>
        <p><span>电话：0531-86062322</span><span>邮编：250011</span><span>地址：江西省南昌市省府前街1号</span></p>
        <p><span>网站标识码：3700000016</span><span>赣ICP备：10017206号</span><span>赣公网安备：37010202001370号</span></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {},
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
a {
  color: #42b983;
}

.PageFooter{
  background-color: #434343;
}
#footerWrap {
  width: 70%;
  margin: auto;
  padding: 10px 0;
  min-height: 20vh;
}

#footerWrap p{

  margin: 1em 0;
  font-size: 0.75rem;
  color: #fff;
}

#footerWrap p span{
  margin: 0 1em 0 0;
}

@media screen and (max-width: 500px) {

  #footerWrap {
  width: 90%;
}
}
</style>
