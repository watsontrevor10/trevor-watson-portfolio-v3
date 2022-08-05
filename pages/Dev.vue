<template>
  <b-container>
    <div class="textCenter">
      <h1>My Dev Projects</h1>
    </div>
    <b-card-group columns>
      <b-card
        v-for="(project, i) in projects"
        :key="i"
        :img-src="`${project.fields.mainImage.fields.file.url}`"
        img-top
      >
        <b-card-text>
          {{ project.fields.blurb }}
        </b-card-text>
        <div style="text-align: center">
          <nuxt-link :to="`${project.fields.slug}`">
            <b-button>See Project</b-button>
          </nuxt-link>
        </div>
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
