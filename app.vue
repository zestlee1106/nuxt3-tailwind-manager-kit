<script setup lang="ts">
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
console.log('🚀 ~ file: app.vue:4 ~ appStore', appStore.isDark)

onMounted(() => {
  console.log('localStorage.theme', localStorage.theme)
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    appStore.changeTheme('dark')
  } else {
    appStore.changeTheme('light')
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
