<template>
  <b-navbar fixed sticky type="dark" variant="dark">
    <nuxt-link to="/">
      <b-navbar-brand key="1" href="/"> Trevor Watson </b-navbar-brand>
    </nuxt-link>
    <b-navbar-nav>
      <nuxt-link to="/dev">
        <b-nav-item key="2" href="/dev">Dev</b-nav-item>
      </nuxt-link>
      <nuxt-link to="/music">
        <b-nav-item key="3" href="/music">Music</b-nav-item>
      </nuxt-link>
      <nuxt-link to="/photo">
        <b-nav-item key="4" href="/photo">Photo</b-nav-item>
      </nuxt-link>
      <nuxt-link to="/contact">
        <b-nav-item key="5" href="/contact">Contact</b-nav-item>
      </nuxt-link>
    </b-navbar-nav>
  </b-navbar>
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
