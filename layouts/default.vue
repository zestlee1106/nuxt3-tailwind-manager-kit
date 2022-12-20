<script setup lang="ts">
useHead({
  title: '기본',
})
</script>

<template>
  <div class="w-full flex flex-row mx-auto">
    <AppGnb />
    <div class="w-full flex flex-col justify-start">
      <AppHeader />
      <main class="p-5">
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
