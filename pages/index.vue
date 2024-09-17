<script>
import AppBanner from "../components/shared/AppBanner.vue";
import AppSlider from "../components/AppSlider.vue";
import Button from "../components/reusable/Button.vue";

export default {
  scrollToTop: true,
  components: { AppBanner, AppSlider, Button },
  data() {
    return {
      isTransitioning: false, // 添加动画过渡控制
    };
  },
  watch: {
    // 监听路由变化，确保过渡动画结束后再执行跳转
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
    // 确保在离开路由前，先等待动画完成
    if (this.isTransitioning) {
      setTimeout(() => {
        next();
      }, 500); // 假设动画持续500ms
    } else {
      next();
    }
  },
};
</script>

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
        class="
          font-general-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-lg
          sm:text-xl
          duration-300
        "
        aria-label="More Projects"
        @click="handleNavigation" 
      >
        <Button title="More Projects" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleNavigation() {
      if (!this.isTransitioning) {
        this.isTransitioning = true; // 防止重复点击
        setTimeout(() => {
          this.isTransitioning = false;
        }, 1000); // 确保动画时间内不再重复点击
      }
    },
  },
};
</script>

<style scoped></style>
