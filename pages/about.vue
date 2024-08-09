<template>
  <v-card
    color="primary"
    class=" mx-auto mt-8 w-75 pa-8 rounded text-center"
    elevation="4"
  >
    <v-card-title class="custom-font text-wrap"> ABOUT ME </v-card-title>
    <v-card-subtitle class="custom-font text-wrap"> I am currently a senior at Eastern Washington University in Spokane,WA </v-card-subtitle>
    <v-btn to="/"> Home </v-btn>

    <v-card-actions class="justify-center mx-2 my-4"> </v-card-actions>
  </v-card>
</template>


<style scoped>
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/Gilroy-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.custom-font {
  font-family: 'YourFont', sans-serif;
}
</style>