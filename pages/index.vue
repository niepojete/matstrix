<template>
  <main class="page page-index" ref="el">
    <SectionIntro />
    <SectionServices />
    <SectionWebDev />
    <SectionMore theme="blue" />
  </main>
</template>

<script setup lang="ts">
// meta
definePageMeta({
  name: 'WebApps',
  layout: 'default',
  title: null
})
</script>