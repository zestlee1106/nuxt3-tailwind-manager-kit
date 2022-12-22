<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

onMounted(() => {
  console.log('🚀 ~ file: app.vue:4 ~ runtimeConfig', runtimeConfig)
})
</script>

<template>
  <app-title title="콘텐츠 목록">
    <div class="w-full">contents index</div>
  </app-title>
</template>
