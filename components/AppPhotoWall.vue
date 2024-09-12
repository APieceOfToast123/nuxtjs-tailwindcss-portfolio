<template>
    <section class="photo-wall py-20 bg-transparent">
        <div class="container mx-auto">
            <!-- Title -->
            <div class="text-center mb-8">
                <h2 class="text-white text-4xl font-bold">Offline Activity Record</h2>
            </div>

            <!-- Carousel -->
            <div class="carousel relative overflow-hidden">
                <transition name="slide-fade" @after-leave="nextPhoto">
                    <img :key="currentPhoto.id" :src="currentPhoto.image" alt="Photo" class="w-full h-[675px] object-cover absolute inset-0" />
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
                // Add more photos as needed
            ],
            currentIndex: 0,
        }
    },
    computed: {
        currentPhoto() {
            return this.photos[this.currentIndex];
        }
    },
    mounted() {
        this.startAutoScroll();
    },
    methods: {
        startAutoScroll() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.photos.length;
            }, 3500);
        },
        nextPhoto() {
            // This method can be used to handle anything after the transition ends
        }
    }
}
</script>

<style scoped>
.carousel {
    position: relative;
    width: 100%;
    height: 675px; /* Increase the height to three times the previous height */
    overflow: hidden;
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity 1s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
}

/* Ensure images cover the full container */
img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>
