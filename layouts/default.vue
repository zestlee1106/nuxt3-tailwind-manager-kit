<script setup lang="ts">
useHead({
  title: '기본',
})
</script>

<template>
  <div class="w-full">
    <AppHeader />

    <div class="container mx-auto px-4 sm:px-0 py-4">
      <NuxtPage />
    </div>

    <!-- <AppFooter /> -->
  </div>
</template>
