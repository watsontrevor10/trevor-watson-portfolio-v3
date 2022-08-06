<template>
  <b-container>
    <div class="textCenter spacedOut">
      <h1>My Music Projects</h1>
      <h5 class="textCenter">
        I work with a variety of bands and work on a number of musical projects.
        Check out my projects!
      </h5>
    </div>
    <b-tabs cards pills justified class="spacedOut">
      <div v-for="(video, i) in videos" :key="i">
        <b-tab :title="`${video.title}`">
          <h2 class="textCenter spacedOut">{{ video.title }}</h2>
          <div class="spacedOut">
            <p>{{ video.subtitle }}</p>
            <div class="textCenter">
              <b-link :href="`${video.url}`">
                <b-button variant="outline-primary" class="spacedOut">
                  {{ video.urlText }}
                </b-button>
              </b-link>
            </div>
          </div>
          <div
            class="textCenter videoContainer"
            v-if="`${video.type === 'video'}`"
          >
            <iframe
              width="1000em"
              height="550em"
              :src="`${video.src}`"
              :title="`${video.title}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="textCenter videoContainer" v-else>
            <b-img-lazy :src="`${video.src}`" fluid-grow></b-img-lazy>
          </div>
        </b-tab>
      </div>
    </b-tabs>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          title: "Mini Bass Grooves",
          type: "video",
          subtitle:
            "I record and post weekly bass grooves for #musicMonday. This keeps me practicing, and I've come to really enjoy the process.",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnGgW2JTty_ytboYpVCT1rWJ",
          url: "https://www.youtube.com/c/TrevorWatson10",
          urlText: "See More Videos",
        },
        {
          title: "3# Jazz Trio",
          type: "video",
          subtitle:
            "3# is a jazz trio that me and two friends put together years ago. We play weddings, corporate events and other parties.",
          src: "https://www.youtube.com/embed/YBFQ2aVHFZ4",
          url: "https://www.threesharp.com/",
          urlText: "3# Website",
        },
        {
          title: "The Civilians",
          type: "photo",
          subtitle:
            "The Civilians Band is comprised of Army musicians who wanted to continue to play and perform outside of the military. We play covers of rock, pop, and country from every decade of rock 'n roll",
          src: "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1630554638/Civilians/clark.wedding-2477_ax3vjn.jpg",
          url: "https://www.theciviliansband.com/",
          urlText: "Civilians Website",
        },
        {
          title: "23rd Army Band",
          type: "video",
          subtitle:
            "I have been a member of the 23rd Army Band for over a decade. I perform in a number of musical ensembles and styles, but my primary is in the rock band Article 15.",
          src: "https://www.youtube.com/embed/QEFXoevqiZQ",
          url: "",
          urlText: "Check out Facebook page",
        },
        {
          title: "Bass Solos",
          type: "video",
          subtitle:
            "I love improvisation, so sometimes I mess around with solos.",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnF_VwKZ4GjcVdUj_pDYukxY",
          url: "https://www.youtube.com/c/TrevorWatson10",
          urlText: "See more videos",
        },
        {
          title: "Collaborations",
          type: "video",
          subtitle:
            "Occasionally I get to collaborate with different artists and jam out.",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnFgFmKEglBHxq-eOgyufHfZ",
          url: "https://www.youtube.com/c/TrevorWatson10",
          urlText: "See more videos",
        },
      ],
    };
  },
};
</script>

<style>
.videoContainer {
  margin: 0 auto;
}

hr {
  border: 1px solid blue;
  margin-top: 2.5em;
}
</style>
