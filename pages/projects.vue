<template>
    <v-card
      color="primary"
      class="mx-auto mt-8 w-75 pa-8 rounded text-center"
      elevation="4"
    >
      <v-card-title class="custom-font text-wrap"> PROJECTS & INVOLVEMENTS </v-card-title>
  
      <v-carousel show-arrows="hover">
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
          @click="goToProject('project1')"
        ></v-carousel-item>
  
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
          @click="goToProject('project2')"
        ></v-carousel-item>
  
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
          @click="goToProject('project3')"
        ></v-carousel-item>
      </v-carousel>
  
      <v-card-actions class="justify-center mx-2 my-4"> </v-card-actions>
      <v-btn to="/"> Home </v-btn>
    </v-card>
  </template>
  
  <script>
  export default {
    methods: {
      goToProject(path) {
        this.$router.push(path);
      },
    },
  };
  </script>


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
