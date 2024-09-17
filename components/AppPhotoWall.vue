<template>
    <section class="photo-wall py-20 bg-transparent">
      <div class="container mx-auto">
        <!-- Title -->
        <div class="text-center mb-8">
          <h2 class="text-white text-4xl font-bold">Offline Activity Record</h2>
        </div>
  
        <!-- Carousel -->
        <div class="carousel relative overflow-hidden">
          <!-- Left Button -->
          <button class="carousel-btn left-btn" @click="prevPhoto">
            &#8249;
          </button>
  
          <!-- Right Button -->
          <button class="carousel-btn right-btn" @click="nextPhoto">
            &#8250;
          </button>
  
          <!-- Image with Transition -->
          <transition name="slide-fade" mode="out-in">
            <img 
              :key="currentPhoto.id" 
              :src="currentPhoto.image" 
              alt="Photo"
              class="w-full h-[675px] object-cover absolute inset-0" 
            />
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
  
  /* Button styles */
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
    border: none;
    color: white;
    padding: 1rem;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    z-index: 10; /* 确保按钮在图片上方 */
  }
  
  .carousel-btn:hover {
    background-color: rgba(0, 0, 0, 0.7); /* 鼠标悬停时更暗的背景 */
  }
  
  /* Left button */
  .left-btn {
    left: 1rem;
  }
  
  /* Right button */
  .right-btn {
    right: 1rem;
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
  