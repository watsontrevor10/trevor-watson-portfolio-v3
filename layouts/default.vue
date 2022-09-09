<template>
  <v-app class="application">
    <Header />

    <v-main>
      <Nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<style lang="scss">
@font-face {
  font-family: "lo-res";
  src: url("https://use.typekit.net/gld6sco.css");
}
.application {
  font-family: "lo-res";
}
</style>
