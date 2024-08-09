<template>
  <v-card
    color="primary"
    class="mx-auto mt-8 w-75 pa-8 rounded text-center"
    elevation="4"
  >
    <v-card-title class="custom-font large-font">
      CONNECT WITH ME 😊📞
    </v-card-title>
    <v-card-title class="custom-font">
      Shoot me a message or connect with me on LinkedIn!
    </v-card-title>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Name"
      ></v-text-field>

      <v-text-field
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>
      <v-text-field
        v-model="note.value.value"
        :error-messages="email.errorMessage.value"
        label="Message"
      ></v-text-field>

      <v-btn class="me-4" type="submit"> submit </v-btn>

      <v-btn class="me-4" @click="handleReset"> clear </v-btn>
      <v-btn class="me-4" to="/"> Home </v-btn>
    </form>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Phone number needs to be at least 9 digits.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    note(value) {
      if (value?.length >= 2) return true;

      return "Message needs to be at least 2 characters.";
    },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const note = useField("note");
const select = useField("select");
const checkbox = useField("checkbox");

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
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
.large-font {
  font-size: 22px; /* Adjust this to the desired size */
}
</style>
