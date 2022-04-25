<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>

import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      // msg: "Welcome to Your Vue.js App",
      locale: zhCN,
    };
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: black;
}

html,
body {
  font-size: calc(100vw / 80);
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
