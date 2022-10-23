<template>
  <v-container>
    <PageTitle
      pageTitle="Music Projects"
      pageSubtitle="I perform with a variety of bands and work on a number of musical projects.
        Check out some of my favorites below!"
    />

    <v-card flat>
      <v-tabs centered icons-and-text v-model="tab" show-arrows>
        <v-tab v-for="(video, i) in videos" :key="i" :href="`#tab-${i}`">{{
          video.title
        }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(video, i) in videos" :key="i" :value="`tab-${i}`">
          <v-card class="mx-auto my-6" width="1000" flat>
            <v-card-title class="text-h5 justify-center">{{
              video.title
            }}</v-card-title>
            <v-card-text class="text-body-1 my-3">{{
              video.subtitle
            }}</v-card-text>
            <div>
              <v-card-actions>
                <a :href="`${video.url}`" target="blank" class="mx-auto">
                  <v-btn color="primary">Explore More</v-btn>
                </a>
              </v-card-actions>
            </div>
            <v-container
              v-if="`${video.type === 'video'}`"
              class="videoContainer my-8"
            >
              <iframe
                class="video"
                :src="`${video.src}`"
                :title="`${video.title}`"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-container>
            <v-container v-else>
              <v-img :src="`${video.src}`" max-width="100%" contain></v-img>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import PageTitle from "../components/Page-Title.vue";
export default {
  data() {
    return {
      tab: null,
      videos: [
        {
          title: "Mini Bass Grooves",
          type: "video",
          genres: ["funk", "rock", "jazz", "bossa", "disco", "pop", "country"],
          subtitle:
            "I've been wanting to do more video content and play more bass, but it's been hard with the full-time job, kids, military service, etc. So I decided to record and post short weekly bass grooves for #musicMonday. This keeps me practicing, and I've come to really enjoy the process.",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnGgW2JTty_ytboYpVCT1rWJ",
          url: "https://www.youtube.com/c/TrevorWatson10",
          urlText: "See More Videos",
        },
        {
          title: "3# Jazz Trio",
          type: "video",
          genres: ["jazz"],
          subtitle:
            "3# is a jazz trio that me and two friends put together years ago. We play weddings, corporate events and other parties, mostly we just love jamming together and keeping the music alive!",
          src: "https://www.youtube.com/embed/YBFQ2aVHFZ4",
          url: "https://www.threesharp.com/",
          urlText: "3# Website",
        },
        {
          title: "The Civilians",
          type: "photo",
          genres: ["rock", "country", "pop"],
          subtitle:
            "The Civilians Band is comprised of my Army musician brothers who wanted to continue to play and perform outside of the military. We play covers of rock, pop, and country from every decade of rock 'n roll.",
          src: "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1630554638/Civilians/clark.wedding-2477_ax3vjn.jpg",
          url: "https://www.theciviliansband.com/",
          urlText: "Civilians Website",
        },
        {
          title: "23rd Army Band",
          type: "video",
          genres: ["rock", "country", "pop", "jazz", "classical"],
          subtitle:
            "I have been a member of the 23rd Army Band for over a decade. I perform in a number of musical ensembles and styles, but my primary is in the rock band Article 15.",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnHtzOPa9Yb7_7Lw7FAI5xGH",
          url: "https://www.facebook.com/23rdarmyband",
          urlText: "Check out Facebook page",
        },
        {
          title: "Bass Solos",
          type: "video",
          genres: ["jazz", "rock", "pop"],
          subtitle:
            "I love improvisation, so sometimes I mess around with soloing. It's not always perfect, but it's always unique, and it always represents my own flair and interpretation of music.",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnF_VwKZ4GjcVdUj_pDYukxY",
          url: "https://www.youtube.com/c/TrevorWatson10",
          urlText: "See more videos",
        },
        {
          title: "Collaborations",
          type: "video",
          genres: ["rock", "funk", "jazz"],
          subtitle:
            "Occasionally I get to collaborate with different artists and jam out. Sometimes we get together in the real world, and sometimes we jam remotely, either way it's always a pleasure to collaborate with great musicians.",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnFgFmKEglBHxq-eOgyufHfZ",
          url: "https://www.youtube.com/c/TrevorWatson10",
          urlText: "See more videos",
        },
      ],
    };
  },
  components: { PageTitle },
};
</script>

<style>
.videoContainer {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}

.video {
  position: absolute;
  top: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.photo {
  max-width: 100%;
  block-size: auto;
}

hr {
  border: 1px solid blue;
  margin-top: 2.5em;
}
</style>
