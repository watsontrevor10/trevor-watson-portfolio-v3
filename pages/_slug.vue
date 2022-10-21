<template>
  <v-container>
    <PageTitle
      :pageTitle="`${fields.projectName}`"
      :pageSubtitle="`${fields.description.content[0].content[0].value}`"
    />
    <v-row>
      <strong>Tech Stack:</strong>
      <div v-for="(stack, i) in fields.stack" class="mb-8 ml-2" :key="i">
        <v-chip color="primary" small>{{ stack }}</v-chip>
      </div>
    </v-row>
    <v-row>
      <v-btn color="primary" class="mb-8">
        <nuxt-link to="/dev"> Back </nuxt-link>
      </v-btn>
    </v-row>
    <v-row>
      <v-carousel id="project-carousel" cycle height="700">
        <v-carousel-item
          v-for="(screenshot, i) in screenshots"
          :key="i"
          :src="`${screenshot.fields.file.url}`"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  data() {
    return {
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },

  asyncData({ env, params }) {
    return Promise.all([
      client.getEntries({
        content_type: "devProjects",
      }),
    ])
      .then(([entries]) => {
        const project = entries.items.find(
          (x) => x.fields.slug === params.slug
        );
        const fields = project.fields;
        const mainImage = project.fields.mainImage.fields;
        const screenshots = project.fields.screenshots;
        console.log(screenshots);

        return {
          project,
          fields,
          mainImage,
          screenshots,
        };
      })
      .catch(console.error);
  },
};
</script>
