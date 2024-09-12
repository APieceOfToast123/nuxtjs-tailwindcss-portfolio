<template>
  <section class="contact-section flex flex-col md:flex-row items-center justify-between py-12 px-12">
    <!-- QR Code on the left -->
    <div class="qr-code-container w-full md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-12">
      <div class="qr-code-bg p-4 bg-white rounded-lg">
        <img src="/QRcode.jpg" alt="QR Code" class="w-64 h-64 object-contain" />
      </div>
    </div>

    <!-- Welcome message on the right -->
    <div class="welcome-text w-full md:w-2/3 flex flex-col items-start">
      <h2 class="text-3xl font-bold mb-4">Feel Free to Contact Me!</h2>
      <p class="text-lg mb-2">We are always excited to connect with creative minds. Whether you're a game developer, artist, or designer, we would love to see what you've been working on.</p>
      <p class="text-lg mb-2">Don't forget to bring your portfolio. It's a great opportunity to showcase your skills and share your passion with us!</p>
      <p class="text-lg mb-2">Feel free to reach out via email or drop by our office. Let's collaborate and make amazing games together!</p>
      <p class="text-lg mb-2">Looking forward to hearing from you soon!</p>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: transparent; /* Transparent background */
  padding-left: 25rem; /* Increase left padding */
  padding-right: 21rem; /* Increase right padding */
}

.qr-code-bg {
  background-color: #ffffff; /* White background for QR code */
  border-radius: 8px; /* Rounded corners */
}

.qr-code img {
  width: 16rem; /* Larger QR code */
  height: 16rem;
  border-radius: 8px;
}

.welcome-text h2, .welcome-text p {
  color: #ffffff; /* White font color */
}

.md\:mr-12 {
  margin-right: 3rem; /* Adjust spacing between QR code and text */
}
</style>
