<template>
  <div class="layout">
    <!-- 背景动画容器 -->
    <div class="bubble-background"></div>

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
    this.$nextTick(() => {
      // 确保 DOM 已经完全渲染
      feather.replace();
      this.createBubbles();
    });
  },
  methods: {
    createBubbles() {
      const bubbleContainer = document.querySelector(".bubble-background");

      // 检查容器是否存在，防止 HierarchyRequestError
      if (!bubbleContainer) {
        console.error("找不到 .bubble-background 容器");
        return;
      }

      const numBubbles = 5;
      const bubbles = [];

      for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        // 随机大小和位置
        const size = Math.random() * 75 + 100;
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight * (2 / 3) + Math.random() * (window.innerHeight / 2);
        const velocityY = (Math.random() + 0.1) * -0.2;

        // 设置气泡样式
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        // 将气泡数据保存到数组
        bubbles.push({ element: bubble, x, y, size, velocityY });

        // 确保容器存在后附加气泡
        bubbleContainer.appendChild(bubble);
      }

      // 启动动画
      this.animateBubbles(bubbles);
    },

    animateBubbles(bubbles) {
      const update = () => {
        bubbles.forEach((bubble) => {
          // 更新气泡的位置
          bubble.y += bubble.velocityY;
          bubble.element.style.left = `${bubble.x}px`;
          bubble.element.style.top = `${bubble.y}px`;

          // 如果气泡超出屏幕顶部，重置它的位置
          if (bubble.y + bubble.size < 0) {
            bubble.y = window.innerHeight * (2 / 3) + Math.random() * (window.innerHeight / 2);
            bubble.x = Math.random() * window.innerWidth;
          }
        });

        // 循环动画
        requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    }
  },
  components: { AppFooter, BackToTop, AppHeader },
};
</script>

<style>
/* 布局样式 */
.layout {
  background: linear-gradient(to bottom, #012c6d, #013480, #0064d6, #2f8df9);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.bubble-background {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.bubble {
  position: absolute;
  bottom: -130px;
  background: linear-gradient(to top, #adbfe6, #00008b);
  border-radius: 50%;
  opacity: 0.7;
  animation: rise 45s infinite ease-in-out;
  will-change: transform, opacity;
}

@keyframes rise {
  0% {
    transform: translateY(0);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-150vh);
    opacity: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.back-to-top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 50;
  cursor: pointer;
}

.back-to-top:hover {
  background-color: #4f46e5;
}
</style>
