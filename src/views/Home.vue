<template>
  <div class="home">
    <div>
    <nav-bar />
    </div>
    <div id="body-container">
      <home-page />

    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div><footer-comp />
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import FooterComp from "../components/Footer.vue";
import navBar from "../components/NavBar.vue";
import HomePage from "../components/HomeCard.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    FooterComp,
    navBar,
    HomePage,
  }
};
</script>

<style scoped>
#body-container {
  display: grid;
  align-items: center;
  justify-items: center;
  min-height: 80vh;
}
</style>
