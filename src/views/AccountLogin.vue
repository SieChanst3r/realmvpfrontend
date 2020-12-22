
<template>
  
<div class="about">
  <div id="nav-container">
    <nav-bar />
  </div>
  <div id="body-container">
    <h1>This is the users account with login form page</h1>
    <login-form />
  </div>
  <div id="footer">
    <footer-comp />
  </div>
</div>
</template>

<script>
import FooterComp from "../components/Footer.vue";
import navBar from "../components/NavBar.vue";
import LoginForm from "../components/LoginForm.vue";
// import axios from "axios";
// import cookies from "vue-cookies";

  export default {
    name: "account",
    components: {
    FooterComp,
    navBar,
    LoginForm,
  }
  }
</script>

<style scoped>
#nav-container {
  display: grid;
  /* align-items: center;
  justify-items: center; */
  min-height: 10vh;
}
#body-container {
   display: grid;
  /* align-items: center;
  justify-items: center; */
  min-height: 80vh;
}
#footer {
   display: grid;
  /* align-items: center;
  justify-items: center; */
  min-height: 12vh;
}
</style>