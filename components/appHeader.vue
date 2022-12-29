<script setup lang="ts">
import { useAppStore } from '~/store/app'
const appStore = useAppStore()

const oppositeTheme = computed(() => {
  return appStore.isDark ? 'light' : 'dark'
})
</script>

<template>
  <header
    class="navbar-default bg-gray-300 dark:bg-gray-700 text-skin-base px-6 py-3 border-b sticky top-0"
  >
    <div
      class="container mx-auto pl-4 pr-2 sm:px-0 flex flex-row items-center gap-4 justify-between"
    >
      <NuxtLink to="/" class="font-bold text-skin-base text-lg"> 관리자 사이트 </NuxtLink>
      <div class="text-black dark:text-white">
        <button type="button" @click="appStore.changeTheme(oppositeTheme)">
          <span class="material-symbols-outlined" v-text="`${oppositeTheme}_mode`" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar-default {
  --color-text-active: #ffffff;
  --color-text-hover: #ffffff;
  --color-fill-hover: #1d4ed8;
  --color-fill-active: #1d4ed8;
  --color-fill-active-dark: #eeeeee;
}
</style>
