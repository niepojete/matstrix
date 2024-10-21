<template>
  <section class="section section-about">
    <div class="container mx-auto">

      <MainTitle title="About me" subtitle="Full send."/>

      <div class="flex">
        <div class="padding-big max-w-96">
          <transition-slide :delay="600">
            <p v-if="isVisible">In a world where the visual landscape is constantly
              cluttered and noisy, I stand here as a beacon of serenity,
              reminding us of the profound impact that minimalism
              can have in the realm of art and design.</p>
          </transition-slide>
          <transition-slide :delay="700">
            <p v-if="isVisible" class="mt-5">I’m a self-taught designer and a senior frontend developer
              with an unwavering passion for aesthetics and a commitment to simplicity.</p>
          </transition-slide>
        </div>
      </div>

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