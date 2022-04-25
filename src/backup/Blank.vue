<template>
  <div class="hello">
      <PageHeader></PageHeader>
      <section>
        <div id="content">
          
        </div>
      </section>
      <PageFooter></PageFooter>
  </div>
</template>

<script>

import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";


export default {
  name: 'HelloWorld',
  components: {
    PageHeader,
    PageFooter,
  },
  props: {
    msg: String
  },
  data(){

  },
  methods:{
    
  }
}
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
  margin: 0 10vw;
  padding: 5vh 0;
  // background-color: #42b983;
}

.contentBreadcrumb {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 5vh 0;
}
</style>
