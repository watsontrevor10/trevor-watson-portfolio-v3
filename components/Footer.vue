<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="primary">
        <v-spacer></v-spacer>

        <v-btn
          v-for="(social, i) in socialIcons"
          :key="i"
          class="mx-4"
          dark
          icon
        >
          <a
            :href="`${social.url}`"
            target="_blank"
            rel="noopener noreferrer"
            class="logoLink"
          >
            <v-icon size="24px">
              {{ social.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Watson Creative, LLC</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socialIcons: [
      { icon: "mdi-patreon", url: "https://www.patreon.com/user?u=81529202" },
      { icon: "mdi-youtube", url: "https://www.youtube.com/c/TrevorWatson10" },
      { icon: "mdi-twitter", url: "https://twitter.com/trevdevbass" },
      {
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/trevorjwatson/",
      },
      { icon: "mdi-instagram", url: "https://www.instagram.com/trevdevbass/" },
    ],
  }),
};
</script>

<style>
.logoLink {
  text-decoration: none;
}
</style>
