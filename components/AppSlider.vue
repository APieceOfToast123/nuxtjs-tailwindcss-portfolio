<template>
    <section class="team-slider py-20 bg-transparent">
        <div class="container mx-auto">
            <!-- 标题 -->
            <div class="text-center mb-8">
                <h2 class="text-white text-4xl font-bold">Our Teams</h2>
            </div>

            <!-- 轮播图 -->
            <div ref="carousel" class="carousel flex overflow-x-scroll space-x-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
                <!-- 每个成员 -->
                <a v-for="member in teamMembers" :key="member.id"
                   :href="member.website ? member.website : null"
                   :class="{'cursor-pointer': member.website, 'cursor-default': !member.website}"
                   target="_blank"
                   class="w-[230px] h-[200px] bg-white shadow-lg rounded-lg flex flex-col justify-between p-4 snap-start">
                    <div class="w-full h-[150px]">
                        <img :src="member.image" alt="Team Member"
                             class="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div class="text-center mt-4">
                        <h3 class="text-md font-bold text-blue">{{ member.name }}</h3>
                        <p class="text-blue-850 text-sm">{{ member.role }}</p>
                    </div>
                </a>
            </div>

            <div class="text-center mt-8">
                <nuxt-link to="/about" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                    Learn More
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            teamMembers: [
                { id: 1, name: 'Zhang Chixue', role: 'Game Designer & Engineer', image: '/teams/ZhangChixue.jpg' },
                { id: 2, name: 'Zhu Lianjie', role: 'Game Designer & Engineer', image: '/teams/ZhuLianjie.jpg', website: 'http://www.reedzhu.com/' },
                { id: 3, name: 'Hong Shuo', role: 'Game Designer & Engineer', image: '/teams/HongShuo.jpg' },
                { id: 4, name: 'Qin Yuqi', role: 'Game Designer & Engineer', image: '/teams/QinYuqi1.jpg', website: 'https://qinyuqi.portfoliobox.net/' },
                { id: 5, name: 'Zhao Guoqiang', role: 'Game Designer & Engineer', image: '/teams/ZhaoGuoqiang.jpg'},
                // 更多成员
            ]
        }
    },
    mounted() {
        // 开始自动滚动
        this.startAutoScroll();
    },
    methods: {
        startAutoScroll() {
            const carousel = this.$refs.carousel;
            const card = carousel.children[0];
            const cardStyles = window.getComputedStyle(card);
            const cardWidth = card.offsetWidth;
            const cardMarginRight = parseInt(cardStyles.marginRight);
            const totalCardWidth = cardWidth + cardMarginRight;

            const totalCards = this.teamMembers.length;
            const visibleWidth = carousel.clientWidth;
            const cardsPerPage = Math.floor(visibleWidth / totalCardWidth) || 1; // 至少为1
            const scrollStep = cardsPerPage * totalCardWidth;

            let scrollPosition = 0;

            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

            const slideTimer = setInterval(() => {
                if (scrollPosition >= maxScrollLeft) {
                    // 滚动到末尾后，重置为开头
                    scrollPosition = 0;
                } else {
                    // 移动到下一个位置
                    scrollPosition += scrollStep;
                    if (scrollPosition > maxScrollLeft) {
                        scrollPosition = maxScrollLeft; // 不要滚动超过内容的末尾
                    }
                }

                carousel.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }, 2000); // 根据需要调整速度
        }
    }
}
</script>

<style scoped>
/* 隐藏滚动条 */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none; /* IE 和 Edge */
    scrollbar-width: none; /* Firefox */
}

/* 卡片容器 */
.carousel a {
    flex: none;
}

/* 标题和文字大小调整 */
h2 {
    font-size: 2.25rem; /* 相当于 text-4xl */
}

h3 {
    font-size: 1.125rem; /* 相当于 text-md */
}

p {
    font-size: 0.875rem; /* 相当于 text-sm */
}

/* 禁用点击时指针样式 */
.cursor-default {
    cursor: default;
}
</style>
