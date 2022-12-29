<script setup lang="ts">
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const app = useAppConfig() as AppConfigInput

console.log(' app.name', app.name)
useHead({
  title: app.name,
  titleTemplate: '%s - 사이트',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt3 manager kit',
    },
  ],
})

onMounted(() => {
  appStore.initTheme()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
