<template>
    <v-card
      class="mx-auto mt-8 w-75 pa-8 rounded text-center custom-border"

      subtitle="Gonzaga Hackathon Competition"
    >
      <template v-slot:title>
        <span class="custom-font font-weight-black">Project 3</span>
      </template>
  
      <v-card-text class="bg-primary pt-4">
        Our team of 4 created a data visualization from a county health report of health code violations in a specific county. 
        We parsed the PDF with Python and used the data to create a map visualization with HTML and CSS. 
        The final result was a full stack website with a map of markers and when clicked, it would display the restaurant, location, and specific health violation with codes and description. 
        After showing our viable product to judges (industry professionals), we won the competition out of more than 40+ teams.
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