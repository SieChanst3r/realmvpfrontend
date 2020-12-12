<template>
  <div class="home">
   
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <footer-comp/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import FooterComp from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    FooterComp,
  }
};
</script>
