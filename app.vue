<template>
  <NuxtLayout>
    <!-- Add your toolbar here -->
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

    <!-- Render the page content -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
export default {
  name: 'App',
};
</script>

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