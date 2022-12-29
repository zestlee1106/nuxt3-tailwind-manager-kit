<script setup lang="ts">
const title = '홈'
useHead({
  title,
})
</script>

<template>
  <page-container :title="title">
    <h2>여기는 {{ title }}입니다.</h2>
  </page-container>
</template>

<style scoped></style>
