<template>
  <v-container>
    <div>
      <h1>Hi,</h1>
      <h4>my name is</h4>
      <h1>Trevor Watson</h1>
    </div>
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
    <div>
      <h3>I’m a professional software engineer and musician.</h3>
      <div>
        <p>This is where I share some of the projects that I'm working on.</p>
        <p>
          Between my full-time work as a
          <nuxt-link to="/dev">software developer</nuxt-link>, my part-time work
          as a <nuxt-link to="/music">gigging</nuxt-link> and Army musician or
          just taking <nuxt-link to="/photo">pictures</nuxt-link> of my
          adventures there is a lot variation in the types of projects I take
          on. I want to share what I'm working on here, and hope that you find
          some value in it!
        </p>
        <p>
          Feel free to reach out with questions or if you just want to chat!
        </p>
      </div>
    </div>
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
