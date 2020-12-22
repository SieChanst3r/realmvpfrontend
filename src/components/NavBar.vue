<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Gym</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <!-- <v-list-item-title><router-link to="/home" /> Home</v-list-item-title>  -->
            <v-btn
              class="ma-2"
            
              color="secondary"
              @click="loader = 'loading'"
              dark
            >
              Home
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <!-- <v-list-item-title> <router-link to="/account" /> Account  </v-list-item-title> -->
            <v-btn
            
              color="blue-grey"
              class="ma-2 white--text"
              @click="loader = 'loading3'"
              dark
            >
              Account
              
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>


<style lang="sass">
  $color-pack: false

  @import '~vuetify/src/styles/main.sass'
</style>
