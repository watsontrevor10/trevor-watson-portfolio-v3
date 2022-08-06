<template>
  <b-container>
    <nuxt-link to="/dev">
      <b-button variant="outline-secondary" class="spacedOut">Back</b-button>
    </nuxt-link>
    <div>
      <h1>{{ fields.projectName }}</h1>
      <p>{{ fields.description.content[0].content[0].value }}</p>
      <div>
        <strong>Tech Stack:</strong>
        <div v-for="(stack, i) in fields.stack" :key="i">
          <code>{{ stack }}</code>
        </div>
      </div>
    </div>
    <b-carousel
      id="project-carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      max-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="spacedOut"
    >
      <b-carousel-slide
        v-for="(screenshot, i) in screenshots"
        :key="i"
        :img-src="`${screenshot.fields.file.url}`"
      ></b-carousel-slide>
    </b-carousel>
    <!-- <b-card :title="`${fields.projectName}`" :img-src="`${mainImage.file.url}`">
      <b-card-text>
        {{ fields.description.content[0].content[0].value }}
      </b-card-text>
    </b-card> -->
  </b-container>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  data() {
    return {
      slide: 0,
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
