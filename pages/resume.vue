<template>
  <v-card
    class="mx-auto mt-8 w-75 pa-8 rounded text-center custom-border"
    elevation="4"
  >
    <v-card-title class="custom-font text-wrap"> ALEXA'S RESUME </v-card-title>
    <v-card-actions class="justify-center mx-2 "></v-card-actions>

    <v-divider class="my-2"></v-divider>

    <embed
      src="/adresume.pdf"
      type="application/pdf"
      width="100%"
      height="1200px"
      style="border: none"
    />
    <v-btn to="/"> Home </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "ResumePage",
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

.custom-border {
  border: 2px solid #F48FB1; 
  border-radius: 8px; 
}
</style>
