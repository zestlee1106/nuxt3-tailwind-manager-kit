<script setup lang="ts">
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
</script>

<template>
  <header
    class="navbar-default bg-gray-300 dark:bg-gray-700 text-skin-base px-6 py-3 border-b sticky top-0"
  >
    <div
      class="container mx-auto pl-4 pr-2 sm:px-0 flex flex-row items-center gap-4 justify-between"
    >
      <NuxtLink to="/" class="font-bold text-skin-muted text-lg"> 관리자 사이트 </NuxtLink>
      <button
        class="appearance-none px-2 py-2 rounded sm:hidden"
        type="button"
        aria-label="Menu"
        @click="isOpen = !isOpen"
      >
        오픈 버튼
      </button>
      <div class="text-black dark:text-white">
        <button type="button" @click="appStore.changeTheme(appStore.isDark ? 'light' : 'dark')">
          테마
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar-default {
  --color-text-base: #484848;
  --color-text-active: #ffffff;
  --color-text-hover: #ffffff;
  --color-text-muted: #1d4ed8;
  --color-fill-hover: #1d4ed8;
  --color-fill-active: #1d4ed8;
  --color-fill-active-dark: #eeeeee;
}
</style>
