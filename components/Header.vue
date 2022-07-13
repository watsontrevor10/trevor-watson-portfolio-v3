<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-menu theme="dark" mode="horizontal">
        <a-menu-item key="1">
          <nuxt-link to="/">
            <h1 class="logo">Trevor Watson</h1>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="2">
          <nuxt-link to="/dev"> Dev </nuxt-link>
        </a-menu-item>
        <a-menu-item key="3">
          <nuxt-link to="/music"> Music </nuxt-link>
        </a-menu-item>
        <a-menu-item key="4">
          <nuxt-link to="/photo"> Photo </nuxt-link>
        </a-menu-item>
        <a-menu-item key="5">
          <nuxt-link to="/contact"> Contact </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
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

<style>
.logo {
  color: white;
}
</style>
