<template>
  <b-container>
    <div class="textCenter spacedOut">
      <h1>Dev Projects</h1>
    </div>
    <div>
      <p>
        I am a full-time web developer for my day job, and I am having a great
        time doing it.
      </p>
      <p>
        Most of my professional experience has been in backend development
        (stuff that doesn't end up being seen by a user), and so the lists of
        projects below is mostly comprised of simple little projects that I've
        taken on for fun or for friends and family.
      </p>
      <p>
        As time goes on I hope to grow the list of projects that I've worked on
        here, but you can check my professional credentials on
        <a href="https://www.linkedin.com/in/trevorjwatson/">LinkedIn</a> if
        you're interested in talking in more detail.
      </p>
    </div>
    <hr />
    <b-card-group columns class="spacedOut">
      <b-card
        v-for="(project, i) in projects"
        :key="i"
        :img-src="`${project.fields.mainImage.fields.file.url}`"
        img-top
      >
        <b-card-body>
          <div style="text-align: center">
            <b-link :to="`${project.fields.slug}`">
              <b-card-title>{{ project.fields.projectName }}</b-card-title>
            </b-link>
          </div>
          <b-card-text>
            {{ project.fields.blurb }}
          </b-card-text>
        </b-card-body>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
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
};
</script>

<style></style>
