<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
<template>
  <v-card color="grey-lighten-3">
    <v-layout>
      <v-app-bar
        color="white"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Alexa's Resume App</v-app-bar-title>

        <v-spacer></v-spacer>
        <v-btn >
          Projects
        </v-btn>
        <v-btn >
          Resume
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="n in 2"
              :key="n"
              cols="12"
            >
              <v-card
                :subtitle="`Subtitle for Content ${n}`"
                :title="`Content ${n}`"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
              ></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
    </v-app>
  </NuxtLayout>
</template>