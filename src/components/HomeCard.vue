<template>
  <div id="app">
    <v-app id="inspire"
    >
      <v-carousel
        cycle
        min-height="400"
        hide-delimiter-background
        show-arrows-on-hover
       
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-app>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          src: "https://www.crossfit.com/wp-content/uploads/2020/10/19092755/2018072814475780_ND_ND5_6593-1-copy-1024x576.jpg",
        },
        {
          src: "https://www.wellandgood.com/wp-content/uploads/2018/11/Stocksy-crossfit-friends-BONNINSTUDIO.jpg",
        },
        {
          src: "https://images.glaciermedia.ca/polopoly_fs/1.24151083.1591942357!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/b1-06122020-crossfit-jpg.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  display: grid;
  align-items: center;
  justify-items: center;

}

#inspire {
    display: grid;  
    align-items: center;
    justify-items: center;
    width: 100%;
}
</style>