module.exports = {
  apps: [
    {
      name: "hurufnft-ui",
      script: "apps/ui/server.js",
      env: { PORT: 3000 }
    },
    {
      name: "hurufnft-api",
      script: "apps/api/index.js",
      env: { PORT: 3030 }
    }
  ]
};
