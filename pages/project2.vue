<template>
    <v-card
      class="mx-auto mt-8 w-75 pa-8 rounded text-center custom-border"

      subtitle="NCAE National Cyber Competition"
    >
      <template v-slot:title>
        <span class="custom-font font-weight-black">Project 2</span>
      </template>
  
      <v-card-text class="bg-primary pt-4">
       This was a regional and national cyber competetion that focused on bringing services up and securing and hardening these services. 
       Throughout the competion, hackers would try to take down the services and our team would have to respond and secure our services. 
       Communication, knowledge of configuration files on different distributions, and knowledge of different services were key to scoring points in the competition. 
       I was tasked with database and had to research different databases and how to bring them up and properly configure them. In the national competetion in Florida, I was voted most improved. 
    
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