
<template>
  
<div class="about">
  <div id="nav-container">
    <nav-bar />
  </div>
  <div id="body-container">
    <h1>We had to start somewhere! </h1>
    <about-page />
  </div>
  <div id="footer">
    <footer-comp />
  </div>
</div>
</template>

<script>
import FooterComp from "../components/Footer.vue";
import navBar from "../components/NavBar.vue";
import AboutPage from "../components/AboutUs.vue";

  export default {
    name: "about",
    components: {
    FooterComp,
    navBar,
    AboutPage,
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