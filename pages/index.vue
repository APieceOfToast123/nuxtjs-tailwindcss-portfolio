<template>
  <div class="container mx-auto">
    <!-- App Banner -->
    <AppBanner />

    <!-- App Slider -->
    <AppSlider />

    <!-- Projects Grid -->
    <ProjectsGrid />

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink 
        to="/projects"
        class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
        aria-label="More Projects"
      >
        <Button title="More Projects" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import AppBanner from '@/components/shared/AppBanner.vue';
import AppSlider from '@/components/AppSlider.vue';
import Button from '@/components/reusable/Button.vue';

export default {
  components: {
    AppBanner, 
    AppSlider,
    Button,
  },
  data() {
    return {
      isTransitioning: false, // 动画过渡控制 (可选)
    };
  },
  watch: {
    // 监听路由变化 (可选，视项目需求)
    $route(to, from) {
      if (!this.isTransitioning) {
        this.isTransitioning = true;
        this.$nextTick(() => {
          this.isTransitioning = false; 
        });
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    // 立即允许离开页面，而不等待过渡动画结束
    next();
  },
};
</script>

<style scoped>
/* 样式保持不变 */
</style>
