<template>
  <main class="page page-about">
    <SectionAbout />
    <SectionMe />
    <SectionTechStack />
    <SectionExperience />
    <SectionMore theme="white" />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'PageAbout',
  layout: 'default',
  title: 'o mnie'
})
</script>