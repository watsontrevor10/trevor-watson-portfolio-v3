<template>
  <v-container>
    <PageTitle
      pageTitle="About Me"
      pageSubtitle="Here are some more details about me and some ways you can contact or support me."
    />

    <v-container class="mt-4 mb-10">
      <v-row>
        <v-layout row wrap>
          <v-col>
            <v-card flat>
              <v-card-text
                >Feel free to reach out in any way below that works best for
                you!</v-card-text
              >
              <v-card-text
                >If you enjoy the creative projects I'm working on, you can also
                support my creative endeavors on Patreon.</v-card-text
              >
              <v-card-text>
                I hope that you'll keep in touch and let me know what you think,
                or reach out for collaborations or development projects.
              </v-card-text>
            </v-card>
          </v-col>
        </v-layout>
      </v-row>
    </v-container>

    <v-container class="mb-10">
      <v-row class="justify-center">
        <div class="justify-center" v-for="(links, i) in socialLinks" :key="i">
          <a :href="`${links.url}`" target="_blank" class="mx-4">
            <v-icon large color="info">{{ links.icon }}</v-icon>
            {{ links.name }}
          </a>
        </div>
      </v-row>
    </v-container>

    <!-- bio timeline -->
    <v-container>
      <v-card width="800" class="mx-auto">
        <v-card-title class="justify-center">My Story</v-card-title>
        <v-timeline>
          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">1997</v-card-title>
            <v-card-text>Began learning bass guitar from my dad</v-card-text>
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">1999</v-card-title>
            <v-card-text
              >Learned basic HTML and built my epic Starcraft clan page - no
              longer available :(</v-card-text
            >
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">2001</v-card-title>
            <v-card-text
              >Started studying jazz improvisation and upright bass</v-card-text
            >
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">2004</v-card-title>
            <v-card-text
              >Began studying music at Mesa Community College, with a focus on
              jazz improvisation</v-card-text
            >
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">2008</v-card-title>
            <v-card-text
              >Transferred to the music program at Brigham Young
              University</v-card-text
            >
            <v-card-text
              >Began freelancing as a jazz bassist locally to help pay for
              college, and held other various jobs</v-card-text
            >
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">2009</v-card-title>
            <v-card-text
              >Enlisted in the Army and joined the 23rd Army Band as an Army
              musician</v-card-text
            >
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">2014</v-card-title>
            <v-card-text
              >After a longer-than-expected tenure, I finally graduated with my
              Bachelor of Arts in Music from Brigham Young
              University</v-card-text
            >
            <v-card-text
              >I also switched from a career in the service industry to work in
              tech support for a software company</v-card-text
            >
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">2015</v-card-title>
            <v-card-text
              >Moved into technical consulting as my day job, working with sales
              teams as a solutions consultant</v-card-text
            >
            <v-card-text
              >Myself and two friends decided to form a jazz trio, called 3#
              (pronounced Three Sharp)</v-card-text
            >
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">2019</v-card-title>
            <v-card-text
              >At this point I had changed companies a few times, and had worked
              in technical consulting in various capacities from solutions
              consulting to implementation consulting</v-card-text
            >
            <v-card-text
              >I decided to get out of consulting. I quit my job to do a coding
              boot camp at DevPoint Labs</v-card-text
            >
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">2020</v-card-title>
            <v-card-text
              >With the pandemic in full swing, I started an LLC and began
              trying to freelance as a web developer to build up my
              portfolio</v-card-text
            >
            <v-card-text
              >I began contracting, doing research and coding for a Fintech company called
              Atomic, and this eventually led me to accept a full-time position
              with them</v-card-text
            >
          </v-timeline-item>

          <v-timeline-item>
            <v-card-title class="text-h5 justify-center">Present</v-card-title>
            <v-card-text
              >I continue to work at Atomic as a software engineer; focused on
              reverse engineering and automation scripting, but also work on
              front-end and other projects</v-card-text
            >
            <v-card-text
              >I also continue to perform with the 23rd Army Band, 3# Jazz Trio,
              and take semi-frequent freelance gigs locally</v-card-text
            >
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import PageTitle from "../components/Page-Title.vue";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        request: "",
      },
      socialLinks: [
        {
          name: "YouTube",
          url: "https://www.youtube.com/c/TrevorWatson10",
          icon: "mdi-youtube",
        },
        {
          name: "Patreon",
          url: "https://www.patreon.com/user?u=81529202",
          icon: "mdi-patreon",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/trevdevbass/",
          icon: "mdi-instagram",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/trevorjwatson/",
          icon: "mdi-linkedin",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/trevdevbass",
          icon: "mdi-twitter",
        },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.request = "";
    },
  },
  components: { PageTitle },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
