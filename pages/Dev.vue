<template>
  <v-container>
    <PageTitle
      pageTitle="Dev Projects"
      pageSubtitle="I am a full-time web developer for my day job, and I am having a great
        time doing it."
    />
    <v-container>
      <p>
        Currently I am a software engineer at a Fintech company, where I focus
        primarily on reverse engineering and automation scripting.
      </p>
      <p>
        The list of projects below is mostly comprised of simple little projects
        that I've taken on for fun or for friends and family.
      </p>
      <p>
        You can check my professional credentials on
        <a href="https://www.linkedin.com/in/trevorjwatson/"><b>LinkedIn</b></a>
        and <a to="/about"><b>contact me</b></a> if you're interested in talking
        in more detail, or if you have a web project that you'd like to talk
        through.
      </p>
    </v-container>

    <v-container fluid>
      <v-row dense>
        <v-layout row wrap>
          <v-col cols="12" sm="6" v-for="(project, i) in projects" :key="i">
            <v-card>
              <v-img
                :src="`${project.fields.mainImage.fields.file.url}`"
              ></v-img>
              <v-card-title>
                <nuxt-link :to="`${project.fields.slug}`">{{
                  project.fields.projectName
                }}</nuxt-link>
              </v-card-title>
              <v-card-text>
                {{ project.fields.blurb }}
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="primary">
                  <nuxt-link :to="`${project.fields.slug}`"
                    >See Project</nuxt-link
                  >
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-layout>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import PageTitle from "../components/Page-Title.vue";
const client = createClient();

export default {
  name: "dev page",
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: "devProjects",
      }),
    ])
      .then(([entries]) => {
        return {
          projects: entries.items,
        };
      })
      .catch(console.error);
  },
  components: { PageTitle },
};
</script>

<style></style>
