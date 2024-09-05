<template>
  <header class="layout">
    <!-- Header content -->
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <div class="logo text-xl font-bold">
        <NuxtLink to="/" class="text-current">WemaKeUgames</NuxtLink>
      </div>
      <nav class="flex space-x-4">
        <NuxtLink to="/" class="text-current hover:text-orange-light">Home</NuxtLink>
        <NuxtLink to="/about" class="text-current hover:text-orange-light">About</NuxtLink>
        <NuxtLink to="/projects" class="text-current hover:text-orange-light">Projects</NuxtLink>
        <NuxtLink to="/contact" class="text-current hover:text-orange-light">Contact</NuxtLink>
      </nav>
      <div class="flex items-center space-x-4">
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
  background: linear-gradient(to bottom, #ffd900, #fff36f); 
  min-height: 7vh;
  display: flex;
  flex-direction: column;
  color: #084a8b;
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
</style>
