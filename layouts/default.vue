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
    feather.replace();
    this.createBubbles(); 
  },
  methods: {
    createBubbles() {
      const bubbleContainer = document.querySelector(".bubble-background");
      const numBubbles = 5; // 泡泡数量减少
      const bubbles = [];

      for (let i = 0; i < numBubbles; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");

        // 设置随机的大小、位置和速度
        let size = Math.random() * 75 + 100; // 泡泡大小
        let x = Math.random() * window.innerWidth;
        
        // 泡泡在视窗底部以上1/3和以下1/2范围生成
        let y = window.innerHeight * (2 / 3) + Math.random() * (window.innerHeight / 2); 
        let velocityY = (Math.random() + 0.1) * -0.2; // 纵向速度（上升），减慢到原来的1/5

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        // 将泡泡和其属性存储到 bubbles 数组
        bubbles.push({ element: bubble, x, y, size, velocityY });

        bubbleContainer.appendChild(bubble);
      }

      this.animateBubbles(bubbles);
    },

    animateBubbles(bubbles) {
      const update = () => {
        bubbles.forEach((bubble, index) => {
          // 更新泡泡的位置
          bubble.y += bubble.velocityY;

          // 更新 DOM 中的位置
          bubble.element.style.left = `${bubble.x}px`;
          bubble.element.style.top = `${bubble.y}px`;

          // 当泡泡超出视窗顶部时，将其重新放置在底部
          if (bubble.y + bubble.size < 0) {
            bubble.y = window.innerHeight * (2 / 3) + Math.random() * (window.innerHeight / 2);
            bubble.x = Math.random() * window.innerWidth;
          }
        });

        requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    }
  },
  components: { AppFooter, BackToTop, AppHeader },
};
</script>

<style>
/* 背景渐变 */
.layout {
  background: linear-gradient(to bottom, #012c6d, #013480, #0064d6, #2f8df9);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden; /* 确保背景泡泡不会溢出页面 */
  z-index: 1; /* 内容在泡泡之上 */
}


.bubble-background {
  position: fixed; /* 固定在视窗 */
  bottom: 0; /* 泡泡从视窗底部开始生成 */
  left: 0;
  width: 100%;
  height: 100vh; /* 高度设置为视窗的高度 */
  z-index: -1; /* 泡泡位于内容下方 */
  overflow: hidden;
  pointer-events: none;
}

/* 背景泡泡 */
.bubble {
  position: absolute;
  bottom: -130px; /* 泡泡从视窗底部生成 */
  background: linear-gradient(to top, #adbfe6, #00008b);
  border-radius: 50%;
  opacity: 0.7;
  animation: rise infinite ease-in-out; 
  animation-duration: 60s; /* 上升动画时间设置为60秒，减慢速度 */
}

/* 泡泡上升动画 */
@keyframes rise {
  0% {
    transform: translateY(0);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-150vh); /* 泡泡上升的距离根据视窗高度 */
    opacity: 0;
  }
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
