<template>
  <div class="text-center">
    <h1 class="text-h3 mt-12 mb-6">{{ pageTitle }}</h1>
    <h5 class="text-subtitle-1 mb-8">
      {{ pageSubtitle }}
    </h5>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: String,
    pageSubtitle: String,
  },
};
</script>
