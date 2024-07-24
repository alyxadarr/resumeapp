<template>
  <v-toolbar color="background">
    <v-btn to="/"> Home </v-btn>
    <v-btn to="/about"> About </v-btn>
    <v-toolbar-title class="secondary--text text-center"> Alexa Darrington </v-toolbar-title>
    <v-btn to="/resume"> Resume </v-btn>
    <v-btn to="/projects"> Projects </v-btn>
    <v-btn icon to="/contact">
  <v-icon>mdi-phone-classic</v-icon>
</v-btn>
  </v-toolbar>
  <v-card
    color="primary"
    class="mx-auto mt-8 w-75 pa-8 rounded text-center"
    elevation="4"
  >
    <v-card-title class="text-wrap"> Alexas resume gallery </v-card-title>
    <v-card-subtitle class="text-wrap"> photo here stylish </v-card-subtitle>
    <v-card-actions class="justify-center mx-2 my-4"> </v-card-actions>
  </v-card>
</template>
