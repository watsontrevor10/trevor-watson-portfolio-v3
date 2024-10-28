<template>
  <v-container>
    <v-container>
      <h1 class="text-h2 mb-4">Hi,</h1>
      <h4 class="text-h5 ml-10">my name is</h4>
      <h1 class="text-h2 my-6 ml-16">Trevor Watson</h1>
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
          >I’m a professional musician, software engineer, and music
          producer.</v-card-title
        >
        <div>
          <v-card-text
            >This is where I share some of the projects that I'm working
            on.</v-card-text
          >
          <v-card-text>
            I work on a variety of projects, from building websites like this
            and producing weekly YouTube bass videos, to producing music
            projects for a variety of local bands and artists I like to keep
            busy building cool things.
          </v-card-text>
          <v-card-text>
            Check out my projects in the tabs above, I try to keep things
            updated fairly regularly, but you can check my
            <a href="https://www.youtube.com/@TrevorWatsonBass">
              <b>
                <u>YouTube Channel</u>
              </b>
            </a>
            for more realtime updates.
          </v-card-text>
          <v-card-text>
            Feel free to
            <a href="/about"
              ><b>
                <u>reach out</u>
              </b>
            </a>
            with questions or if you just want to chat!
          </v-card-text>
        </div>
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
