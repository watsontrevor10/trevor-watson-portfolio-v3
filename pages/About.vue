<template>
  <v-container>
    <PageTitle
      pageTitle="About Me"
      pageSubtitle="Here are some more details about me and some ways you can contact me."
    />
    <v-container>
      <v-row class="mb-3 mt-1">
        <div class="justify-center" v-for="(links, i) in socialLinks" :key="i">
          <a :href="`${links.url}`" target="_blank" class="mx-4">
            <v-icon large color="info">{{ links.icon }}</v-icon>
            {{ links.name }}
          </a>
        </div>
      </v-row>
    </v-container>

    <v-container class="mt-4 mb-10">
      <v-row>
        <v-col cols="6">
          <v-form
            @submit="onSubmit"
            name="contactMe"
            netlify
            netlify-honeypot="bot-field"
          >
            <!-- Hidden input to check for bots -->
            <input type="hidden" name="form-name" value="contactMe" />
            <div id="name-group" label="Name" label-for="name">
              <v-text-field
                id="name"
                label="Name"
                v-model="form.name"
                required
              ></v-text-field>
            </div>
            <div id="email-group" label="Email Address" label-for="email">
              <v-text-field
                id="email"
                label="Email Address"
                v-model="form.email"
                type="email"
                required
              >
              </v-text-field>
            </div>
            <div id="request-group" label="Request" label-for="request">
              <v-textarea
                rows="3"
                label="Your Note"
                id="request"
                v-model="form.request"
                required
              ></v-textarea>
            </div>
            <v-btn type="submit" color="primary" class="mt-4">Submit</v-btn>
          </v-form>
        </v-col>
        <v-col cols="6">
          <v-card flat>
            <v-card-text
              >Feel free to reach out in any way that works best for
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
      </v-row>
    </v-container>
    <v-container>
      <v-card width="800" class="mx-auto">
        <v-card-title class="justify-center">My Story</v-card-title>
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
          name: "Patreon",
          url: "patreon.com/user?u=81529202",
          icon: "mdi-patreon",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/c/TrevorWatson10",
          icon: "mdi-youtube",
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
      alert(JSON.stringify(this.form));
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
