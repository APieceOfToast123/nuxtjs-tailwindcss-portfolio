module.exports = {
  apps: [{
    name        : "nuxt-app",
    cwd         : "/home/lighthouse/nuxtjs-tailwindcss-portfolio",
    script      : "/home/lighthouse/.nvm/versions/node/v16.20.2/bin/yarn", 
    args        : "start",
    interpreter : "/bin/bash",
    env: {
      NODE_ENV: "production",
      HOST: "0.0.0.0",
      PORT: 3030
    }
  }]
}
