<template>
  <div class="about">
    <v-card
        class="mx-auto"
        max-width="300"
        tile
      >
        <v-list disabled>
          <v-subheader>Example Coded by Graham Lounder</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Github</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>LinkedIn</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
  </div>
</template>
