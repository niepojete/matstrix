<template>
  <div class="main-title">
    <transition-slide :delay="300">
      <h3 v-if="isVisible" class="h3 mb-3">{{ pretitle }}</h3>
    </transition-slide>
    <transition-slide :delay="400">
      <h1 v-if="isVisible" class="h1 mb-3">{{ title }}</h1>
    </transition-slide>
    <transition-slide :delay="500">
      <h2 v-if="isVisible" class="h2">{{ subtitle }}</h2>
    </transition-slide>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  pretitle: {
    type: String,
    required: false,
  },
});

// data
let isVisible = ref(false);
const { title, subtitle } = props;

// mounted
onMounted(() => {
  isVisible.value = true
})
</script>