<template>
    <v-card
      class="mx-auto mt-8 w-75 pa-8 rounded text-center custom-border"
      elevation="4"
    >
      <v-card-title class="custom-font text-wrap"> ABOUT ALEXA </v-card-title>
      <v-card-subtitle class="custom-font text-wrap">
        I am currently a senior at Eastern Washington University in Spokane, WA. I
        am looking for full time roles in software development or cyber security.
        I am passionate about using technology to solve real world problems and I
        am always looking for new opportunities to learn and grow.
      </v-card-subtitle>
      <v-card-title class="custom-font text-wrap"> Stacks Technologies Alexa Uses: </v-card-title>
        <v-container>
        <v-table class ="custom-border">
          <thead>
            <tr>
              <th class="text-center">Languages/Tools</th>
              <th class="text-center">Proficiency Level</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in skills" :key="item.name" class="pa-2">
              <td>{{ item.name }}</td>
              <td>{{ item.level }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
  
      <v-container class="mt-4">
        <v-card-subtitle class="custom-font text-left">
          <strong>The scale ranges from proficiency levels 1-5:</strong>
          <ul>
            <li><strong>1 -</strong> Fundamental Awareness (basic knowledge).</li>
            <li><strong>2 -</strong> Novice (limited experience).</li>
            <li><strong>3 -</strong> Intermediate (practical application).</li>
            <li><strong>4 -</strong> Advanced.</li>
            <li><strong>5 -</strong> Expert.</li>
          </ul>
        </v-card-subtitle>
      </v-container>
  
      <v-container class="mt-4">
        <v-btn to="/"> Home </v-btn>
      </v-container>
  
      <v-card-actions class="justify-center mx-2 my-4"> </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: [
          {
            name: 'Java',
            level: 3,
          },
          {
            name: 'Python',
            level: 3,
          },
          {
            name: 'C#',
            level: 3,
          },
          {
            name: 'Front End (HTML, CSS, JS, TS)',
            level: 3,
          },
          {
            name: 'Linux',
            level: 4,
          },
          {
            name: 'AWS Services',
            level: 4,
          },
          {
            name: 'GitHub',
            level: 4,
          },
          {
            name: 'Bash Scripting',
            level: 2,
          },
        ],
      };
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

.custom-border {
  border: 2px solid #F48FB1; 
  border-radius: 8px; 
}
</style>