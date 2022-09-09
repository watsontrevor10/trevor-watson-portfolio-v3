<template>
  <v-container>
    <v-container>
      <PageTitle pageTitle="Contact Me" />
    </v-container>
    <v-container>
      <a href="https://www.linkedin.com/in/trevorjwatson/" target="_blank">
        <v-icon large color="info">mdi-linkedin</v-icon>
      </a>
      <a href="https://www.youtube.com/c/TrevorWatson10" target="_blank">
        <v-icon large color="info">mdi-youtube</v-icon>
      </a>
      <a href="https://twitter.com/trevdevbass" target="_blank">
        <v-icon large color="info">mdi-twitter</v-icon>
      </a>
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
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-form>
        </v-col>
        <v-col>
          <v-card flat>
            <v-card-text>Some stuff</v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
