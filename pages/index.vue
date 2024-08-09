<template>
  <v-toolbar color="background">
    <v-btn class="custom-font" to="/"> Home </v-btn>
    <v-btn class="custom-font" to="/about"> About </v-btn>
    <v-toolbar-title class="custom-font secondary--text text-center">
      ALEXA DARRINGTON
    </v-toolbar-title>
    <v-btn class="custom-font" to="/resume"> Resume </v-btn>
    <v-btn class="custom-font" to="/projects"> Projects </v-btn>
    <v-btn icon to="/contact">
      <v-icon>mdi-phone-classic</v-icon>
    </v-btn>
  </v-toolbar>

  <v-card
    color="background"
    class="mx-auto rounded text-center"
    elevation="2"
  >
    <v-img
      src="/public/websitepic.png"
      alt="Developer Image"
      max-width="800"
      class="mx-auto my-4"
    ></v-img>
    <v-card-actions class="justify-center"></v-card-actions>
  </v-card>
</template>

<style scoped>
@font-face {
  font-family: "YourFont";
  src: url("/fonts/Gilroy-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.custom-font {
  font-family: "YourFont", sans-serif;
}
</style>
