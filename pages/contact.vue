<template>
  <section class="contact-section flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 lg:px-32">
    <!-- QR Code on the left -->
    <div class="qr-code-container w-full md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-12">
      <div class="qr-code-bg p-4 bg-white rounded-lg shadow-lg relative">
        <!-- 左边二维码卡片 -->
        <div class="qr-card" ref="leftCard" @click="flip('left')">
          <img src="/CZCQRCode.jpg" alt="CZC QR Code" class="qr-code-img">
        </div>
        <!-- 右边二维码卡片 -->
        <div class="qr-card" ref="rightCard" @click="flip('right')">
          <img src="/ZGQQRCode.jpg" alt="ZGQ QR Code" class="qr-code-img">
        </div>
      </div>
    </div>

    <!-- Welcome message on the right -->
    <div class="welcome-text w-full md:w-2/3 flex flex-col items-start">
      <h2 class="text-3xl font-bold mb-4 text-white">Feel Free to Contact Us!</h2>
      <p class="text-lg mb-2 text-white">
        We are always excited to connect with creative minds. Whether you're a game developer, artist, or designer, we
        would love to see what you've been working on.
      </p>
      <p class="text-lg mb-2 text-white">
        Don't forget to bring your portfolio. It's a great opportunity to showcase your skills and share your passion
        with us!
      </p>
      <p class="text-lg mb-2 text-white">
        Feel free to reach out via email or drop by our office. Let's collaborate and make amazing games together!
      </p>
      <p class="text-lg mb-2 text-white">
        Looking forward to hearing from you soon!
      </p>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      activeCard: "left", // 当前在上方的卡片
    };
  },
  methods: {
    flip(card) {
      if (card === this.activeCard) return; // 如果点击的是当前顶部的卡片，则不执行任何操作

      if (card === "left") {
        this.activeCard = "left";
        this.flipCards(this.$refs.rightCard, this.$refs.leftCard);
      } else if (card === "right") {
        this.activeCard = "right";
        this.flipCards(this.$refs.leftCard, this.$refs.rightCard);
      }
    },
    flipCards(bottomCard, topCard) {
      // 将底部卡片移到左侧（显示完整）
      gsap.to(bottomCard, {
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onStart: () => {
          bottomCard.style.zIndex = 2; // 提升底部卡片的层级
          topCard.style.zIndex = 1;
        },
      });

      // 将顶部卡片移到右侧（露出一点）
      gsap.to(topCard, {
        x: 20, // 向右偏移，露出一点
        duration: 0.5,
        ease: "power2.inOut",
      });

      // 调整阴影效果
      gsap.to(bottomCard, {
        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(topCard, {
        boxShadow: "none",
        duration: 0.5,
        ease: "power2.inOut",
      });
    },
  },
};
</script>

<style scoped>
.contact-section {
  background-color: transparent;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 768px) {
  .contact-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media (min-width: 1024px) {
  .contact-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}

.qr-code-bg {
  background-color: transparent;
  border-radius: 0.5rem;
  position: relative;
  width: 16rem;
  height: 16rem;
}

.qr-card {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  transform: translateX(0); /* 初始位置 */
}

.qr-card:nth-child(1) {
  z-index: 2; /* 初始在上方的卡片 */
}

.qr-card:nth-child(2) {
  z-index: 1;
  transform: translateX(20px); /* 底部卡片初始向右偏移，露出一点 */
}

.qr-code-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.welcome-text h2,
.welcome-text p {
  color: #ffffff;
}

.md\:mr-12 {
  margin-right: 3rem;
}
</style>
