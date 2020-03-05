<template>
  <v-app>
    <v-app-bar
      app
      color="blue-grey"
      dark
    >
      <v-toolbar-title>
        <v-icon class="mr-2">assignment</v-icon>
        METAR Reports
      </v-toolbar-title>
      <v-spacer />
      <!-- <v-btn icon to="/about">
        <v-icon>help</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer
      color="blue-grey"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  })
}
</script>
