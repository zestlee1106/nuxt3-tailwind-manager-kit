module.exports = {
  apps: [
    {
      name: 'nuxt-tailwind-manager-kit',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
