<script>
import AppBanner from "../components/shared/AppBanner.vue";
import AppSlider from "../components/AppSlider.vue";
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,
  components: { AppBanner, AppSlider, Button },
};
</script>

<template>
  <div class="container mx-auto">
    <AppSlider />
  </div>
</template>

<style scoped></style>
