<script setup lang="ts">
import { useAppStore } from '~/store/app'
const appStore = useAppStore()

onMounted(() => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
    appStore.changeTheme('dark')
  else appStore.changeTheme('light')
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
