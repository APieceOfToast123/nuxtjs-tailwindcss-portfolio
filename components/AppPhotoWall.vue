<template>
    <section class="photo-wall py-20 bg-transparent">
        <div class="container mx-auto">
            <!-- Title -->
            <div class="text-center mb-8">
                <h2 class="text-white text-4xl font-bold">Offline Activity Record</h2>
            </div>

            <!-- Carousel -->
            <div class="carousel relative overflow-hidden">
                <button class="carousel-btn left-btn" @click="prevPhoto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button class="carousel-btn right-btn" @click="nextPhoto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Image with Transition -->
                <transition name="slide-fade" mode="out-in">
                    <img :key="currentPhoto.id" :src="currentPhoto.image" alt="Photo"
                        class="w-full h-[675px] object-cover absolute inset-0" />
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            photos: [
                { id: 1, image: '/Group1.jpg' },
                { id: 2, image: '/Group2.jpg' },
                { id: 3, image: '/Group3.jpg' },
            ],
            currentIndex: 0,
            autoScrollInterval: null,
        };
    },
    computed: {
        currentPhoto() {
            return this.photos[this.currentIndex];
        }
    },
    mounted() {
        if (process.client) {
            this.startAutoScroll();
        }
    },
    beforeDestroy() {
        clearInterval(this.autoScrollInterval); // 清除定时器防止内存泄漏
    },
    methods: {
        startAutoScroll() {
            this.autoScrollInterval = setInterval(() => {
                this.nextPhoto();
            }, 3500); // 每隔3500毫秒切换图片
        },
        nextPhoto() {
            this.currentIndex = (this.currentIndex + 1) % this.photos.length;
        },
        prevPhoto() {
            this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
        }
    }
};
</script>

<style scoped>
/* Carousel container */
.carousel {
    position: relative;
    width: 100%;
    height: 675px;
    overflow: hidden;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.2); /* 半透明的白色背景 */
  z-index: 1;
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 按钮阴影效果 */
}

.carousel-btn:hover {
  background-color: rgba(255, 255, 255, 0.5); /* 悬停时背景颜色加深 */
  transform: translateY(-50%) scale(1.1); /* 悬停时按钮放大 */
}

.left-btn {
  left: 1rem;
}

.right-btn {
  right: 1rem;
}

svg {
  width: 24px;
  height: 24px;
  stroke: white; /* 白色箭头图标 */
}

/* Slide-fade animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.8s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
}

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>