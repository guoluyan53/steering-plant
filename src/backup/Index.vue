<template>
  <div class="index">
    <section>
      <div id="content">
        <a-breadcrumb class="contentBreadcrumb" :routes="routes">
          <template slot="itemRender" slot-scope="{ route, routes, paths }">
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.breadcrumbName }}
            </span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">
              {{ route.breadcrumbName }}
            </router-link>
          </template>
        </a-breadcrumb>

        <h1>obj: {{ obj }}</h1>

        <h1>arr: {{ arr }}</h1>

        <nav>
          <router-link
            to=""
            @click.native="
              render_breadcrumb({
                path: `A`,
                breadcrumbName: `信息A`,
              })
            "
          >
            <div class="tab_label">
              <span> 信息A</span>
            </div>
          </router-link>
          <router-link
            to=""
            @click.native="
              render_breadcrumb({
                path: `B`,
                breadcrumbName: `信息B`,
              })
            "
          >
            <div class="tab_label">
              <span> 信息B</span>
            </div>
          </router-link>
          <router-link
            to=""
            @click.native="
              render_breadcrumb({
                path: `C`,
                breadcrumbName: `信息C`,
              })
            "
          >
            <div class="tab_label">
              <span> 信息C</span>
            </div>
          </router-link>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  props: {
    // msg: String,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",

      basePath: "",
      routes: [
        {
          path: "",
          breadcrumbName: "首页",
        },
        {
          path: "",
          breadcrumbName: "信息公开",
        },
        {
          path: "",
          breadcrumbName: "最新信息",
        },
      ],

      arr: [{ ax: 1 }, { ay: 2 }, { az: 3 }],

      obj: { ox: 1, oy: 2, oz: 3 },
    };
  },
  watch: {
    routes(val, preVal) {
      console.log("routes change");
    },

    obj(val, preVal) {
      console.log("obj change");
    },

    arr(val, preVal) {
      console.log("arr change");
    },
  },
  methods: {
    render_breadcrumb(breadcrumb_item) {
      //   this.routes[this.routes.length - 1] = {
      //     path: "",
      //     breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
      //   };

      //   console.log(this.routes);

      this.routes = [
        {
          path: "",
          breadcrumbName: "首页",
        },
        {
          path: "",
          breadcrumbName: "信息公开",
        },
        {
          path: "",
          breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
        },
      ];

      console.log(this.routes);

      //   this.arr[this.arr.length - 1] = {
      //     path: "",
      //     breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
      //   };

      //   console.log(this.arr);

      //   this.arr = [
      //     { ox: 1 },
      //     { oy: 2 },
      //     { oz: `${breadcrumb_item.breadcrumbName}` },
      //   ];

      //   console.log(this.arr);

      //   this.obj[this.obj.length - 1] = {
      //     path: "",
      //     breadcrumbName: `${breadcrumb_item.breadcrumbName}`,
      //   };

      //   console.log(this.obj);

      //   this.obj = { ox: 1, oy: 2, oz: `${breadcrumb_item.breadcrumbName}` };

      //   console.log(this.obj);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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

#content {
  margin: auto;
  width: 65%;
  padding: 50px 0;
}

.contentBreadcrumb {
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 15px 0;
}

nav {
  margin: 50px 0;
}

nav .tab_label {
  width: 15%;
  margin: 15px 0;
  padding: 15px 25px;
  background-color: #409eff;
  color: #fff;
  font-weight: 700;
  text-align: center;
  border-radius: 1px;
}
</style>
