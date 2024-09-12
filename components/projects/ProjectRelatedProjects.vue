<script>
export default {
  data: () => {
    return {
      relatedProject: {
        relatedProjectsHeading: "Related Projects",
        relatedProjects: [
          {
            id: 1,
            title: "Mobile UI",
            img: require("@/static/images/mobile-project-1.jpg"),
          },
          {
            id: 2,
            title: "Web Application",
            img: require("@/static/images/web-project-1.jpg"),
          },
          {
            id: 3,
            title: "UI Design",
            img: require("@/static/images/ui-project-2.jpg"),
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: require("@/static/images/mobile-project-2.jpg"),
          },
        ],
      },
    };
  },
};
</script>

<template>
  <div
    class="
      mt-6
      pt-6
      sm:pt-10 sm:mt-14
    "
  >
    <p
      class="
        font-general-regular
        text-primary-dark
        dark:text-primary-light
        text-3xl
        font-bold
        mb-6
        sm:mb-10
        text-left
      "
    >
      {{ relatedProject.relatedProjectsHeading }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <div v-for="item in relatedProject.relatedProjects" :key="item.id">
        <img
          :src="item.img"
          class="rounded-xl cursor-pointer"
          :alt="item.title"
        />
      </div>
    </div>
  </div>
</template>
