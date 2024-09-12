<template>
    <section class="team-slider py-20 bg-transparent">
        <div class="container mx-auto">
            <!-- Title -->
            <div class="text-center mb-8">
                <h2 class="text-white text-4xl font-bold">Our Teams</h2>
            </div>

            <!-- Carousel -->
            <div class="carousel flex overflow-x-scroll space-x-4 scrollbar-hide">
                <!-- Each member -->
                <div v-for="member in teamMembers" :key="member.id"
                    class="w-[150px] h-[200px] bg-white shadow-lg rounded-lg flex flex-col justify-between p-4">
                    <div class="w-full h-[150px]">
                        <img :src="member.image" alt="Team Member"
                            class="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div class="text-center mt-4">
                        <h3 class="text-md font-bold text-blue">{{ member.name }}</h3>
                        <p class="text-blue-850 text-sm">{{ member.role }}</p>
                    </div>
                </div>
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
                { id: 2, name: 'Zhu Lianjie', role: 'Game Designer & Engineer', image: '/teams/ZhuLianjie.jpg' },
                { id: 3, name: 'Hong Shuo', role: 'Game Designer & Engineer', image: '/teams/HongShuo.jpg' },
                { id: 4, name: 'Qin Yuqi', role: 'Game Designer & Engineer', image: '/teams/QinYuqi1.jpg' },
                { id: 5, name: 'Zhao Guoqiang', role: 'Game Designer & Engineer', image: '/teams/ZhaoGuoqiang.jpg' },
                // { id: 6, name: 'Frank', role: 'Game Developer', image: '/QinYuqi2.jpg' },
                // { id: 7, name: 'Grace', role: '3D Artist', image: '/QinYuqi2.jpg' },
                // { id: 8, name: 'Hank', role: 'Game Designer', image: '/QinYuqi2.jpg' },
                // { id: 9, name: 'Ivy', role: 'Sound Designer', image: '/QinYuqi2.jpg' },
                // { id: 10, name: 'Jack', role: 'Project Manager', image: '/QinYuqi2.jpg' },
                // { id: 11, name: 'CZC', role: 'Project Manager', image: '/QinYuqi2.jpg' }
            ]
        }
    }
}
</script>

<style scoped>
/* Hide the scrollbar */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    /* Internet Explorer, Edge */
    scrollbar-width: none;
    /* Firefox */
}

/* Card container */
.carousel div {
    flex: none;
}

/* Title and text size adjustments */
h2 {
    font-size: 2.25rem; /* Equivalent to text-4xl */
}

h3 {
    font-size: 1.125rem; /* Equivalent to text-md */
}

p {
    font-size: 0.875rem; /* Equivalent to text-sm */
}
</style>
