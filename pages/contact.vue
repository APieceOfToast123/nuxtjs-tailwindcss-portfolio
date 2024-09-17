<template>
  <section class="contact-section flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 lg:px-32">
    <!-- QR Code on the left -->
    <div class="qr-code-container w-full md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-12">
      <div class="qr-code-bg p-4 bg-white rounded-lg shadow-lg">
        <img src="/QRcode.jpg" alt="QR Code" class="qr-code object-contain" />
      </div>
    </div>

    <!-- Welcome message on the right -->
    <div class="welcome-text w-full md:w-2/3 flex flex-col items-start">
      <h2 class="text-3xl font-bold mb-4 text-white">Feel Free to Contact Me!</h2>
      <p class="text-lg mb-2 text-white">
        We are always excited to connect with creative minds. Whether you're a game developer, artist, or designer, we would love to see what you've been working on.
      </p>
      <p class="text-lg mb-2 text-white">
        Don't forget to bring your portfolio. It's a great opportunity to showcase your skills and share your passion with us!
      </p>
      <p class="text-lg mb-2 text-white">
        Feel free to reach out via email or drop by our office. Let's collaborate and make amazing games together!
      </p>
      <p class="text-lg mb-2 text-white">
        Looking forward to hearing from you soon!
      </p>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: transparent; /* Transparent background for section */
  padding-left: 1.5rem; /* Adjust padding for better responsiveness */
  padding-right: 1.5rem;
}

@media (min-width: 768px) {
  .contact-section {
    padding-left: 3rem; /* More padding on medium screens */
    padding-right: 3rem;
  }
}

@media (min-width: 1024px) {
  .contact-section {
    padding-left: 8rem; /* Larger padding for large screens */
    padding-right: 8rem;
  }
}

.qr-code-bg {
  background-color: #ffffff;
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.qr-code {
  width: 16rem; /* Size of the QR code */
  height: 16rem;
  border-radius: 0.5rem;
}

.welcome-text h2,
.welcome-text p {
  color: #ffffff; /* White font for welcome text */
}

.md\:mr-12 {
  margin-right: 3rem; /* Space between QR code and text */
}
</style>
