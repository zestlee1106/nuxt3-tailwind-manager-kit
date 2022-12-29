<script setup lang="ts">
const menus = ref([
  {
    text: 'home',
    to: '/',
  },
  {
    text: 'dashboard',
    to: '/dashboard',
  },
])
</script>

<template>
  <div class="w-80 h-screen border-r border-r-skin-base p-5">
    <nav class="w-full flex flex-col items-start sm:gap-1">
      <NuxtLink
        v-for="menu in menus"
        :key="menu.text"
        :to="menu.to"
        class="px-4 py-2 rounded-full w-full sm:w-auto text-skin-base hover:text-skin-hover hover:bg-skin-fill-hover transition duration-200 font-medium"
        exact-active-class="bg-skin-fill-active text-skin-active"
      >
        {{ menu.text }}
      </NuxtLink>
    </nav>
  </div>
</template>
