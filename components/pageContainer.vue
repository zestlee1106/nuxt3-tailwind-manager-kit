<script setup lang="ts">
const props = defineProps<{
  title: string
  bar?: number
}>()
</script>

<template>
  <div class="w-full h-15 py-5 px-8">
    <h2 class="mb-10 text-2xl">{{ props.title }}</h2>
    <slot />
  </div>
</template>
