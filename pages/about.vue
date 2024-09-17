<script>
import AppBanner from "../components/shared/AppBanner.vue";
import AppPhotoWall from "../components/AppPhotoWall.vue";
import Button from "../components/reusable/Button.vue";

export default {
  components: { AppBanner, AppPhotoWall, Button },
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
          customContent: ``,
        },
        {
          id: 2,
          name: 'Zhu Lianjie',
          title: 'Game Designer & Engineer',
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
          image: '/teams/HSP.jpg',
          customContent: ``,
        },
        {
          id: 4,
          name: 'Qin Yuqi',
          title: 'Game Designer & Engineer',
          image: '/teams/QYQP.jpg',
          customContent: `
            <div>
              <p>Cozy Game Maker & King of Isekai Anime</p>
              <p style="font-size: 0.8em;">Love Cozy Games Like <em>Animal Crossing</em>, <em>Zelda</em>, <em>Stardew Valley</em>, <em>Rune Factory</em></p>
              <div>
                <div class="image-row">
                  <img src="/teams/info/QYQ1.jpg" alt="Image 1" class="image" />
                  <img src="/teams/info/QYQ2.jpg" alt="Image 2" class="image" />
                </div>
                <style scoped>
                  .image-row {
                    display: flex;
                    justify-content: space-between; 
                    align-items: center;
                    margin-top: 20px;
                  }
                  .image {
                    width: 48%; 
                    height: auto;
                    border-radius: 8px; 
                  }
                </style>
              </div>
              <p>Currently Grad First Year in USC Game Dev</p>
              <img src="/teams/QYQP.jpg" alt="Image 2" class="image" />              
              <a href="https://qinyuqi.portfoliobox.net/" class="text-blue-500 hover:text-blue-700">View my portfolio</a>
            </div>`,
        },
        {
          id: 5,
          name: 'Zhao Guoqiang',
          title: 'Game Designer & Engineer',
          image: '/teams/ZGQP.jpg',
          customContent: `
            <div>
              <p>I'm junior</p>
            </div>`,
        },
        {
          id: 6,
          name: 'Zhu Yunfeng',
          title: 'Game Designer & Engineer',
          image: '/teams/ZYFP.png',
          customContent: `
            <div>
              <p>Gamer & Learner</p>
              <a href="https://mark-zhu.myportfolio.com/" class="text-blue-500 hover:text-blue-700">View my portfolio</a>
            </div>`,
        },
      ],
      defaultImage: '/default-profile.jpg', // 替换为默认的占位图片路径
    };
  },
  beforeRouteLeave(to, from, next) {
    // 立即跳转，不等待任何过渡动画或延迟
    next();
  }
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

            <div class="w-full">
              <!-- 头像部分 -->
              <div class="w-full sm:w-1/3 text-center sm:text-left">
                <img :src="member.image || defaultImage" alt="成员图片" class="w-45 h-45 rounded-full mx-auto mb-6">
              </div>
  
              <!-- 内容部分 -->
              <div class="w-full sm:w-2/3 text-left mt-6 sm:mt-0">
                <h3 class="text-3xl font-bold text-primary-dark dark:text-primary-light">{{ member.name }}</h3>
                <p v-if="member.title" class="text-lg text-gray-600 dark:text-gray-400 mt-4">{{ member.title }}</p>
                <p v-if="member.description" class="mt-4 text-gray-500 dark:text-gray-400">{{ member.description }}</p>
              </div>
            </div>

            <div v-if="member.customContent" v-html="member.customContent"
              class="w-full mt-4 text-gray-600 dark:text-gray-400">
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 图片墙 -->
    <div class="container mx-auto">
      <AppPhotoWall />
    </div>
  </div>
</template>


<style scoped>
.team-members-section {
  background-color: transparent;
  padding: 2rem 1rem;
}

.member-card {
  max-width: 1000px;
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

@media (min-width: 640px) {
  .member-card {
    flex-direction: row;
  }

  .member-card.flex-row-reverse {
    flex-direction: row-reverse;
  }
}
</style>
