import { defineNuxtPlugin } from "#app";
import VueFathom from "@ubclaunchpad/vue-fathom";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFathom, {
    siteID: "BNAXHQYJ",
    disabled: false,
    settings: {
      spa: "history",
    },
  });
});
