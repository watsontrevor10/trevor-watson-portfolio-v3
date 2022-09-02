<template>
  <v-app-bar height="100" max-height="100" elevation="1" color="primary">
    <nuxt-link to="/">
      <v-app-bar-title key="1" href="/">Trevor Watson</v-app-bar-title>
    </nuxt-link>
    <div>
      <nuxt-link to="/dev">
        <a key="2" href="/dev">Dev</a>
      </nuxt-link>
      <nuxt-link to="/music">
        <a key="3" href="/music">Music</a>
      </nuxt-link>
      <nuxt-link to="/photo">
        <a key="4" href="/photo">Photo</a>
      </nuxt-link>
      <nuxt-link to="/contact">
        <a key="5" href="/contact">Contact</a>
      </nuxt-link>
    </div>
  </v-app-bar>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref["2"],
    };
  },
});
</script>

<style></style>
