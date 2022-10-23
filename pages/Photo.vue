<template>
  <v-container>
    <PageTitle
      pageTitle="My Photos"
      pageSubtitle="Some of my favorite photos I've taken over the years"
    />
    <div class="mainContainer">
      <div v-for="(photo, i) in photos" :key="i" class="imgContainer">
        <img
          :src="`${photo.fields.images[0].url}`"
          :alt="`${photo.fields.meta}`"
          class="image"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import PageTitle from "../components/Page-Title.vue";
const client = createClient();

export default {
  name: "photo page",
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: "cloudinary",
      }),
    ])
      .then(([entries]) => {
        return {
          photos: entries.items,
        };
      })
      .catch(console.error);
  },
  components: { PageTitle },
};
</script>

<style>
.mainContainer {
  column-count: 3;
  -moz-column-count: 3;
  -webkit-column-count: 3;
  grid-gap: 0 0;
  line-height: 0;
}

.imgContainer {
  padding: 0;
  margin: 0;
  break-inside: avoid-column;
}

.image {
  width: 100% !important;
  height: 100% !important;
  margin-bottom: 0 !important;
}
</style>
