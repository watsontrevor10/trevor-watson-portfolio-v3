<template>
  <v-container>
    <v-container>
      <h1 class="text-h1 ma-8">Hi,</h1>
      <h4 class="text-h4 ml-16">my name is</h4>
      <h1 class="text-h1 ma-8 ml-16">Trevor Watson</h1>
    </v-container>
    <v-carousel
      id="main-carousel"
      cycle
      height="480"
      :show-arrows="false"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        :src="`${image}`"
      ></v-carousel-item>
    </v-carousel>
    <v-container>
      <v-card flat>
        <v-card-title
          >I’m a professional software engineer and musician.</v-card-title
        >
        <div>
          <v-card-text
            >This is where I share some of the projects that I'm working
            on.</v-card-text
          >
          <v-card-text>
            Between my full-time work as a
            <nuxt-link to="/dev">software developer</nuxt-link>, my part-time
            work as a <nuxt-link to="/music">gigging</nuxt-link> and Army
            musician or just taking
            <nuxt-link to="/photo">pictures</nuxt-link> of my adventures there
            is a lot variation in the types of projects I take on. I want to
            share what I'm working on here, and hope that you find some value in
            it!
          </v-card-text>
          <v-card-text>
            Feel free to <nuxt-link to="/contact">reach out</nuxt-link> with
            questions or if you just want to chat!
          </v-card-text>
        </div>
      </v-card>
      <v-card width="500">
        <v-card-title>My Story</v-card-title>
        <v-timeline>
          <v-timeline-item>
            <v-card-title slot="opposite" class="text-h5"
              >Long Time Ago</v-card-title
            >
            <v-card-text>Born as the cutest child in the world</v-card-text>
          </v-timeline-item>
          <v-timeline-item>
            <v-card-title slot="opposite" class="text-h5"
              >Bunch o' Years</v-card-title
            >
            <v-card-text>Grew up, learned things, did stuff</v-card-text>
          </v-timeline-item>
          <v-timeline-item>
            <v-card-title slot="opposite" class="text-h5">2014</v-card-title>
            <v-card-text>Tech support</v-card-text>
          </v-timeline-item>
          <v-timeline-item>
            <v-card-title slot="opposite" class="text-h5">2015</v-card-title>
            <v-card-text>Technical Consulting</v-card-text>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      images: [
        "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1630554630/Civilians/clark.wedding-3174_p2riwn.jpg",
        "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1630554628/Civilians/clark.wedding-3171_cqazlh.jpg",
      ],
    };
  },
};
</script>

<style></style>
