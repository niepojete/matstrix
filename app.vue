<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const route = useRoute();
//
const title = computed(() => {
  // compute <title> and og:title
  // e.g: "matstrix.com - logofolio"
  const siteTitle = appConfig.siteTitle
  const pageTitle = route.meta.title
  // prevent null or undefined
  return pageTitle ? siteTitle + ' - ' + pageTitle : siteTitle;
})

useHead({
  titleTemplate: (titleChunk) => {
    // not working?
    // https://nuxt.com/docs/getting-started/seo-meta#title-template
    return title.value;
  },
  bodyAttrs: {
    class: 'testClass'
  },
  meta: [
    { property: 'description', content: `${appConfig.siteDescription}` },
    { property: 'og:title', content: `${title.value}` },
    { property: 'og:image', content: 'https://example.com/image.png' }
  ]
})
</script>