<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10
      px-4 sm:px-8
    "
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left sm:pr-8">
      <h1
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
        "
      >
        Hi, We Are WeMUG
      </h1>
      <p
        class="
          font-general-medium
          mt-4
          text-lg
          sm:text-base
          xl:text-lg
          text-center
          sm:text-left
          leading-relaxed
          text-gray-400
        "
      >
        A Game Development Group Organized by WKU Alumni, Determined to Help Each Other and Share Industry Information.
      </p>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right sm:pl-8">
      <img
        v-if="this.$colorMode.value == 'dark'"
        src="~/static/Group1.jpg"
        alt="Developer Dark"
        class="rounded-lg shadow-lg"
      />
      <img
        v-else
        src="~/static/Group1.jpg"
        alt="Developer Light"
        class="rounded-lg shadow-lg"
      />
    </div>
  </section>
</template>
