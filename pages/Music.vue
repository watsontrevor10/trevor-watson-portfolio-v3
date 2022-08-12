<template>
  <b-container>
    <div class="textCenter spacedOut">
      <h1>Music Projects</h1>
      <h5 class="textCenter spacedOut">
        I work with a variety of bands and work on a number of musical projects.
        Check out my projects!
      </h5>
    </div>
    <b-tabs cards pills justified>
      <hr />
      <div v-for="(video, i) in videos" :key="i">
        <b-tab :title="`${video.title}`">
          <h3 class="textCenter">{{ video.title }}</h3>
          <div class="spacedOut">
            <p>{{ video.subtitle }}</p>
            <b-row class="textCenter">
              <p class="listData">Genres:</p>
              <div v-for="(genre, i) in video.genres" :key="i" class="listData">
                <b-badge pill variant="info">{{ genre }}</b-badge>
              </div>
            </b-row>
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
          genres: ["funk", "rock", "jazz", "bossa", "disco", "pop", "country"],
          subtitle:
            "I've been wanting to do more video content, but it's been hard with the full-time job, kids, military service, etc. So I decided to record and post short weekly bass grooves for #musicMonday. This keeps me practicing, and I've come to really enjoy the process.",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnGgW2JTty_ytboYpVCT1rWJ",
          url: "https://www.youtube.com/c/TrevorWatson10",
          urlText: "See More Videos",
        },
        {
          title: "3# Jazz Trio",
          type: "video",
          genres: ["jazz"],
          subtitle:
            "3# is a jazz trio that me and two friends put together years ago. We play weddings, corporate events and other parties.",
          src: "https://www.youtube.com/embed/YBFQ2aVHFZ4",
          url: "https://www.threesharp.com/",
          urlText: "3# Website",
        },
        {
          title: "The Civilians",
          type: "photo",
          genres: ["rock", "country", "pop"],
          subtitle:
            "The Civilians Band is comprised of Army musicians who wanted to continue to play and perform outside of the military. We play covers of rock, pop, and country from every decade of rock 'n roll.",
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
          src: "https://www.youtube.com/embed/QEFXoevqiZQ",
          url: "",
          urlText: "Check out Facebook page",
        },
        {
          title: "Bass Solos",
          type: "video",
          genres: ["jazz", "rock", "pop"],
          subtitle:
            "I love improvisation, so sometimes I mess around with solos.",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnF_VwKZ4GjcVdUj_pDYukxY",
          url: "https://www.youtube.com/c/TrevorWatson10",
          urlText: "See more videos",
        },
        {
          title: "Collaborations",
          type: "video",
          genres: ["rock", "funk", "jazz"],
          subtitle:
            "Occasionally I get to collaborate with different artists and jam out. I love playing music, and sometimes we get together in the real world, but sometimes that's just not possible, so I love to do remote jams as well.",
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
