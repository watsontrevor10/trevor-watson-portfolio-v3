import Vue from "vue";
import Vuetify from "@nuxtjs/vuetify";

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ee7539",
        secondary: "#312d2e",
        accent: "#f9c834",
        info: "#f4bd74",
      },
    },
  },
});

export default vuetify;
