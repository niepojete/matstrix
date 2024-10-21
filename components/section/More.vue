<template>
  <section class="section section-more padding-small" :class="'theme-'+theme">
    <div class="container mx-auto">

      <h2 class="h2">More</h2>
      <MoreNav/>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// props
const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
});

// data
let isVisible = ref(false);

// mounted
onMounted(() => {
  isVisible.value = true
})
</script>