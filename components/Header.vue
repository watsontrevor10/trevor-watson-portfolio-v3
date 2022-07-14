<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand key="1">
        <nuxt-link to="/">Trevor Watson</nuxt-link>
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item key="2">
          <nuxt-link to="/dev"> Dev </nuxt-link>
        </b-nav-item>
        <b-nav-item key="3">
          <nuxt-link to="/music"> Music </nuxt-link>
        </b-nav-item>
        <b-nav-item key="4">
          <nuxt-link to="/photo"> Photo </nuxt-link>
        </b-nav-item>
        <b-nav-item key="5">
          <nuxt-link to="/contact"> Contact </nuxt-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
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
