<template>
  <div class="hello">
    <div class="project_content">
      <div
        class="project_article_box"
        v-for="item in project_article_Data"
        :key="item.id"
      >
        <h1
          class="project_article_title"
          @click="to_article_content('Project_Information', item.id)"
        >
          <a href="javascript:">{{ item.title }}</a>
        </h1>
        <p class="project_article_intro">{{ item.intro }}</p>
        <p class="project_issue_time">
          <span>{{item.issue_time}}</span>来源: {{ item.source }}
        </p>
        <a-divider />
      </div>
    </div>
    <div id="pagination_box">
      <a-pagination
        v-model="current"
        show-quick-jumper
        :default-current="1"
        :page-size="pageSize"
        :total="total"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default {
  name: "HelloWorld",
  components: {
    PageHeader,
    PageFooter,
  },
  props: {
    // msg: String,
    // current:String,
    // pageSize:String,
    project_article_Data: Array,
    ArticleList_props_Data: Object,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      current: 1,
      pageSize: 10,
      total: 500,
        // project_article_Data: project_article_Data,
    };
  },
  methods: {
    onChange(pageNumber) {
      console.log("From article list");
      console.log("Page: ", pageNumber);
    },

    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
      this.current = current;
      // this.get_project_article_Data()
    },
    to_article_content(article_category, article_id) {
      // alert(this.ArticleList_props_Data.current_path)
      this.$router.push({
        path: `${this.ArticleList_props_Data.current_path}/article_content`,
        query: { article_category: article_category, article_id: article_id },
      });
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

.project_content {
  margin: 0 0 20vh 0;
}

.project_article_box {
  margin: 0 0 calc(15px + 1.25rem) 0;
}

.project_article_box .project_article_title {
  font-size: 1.1rem;
}

.project_article_box .project_article_intro {
  text-indent: 1.6rem;

  font-size: 0.79rem;

  line-height: calc(5px + 1.25rem);

  margin: calc(5px + 1.1rem) 0;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.project_article_box .project_issue_time {
  font-size: 0.7rem;
}

.project_article_box .project_issue_time span {
  margin: 1em;
}

#pagination_box {
  margin: 50px 0;

  display: flex;
  justify-content: center;
}
</style>
