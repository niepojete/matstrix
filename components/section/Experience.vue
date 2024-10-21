<template>
  <section class="section section-experience">
    <div class="container mx-auto">

      <transition-slide :delay="1000">
        <div v-if="isVisible" class="padding-big text-center">
          <h2 class="h2">Experience</h2>
          <h3 class="h3 my-6">I've been fortunate to develop modern frontend interfaces for a number of clients.</h3>
          <div class="grid md:gap-x-8 gap-y-8 xl:gap-y-16 grid-cols-2 md:grid-cols-4 xl:grid-cols-8 place-items-center padding-medium">
            <div v-for="(item, index) in store.companies" :key="index">
              <img :src="item.image" :alt="item.title">
            </div>
          </div>
        </div>
      </transition-slide>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/data';

// data
let isVisible = ref(false);
const store = useStore();

// mounted
onMounted(() => {
  isVisible.value = true
})
</script>