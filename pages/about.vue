<script>
import AppBanner from "../components/shared/AppBanner.vue";
import AppPhotoWall from "../components/AppPhotoWall.vue";
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,
  components: { AppBanner, AppPhotoWall, Button },
};
</script>

<template>
  <div class="container mx-auto">
    <AppPhotoWall />
  </div>
</template>

<style scoped></style>
