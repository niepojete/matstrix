<template>
  <section class="section section-me">
    <div class="flex flex-col flex-1 md:justify-center w-full">

      <transition-slide :delay="700">
        <div v-if="isVisible" class="padding-small text-center">
          <img src="/img/me1.jpg" alt="Me 1">
        </div>
      </transition-slide>

<!--      <transition-slide :delay="800">-->
<!--        <div v-if="isVisible" class="padding-medium text-center">-->
<!--          <img src="/img/me2.jpg" alt="Me 2">-->
<!--        </div>-->
<!--      </transition-slide>-->

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// data
let isVisible = ref(false);

// mounted
onMounted(() => {
  isVisible.value = true
})
</script>