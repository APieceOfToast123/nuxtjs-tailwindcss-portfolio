<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project" class="relative">
      <!-- 视频板块，仅当 project.video 存在时显示 -->
      <div v-if="project.video" class="video-container w-full sm:w-4/5 mx-auto mb-8 relative">
        <video controls autoplay loop muted class="w-full rounded-lg shadow-lg">
          <source :src="project.video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <!-- Project heading and meta info -->
        <div class="absolute top-0 left-0 w-full p-4 bg-transparent">
          <p class="
              font-general-medium
              text-left text-3xl
              sm:text-4xl
              font-bold
              text-primary-dark
              dark:text-primary-light
              mb-4
            ">
            {{ project.title }}
          </p>
          <div class="flex">
            <div class="flex items-center mr-10">
              <i data-feather="clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
              <span class="
                  font-general-medium
                  ml-2
                  leading-none
                  text-primary-dark
                  dark:text-primary-light
                ">{{ project.publishDate }}</span>
            </div>
            <div class="flex items-center">
              <i data-feather="tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
              <span class="
                  font-general-medium
                  ml-2
                  leading-none
                  text-primary-dark
                  dark:text-primary-light
                ">{{ project.tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-6 mb-2">
        <div class="mb-6 sm:mb-0" v-for="projectImage in project.projectImages" :key="projectImage.id">
          <img :src="projectImage.img" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" />
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <div class="mb-7">
            <p class="
                font-general-medium
                text-2xl text-secondary-dark
                dark:text-secondary-light
                mb-2
              ">
              {{ project.clientTitle }}
            </p>
            <ul class="leading-loose">
              <li v-for="info in project.companyInfos" :key="info.id" class="
                  font-general-regular
                  text-ternary-dark
                  dark:text-ternary-light
                ">
                <span>{{ info.title }}: </span>
                <a href="#" :class="info.title == 'Website' || info.title == 'Phone'
                  ? 'hover:underline cursor-pointer'
                  : ''
                  " aria-label="Project website and phone">{{ info.details }}</a>
              </li>
            </ul>
          </div>

          <!-- Single project technologies -->
          <div class="mb-7">
            <p class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              ">
              {{ project.techTitle }}
            </p>
            <p class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
                text-lg
              ">
              {{ project.technologies.join(", ") }}
            </p>
          </div>

          <!-- Single project objectives -->
          <div class="mb-7">
            <p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {{ project.objectivesTitle }}
            </p>
            <p class="font-general-regular text-primary-dark dark:text-ternary-light text-lg"
              v-html="project.objectivesDetails" style="line-height: 1.5;">
            </p>
          </div>


          <!-- Single project social sharing -->
          <div>
            <p class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              ">
              {{ project.socialTitle }}
            </p>
            <div class="flex items-center gap-3 mt-5">
              <a v-for="social in project.socialSharings" :key="social.id" :href="social.url" target="__blank"
                aria-label="Share Project" class="
                  bg-ternary-light
                  dark:bg-ternary-dark
                  text-gray-400
                  hover:text-primary-dark
                  dark:hover:text-primary-light
                  p-2
                  rounded-lg
                  shadow-sm
                  duration-500
                "><i :data-feather="social.icon" class="w-4 lg:w-5 h-4 lg:h-5"></i></a>
            </div>
          </div>
        </div>

        <!-- Single project right section details -->
        <div class="single-project-right w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <div v-if="project.playableLink" class="mt-4">
            <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
              Playable Link: 
              <a :href="project.playableLink" target="__blank" class="text-indigo-500">{{ project.playableLink }}</a>
            </p>
          </div>

          <!-- Original content -->
          <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
            style="line-height: 0.7;">
            {{ project.detailsTitle }}
          </p>
          <p v-for="projectDetail in project.projectDetails" :key="projectDetail.id"
            class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            v-html="projectDetail.details">
          </p>


          <!-- Instruction Section -->
          <div class="mt-10">
            <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
              Instruction
            </p>
            <ul class="pl-5 space-y-3">
              <li v-for="instruction in project.instructionDetails" :key="instruction.id" :class="[
                'font-general-regular text-lg text-ternary-dark dark:text-ternary-light',
                instruction.isHeading ? 'font-bold text-xl list-none' : 'list-disc',
              ]">
                {{ instruction.details }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Project related projects -->
      <ProjectRelatedProjects />

      <!-- Comments section -->
      <div class="
          mt-6
          pt-6
          sm:pt-10 sm:mt-14
          border-t-2 border-primary-light
          dark:border-secondary-dark
        ">
        <h3 class="mt-6 font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-4">
          Leave a Comment
        </h3>

        <!-- Comment form -->
        <form @submit.prevent="submitComment" class="mb-10">
          <div class="mb-4">
            <label for="name" class="block text-lg text-primary-dark dark:text-primary-light mb-2">Name:</label>
            <input v-model="newComment.name" type="text" id="name" required
              class="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Your Name" />
          </div>

          <div class="mb-4">
            <label for="comment" class="block text-lg text-primary-dark dark:text-primary-light mb-2">Comment:</label>
            <textarea v-model="newComment.comment" id="comment" required
              class="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Your Comment" rows="4"></textarea>
          </div>

          <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md">Submit
            Comment</button>
        </form>

        <!-- Display submitted comments -->
        <div v-if="comments.length">
          <h4 class="font-general-medium text-primary-dark dark:text-primary-light text-xl font-bold mb-4">
            Comments
          </h4>
          <div v-for="(comment, index) in comments" :key="index"
            class="mb-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-700">
            <p class="text-lg text-primary-dark dark:text-primary-light"><strong>{{ comment.name }}</strong> says:</p>
            <p class="text-lg text-ternary-dark dark:text-ternary-light">{{ comment.comment }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
import ProjectRelatedProjects from "../../components/projects/ProjectRelatedProjects.vue";

export default {
  scrollToTop: true,
  data() {
    return {
      newComment: {
        name: "",
        comment: "",
      },
      comments: [], // 存储评论的数组
    };
  },
  computed: {
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
  },
  methods: {
    submitComment() {
      // 确保 newComment 对象存在并且有值
      if (this.newComment && this.newComment.name && this.newComment.comment) {
        // 将评论添加到评论列表
        this.comments.push({ ...this.newComment });
        // 清空输入框
        this.newComment = { name: "", comment: "" };
      } else {
        alert("Please fill out both the name and comment fields."); // 如果表单未填写
      }
    },
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  components: { ProjectRelatedProjects },
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

.video-container video {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.video-container .absolute {
  padding-top: 20px;
  /* 上方 padding */
  padding-left: 20px;
  padding-right: 20px;
}

.text-sm {
  font-size: 0.875rem;
}

form input {
  width: 20%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

form button {
  background-color: #4f46e5;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #4338ca;
}

.comment-section {
  margin-top: 30px;
}
</style>