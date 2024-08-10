<template>
    <v-card
      class="mx-auto mt-8 w-75 pa-8 rounded text-center custom-border"

      subtitle="Aesthetic Wordle Website"
    >
      <template v-slot:title>
        <span class="custom-font font-weight-black">Project 1</span>
      </template>
  
      <v-card-text class="bg-primary pt-4">
      Disclaimer: This project was done in a class setting and as part of an academic grade. 
      However, the work and effort put in was genuine and warranted us buying the domain.
      </v-card-text>
      <v-card-actions class="justify-center">
      <v-btn color="secondary" :to="{ path: '/projects' }">
        Back
      </v-btn>
    </v-card-actions>
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

.custom-border {
  border: 2px solid #F48FB1; 
  border-radius: 8px; 
}
</style>