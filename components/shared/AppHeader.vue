<template>
  <header class="layout w-full">
    <!-- Header content -->
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="logo text-xl font-bold mb-4 md:mb-0">
        <NuxtLink to="/" class="text-current">WemaKeUgames</NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ml-auto">
          <NuxtLink to="/" class="text-lg text-current hover:text-orange-light font-bold">Home</NuxtLink>
          <NuxtLink to="/about" class="text-lg text-current hover:text-orange-light font-bold">Team</NuxtLink>
          <NuxtLink to="/projects" class="text-lg text-current hover:text-orange-light font-bold">Projects</NuxtLink>
          <NuxtLink to="/contact" class="text-lg text-current hover:text-orange-light font-bold">Contact</NuxtLink>
      </nav>

      <!-- Social icons -->
      <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        <a href="#" class="text-current hover:text-orange-light">
          <i class="feather-icon icon-twitter"></i>
        </a>
        <a href="#" class="text-current hover:text-orange-light">
          <i class="feather-icon icon-facebook"></i>
        </a>
        <a href="#" class="text-current hover:text-orange-light">
          <i class="feather-icon icon-linkedin"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  // Your script here if needed
};
</script>

<style scoped>
.layout {
  background: linear-gradient(to bottom, #ffd900, #f8ef91); 
  min-height: 1vh; /* Adjust this value as needed */
  height: auto;
  color: #073d74;
  width: 100%;
  box-sizing: border-box;
}

.layout .feather-icon {
  color: #ff7417;
}

.text-orange-light {
  color: #ff7417;
}

.logo a {
  border: 3px solid #073d74;
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #073d74;
  font-weight: bold;
}

nav a {
  font-weight: bold;
}
</style>
