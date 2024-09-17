<script>
import AppBanner from "../components/shared/AppBanner.vue";
import AppPhotoWall from "../components/AppPhotoWall.vue";
import Button from "../components/reusable/Button.vue";

export default {
  scrollToTop: true,
  components: { AppBanner, AppPhotoWall, Button },
};
</script>

<template>
  <div class="container-wrapper">
    <div class="container mx-auto">
      <!-- 新板块：显示团队成员信息 -->
      <section class="team-members-section mt-12">
        <h2 class="text-center text-4xl font-bold text-primary-dark dark:text-primary-light mb-8">
          Team members
        </h2>

        <!-- 成员信息框 -->
        <div class="team-members-wrapper flex flex-col space-y-8">
          <div v-for="(member, index) in teamMembers" :key="member.id"
            class="member-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mx-auto w-full sm:w-3/4 lg:w-2/3 flex flex-col sm:flex-row items-center"
            :class="{ 'flex-row-reverse': index % 2 !== 0 }">
            
            <!-- 头像部分 -->
            <div class="w-full sm:w-1/3 text-center sm:text-left">
              <img :src="member.image" alt="成员图片" class="w-40 h-40 rounded-full mx-auto mb-6">
            </div>

            <!-- 内容部分 -->
            <div class="w-full sm:w-2/3 text-left mt-6 sm:mt-0">
              <h3 class="text-3xl font-bold text-primary-dark dark:text-primary-light">{{ member.name }}</h3>
              <p class="text-lg text-gray-600 dark:text-gray-400 mt-4">{{ member.title }}</p>
              <p class="mt-4 text-gray-500 dark:text-gray-400">{{ member.description }}</p>
              <div v-html="member.customContent" class="mt-4 text-gray-600 dark:text-gray-400"></div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container mx-auto">
      <AppPhotoWall />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 成员数据
      teamMembers: [
        {
          id: 1,
          name: 'Zhang Chixue',
          title: 'Technical Director',
          description: 'Love Genshin Impact and Black Myth: Wukong',
          image: '/teams/ZCXP.jpg',
          customContent: `
            <div>
            </div>`,
        },
        {
          id: 2,
          name: 'Zhu Lianjie',
          title: 'Game Designer & Engineer',
          description: '',
          image: '/teams/ZLJP.jpg',
          customContent: `
            <div>
              <p>I'm good at 3C</p>
              <a href="http://reedzhu.com" class="text-blue-500 hover:text-blue-700">View my portfolio</a>
            </div>`,
        },
        {
          id: 3,
          name: 'Hong Shuo',
          title: 'Game Designer & Engineer',
          description: '',
          image: '/teams/HSP.jpg',
          customContent: `
            <div>
              <p></p>
            </div>`,
        },
        { 
          id: 4, 
          name: 'Qin Yuqi', 
          title: 'Game Designer & Engineer', 
          description: '',
          image: '/teams/QYQP.jpg', 
          customContent: `
            <div>
              <p>I'm nerd</p>
              <p>I'm nerd</p>
              <p>I'm nerd</p>
              <p>I'm nerd</p>
              <p>I'm nerd</p>
              <p>I'm nerd</p>
              <a href="https://qinyuqi.portfoliobox.net/" class="text-blue-500 hover:text-blue-700">View my portfolio</a>
            </div>`,
        },
        { 
          id: 5, 
          name: 'Zhao Guoqiang', 
          title: 'Game Designer & Engineer', 
          description: '',
          image: '/teams/ZGQP.jpg',
          customContent: `
            <div>
              <p>I'm junior</p>
            </div>`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.team-members-section {
  background-color: transparent; /* 背景透明 */
  padding: 2rem 1rem;
}

.member-card {
  max-width: 800px; /* 限制每个卡片的最大宽度 */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

img {
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
}

/* 响应式调整：在小屏幕上保持列布局，大屏幕上交替布局 */
@media (min-width: 640px) {
  .member-card {
    flex-direction: row;
  }

  .member-card.flex-row-reverse {
    flex-direction: row-reverse;
  }
}
</style>
