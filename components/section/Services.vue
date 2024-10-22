<template>
  <section class="section section-services">
    <div class="container mx-auto">

      <transition-slide :delay="700">
        <div v-if="isVisible"
             class="grid md:gap-x-8 md:gap-y-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 py-5 place-items-center">
          <div v-for="(item, index) in store.services" :key="index" class="service-box">
            <img :src="item.image"/>
            <h3 class="h3">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </transition-slide>

    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useStore } from '@/stores/data';

// data
const store = useStore();
// data
let isVisible = ref(false);

// mounted
onMounted(() => {
  isVisible.value = true
})
</script>