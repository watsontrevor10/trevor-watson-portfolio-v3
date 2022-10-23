<template>
  <v-card class="mb-14">
    <v-app-bar height="60" elevate-on-scroll fixed color="primary" app>
      <v-container>
        <v-row>
          <v-tabs background-color="primary" show-arrows>
            <v-tab to="/" nuxt>
              <nuxt-link to="/">
                <v-app-bar-title key="1">
                  <h3>Trevor Watson</h3>
                </v-app-bar-title>
              </nuxt-link>
            </v-tab>
            <v-tab to="/dev" nuxt>
              <v-list-item-title>
                <nuxt-link to="/dev" key="2"> Dev </nuxt-link>
              </v-list-item-title>
            </v-tab>
            <v-tab to="/music" nuxt>
              <v-list-item-title>
                <nuxt-link to="/music" key="3">Music</nuxt-link>
              </v-list-item-title>
            </v-tab>
            <v-tab to="/photo" nuxt>
              <v-list-item-title>
                <nuxt-link to="/photo" key="4">Photo</nuxt-link>
              </v-list-item-title>
            </v-tab>
            <v-tab to="/about" nuxt>
              <v-list-item-title>
                <nuxt-link to="/about" key="5">About Me</nuxt-link>
              </v-list-item-title>
            </v-tab>
          </v-tabs>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script></script>

<style></style>
