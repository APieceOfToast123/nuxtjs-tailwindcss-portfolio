module.exports = {
  apps: [{
    name        : "nuxt-app",
    cwd         : "/home/lighthouse/nuxtjs-tailwindcss-portfolio",
    script      : "npm",
    args        : "start",
    env: {
      NODE_ENV: "production",
      HOST: "0.0.0.0",
      PORT: 3030
    }
  }]
}
