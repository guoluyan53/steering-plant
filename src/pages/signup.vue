<template>
  <div class="signup">
    <SignupHeader></SignupHeader>
    <div class="allBox">
      <router-view></router-view>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import SignupHeader from "../components/SignupHeader";
import PageFooter from "../components/PageFooter";

export default {
  name: "signup",
  components: {
    SignupHeader,
    PageFooter,
  },
};
</script>

<style scoped>
.signup {
  background-color: #f6f9fa;
}
.signup > .allBox {
  padding: 3rem 0;
}
.allBox {
  min-height: 115vh;
  /* padding-bottom: 200px !important;
  box-sizing: border-box; */
}
</style>