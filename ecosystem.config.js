module.exports = {
    apps: [{
      name        : "nuxt-app",
      cwd         : "/home/lighthouse/nuxtjs-tailwindcss-portfolio",
      script      : "/usr/bin/yarn",
      args        : "start",
      interpreter : "/bin/bash",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 8000
      }
    }]
  }
  