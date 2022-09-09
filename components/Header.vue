<template>
  <v-app-bar height="60" elevation="1" color="primary">
    <v-container>
      <v-row>
        <v-tabs background-color="primary">
          <!-- <v-col cols="2"> -->
          <v-tab>
            <v-app-bar-title key="1">
              <nuxt-link to="/">
                <h3>Trevor Watson</h3>
              </nuxt-link>
            </v-app-bar-title>
          </v-tab>
          <!-- </v-col> -->
          <!-- <v-col cols="10"> -->
          <v-tab>
            <v-list-item-title>
              <nuxt-link to="/dev">Dev</nuxt-link>
            </v-list-item-title>
          </v-tab>
          <v-tab>
            <v-list-item-title>
              <nuxt-link to="/music">Music</nuxt-link>
            </v-list-item-title>
          </v-tab>
          <v-tab>
            <v-list-item-title>
              <nuxt-link to="/photo">Photo</nuxt-link>
            </v-list-item-title>
          </v-tab>
          <v-tab>
            <v-list-item-title>
              <nuxt-link to="/contact">Contact</nuxt-link>
            </v-list-item-title>
          </v-tab>
          <!-- </v-col> -->
        </v-tabs>
      </v-row>
    </v-container>
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
