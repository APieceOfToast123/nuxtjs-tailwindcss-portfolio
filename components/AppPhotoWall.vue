<template> 
    <section class="photo-wall py-20 bg-transparent">
        <div class="container mx-auto">
            <!-- Title -->
            <div class="text-center mb-8">
                <h2 class="text-white text-4xl font-bold">Offline Activity Record</h2>
            </div>

            <!-- Carousel -->
            <div class="carousel relative overflow-hidden">
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
                this.currentIndex = (this.currentIndex + 1) % this.photos.length;
            }, 3500); // 每隔3500毫秒切换图片
        },
        nextPhoto() {
            clearInterval(this.autoScrollInterval); // 清除旧的定时器
            this.startAutoScroll(); // 重新启动自动滚动
        }
    }
};
</script>

<style scoped>
.carousel {
    position: relative;
    width: 100%;
    height: 675px;
    overflow: hidden;
}

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
