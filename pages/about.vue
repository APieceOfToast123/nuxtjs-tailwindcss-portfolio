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
          name: 'Chen Zhangchi',
          title: 'Technical Director',
          image: '/teams/ZCXP.jpg',
          customContent: `
          <div>
            <p class="my-2">Employed at a major game company in Shanghai.</p>
            <div class="mt-6">
              <h3>Previous experience</h3>
              <ul class="list-disc list-inside">
                <li class="my-2">Technical director for <em>Vision of Mana</em></li>
                <li class="my-2">Producer of the indie game <em>The Successor</em></li>
              </ul>
            </div>

            <!-- 游戏下载链接跳转 -->
            <div class="w-2/3 h-128 my-6 flex justify-center space-x-4 max-w-4xl mx-auto">
              <a href="https://genshin.hoyoverse.com/zh-cn/download" target="_blank">
                <img class="justify-center" src="/teams/info/CZC1.jpg" alt="Shanghai Game" class="w-1/3 cursor-pointer">
              </a>
              <a href="https://store.steampowered.com/app/2490990/Visions_of_Mana/?l=senglish" target="_blank">
                <img class="justify-center" src="/teams/info/CZC2.png" alt="Vision of Mana" class="w-1/3 cursor-pointer">
              </a>
            </div>

            <!-- 视频播放器 -->
            <p class="my-4"><em>The Successor's</em> Demo: </p>
            <div class="md-10 px-10 w-full mx-auto">
              <div class="relative w-full h-auto border border-gray-800 overflow-hidden video-container">
                <iframe 
                  class="w-full h-96"
                  src="https://player.bilibili.com/player.html?bvid=BV1Yq4y1K7og&cid=431548412&page=1" 
                  scrolling="no" 
                  border="0" 
                  frameborder="no" 
                  framespacing="0" 
                  allowfullscreen="true">
                </iframe>
              </div>
            </div>
          </div>`,

          mounted() {
            const video = document.querySelector('video');
            video.addEventListener('mouseenter', () => {
              video.play();
            });
            video.addEventListener('mouseleave', () => {
              video.pause();
              video.currentTime = 0;
            });
          },
        },
        {
          id: 2,
          name: 'Zhu Yunfeng',
          title: 'Game Designer & Engineer',
          image: '/teams/ZYFP.png',
          customContent: `
            <div>
              <p class="mt-2">Gamer & Learner</p>
              <p class="mt-2">Currently pursuing a Master of Arts in Design and Development of Digital Games at Columbia University.</p>
              <div class="mt-4">
                <p class="inline">👉</p>
                <a href="https://mark-zhu.myportfolio.com/" class="text-blue-500 hover:text-blue-700">View My Portfolio</a>
              </div>
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
              <p class="mt-2">Cozy Game Maker & King of Isekai Anime</p>
              <p class="mt-2">Love Cozy Games Like <em>Animal Crossing</em>, <em>Zelda</em>, <em>Stardew Valley</em>, <em>Rune Factory</em></p>
              <div>
                <div class="image-row">
                  <img src="/teams/info/QYQ1.png" alt="Image 1" class="qyq-image-row1" />
                  <img src="/images/profiles/TWFProfile.png" alt="Image 2" class="qyq-image-row1" />
                  </div>
                  <style scoped>
                  .image-row {
                    display: flex;
                    justify-content: space-between; 
                    align-items: center;
                    margin-top: 20px;
                    }
                    .qyq-image-row1 {
                      width: 48%; 
                      height: auto;
                      border-radius: 8px; 
                      }
                      </style>
                      </div>
                      <p class="my-4">Currently Grad First Year in USC Game Dev</p>
                      <div>
                        <div class="image-row">
                  <img src="/teams/info/QYQ3.jpg" alt="Image 3" class="qyq-image-row2" />
                  <img src="/teams/info/QYQ4.jpg" alt="Image 4" class="qyq-image-row2" />
                  <img src="/teams/info/QYQ5.jpg" alt="Image 5" class="qyq-image-row2" />
                  </div>
                  <style scoped>
                  .image-row {
                    display: flex;
                    justify-content: space-between; 
                    align-items: center;
                    margin-top: 20px;
                    }
                    .qyq-image-row2 {
                      width: 32%; 
                      height: auto;
                      border-radius: 8px; 
                      }
                      </style>
                      </div>           
                      <div class="mt-4">
                        <p class="inline">👉</p>
                        <a href="https://qinyuqi.portfoliobox.net/" class="text-blue-500 hover:text-blue-700">View My Portfolio</a>
                        </div>
                        </div>`,
        },
        {
          id: 5,
          name: 'Zhu Lianjie',
          title: 'Game Designer & Engineer',
          image: '/teams/ZLJP.jpg',
          customContent: `
                          <div class="mt-4">
                            <p class="inline">👉</p>
                            <a href="http://reedzhu.com" class="text-blue-500 hover:text-blue-700">View My Portfolio</a>
                          </div>`,
        },
        {
          id: 6,
          name: 'Zhao Guoqiang',
          title: 'Game Designer & Engineer',
          image: '/teams/ZGQP.jpg',
          customContent: `
          <div>
            <p>I'm junior</p>
            </div>`,
        },
      ],
      defaultImage: '/default-profile.jpg', // 替换为默认的占位图片路径
    };
  },
  beforeRouteLeave(to, from, next) {
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
        <div class="team-members-wrapper grid grid-cols-1 space-y-8">
          <div v-for="(member, index) in teamMembers" :key="member.id"
            class="member-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mx-auto w-full sm:w-3/4 lg:w-2/3 flex flex-col items-center">

            <!-- 上方区域：头像 + 主要信息 -->
            <div class="w-full flex justify-between items-center mb-6">
              <!-- 左侧矩形框 - 主要信息 -->
              <div class="w-2/3">
                <h3 class="text-3xl font-bold text-primary-dark dark:text-primary-light">{{ member.name }}</h3>
                <p v-if="member.title" class="text-lg text-gray-600 dark:text-gray-400 mt-4">{{ member.title }}</p>
              </div>
              <!-- 右侧圆形头像框 -->
              <div class="w-1/3 text-center">
                <img :src="member.image || defaultImage" alt="成员图片" class="w-32 h-32 rounded-full mx-auto">
              </div>
            </div>

            <!-- 下方区域：自定义内容或描述 -->
            <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div v-if="member.customContent" v-html="member.customContent" class="text-white-700 dark:text-gray-300">
              </div>
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
</style>