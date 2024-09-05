<template>
  <div class="layout">
    <!-- App header -->
    <AppHeader />

    <!-- Render contents with transition -->
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>

    <!-- App footer -->
    <AppFooter />

    <!-- Go back to top when scrolled down -->
    <div class="back-to-top">
      <BackToTop />
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
import AppHeader from "../components/shared/AppHeader.vue";
import AppFooter from "../components/shared/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";

export default {
  mounted() {
    feather.replace();
  },
  components: { AppFooter, BackToTop, AppHeader },
};
</script>

<style>
.layout {
  background: linear-gradient(to bottom, #013480, #0064d6); 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
}

.vue-back-to-top {
  @apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

.back-to-top {
  display: flex;
  space-x: 2;
  margin-right: 2rem;
  margin-bottom: 1.5rem;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 50;
  align-items: center;
  @media (min-width: 640px) {
    space-x: 4;
  }
}
</style>
