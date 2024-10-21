<template>
  <section class="section section-logo">
    <div class="container mx-auto">

      <MainTitle title="Logo" subtitle="Crazy big."/>

      <div class="flex flex-col flex-1 md:justify-center w-full padding-medium">
        <transition-slide :delay="600">
          <h3 v-if="isVisible" class="h3 my-4">Selected works</h3>
        </transition-slide>
        <transition-slide :delay="700">
          <hr v-if="isVisible"/>
        </transition-slide>
        <transition-slide :delay="800">
          <div v-if="isVisible"
               class="grid gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-24 grid-cols-2 md:grid-cols-4 place-items-center padding-medium">
            <template v-for="(item, index) in store.logofolio" :key="index">
              <img :src="item.image" :alt="item.title" class="item-logofolio">
            </template>
          </div>
        </transition-slide>
      </div>

      <div class="flex flex-col flex-1 md:justify-center w-full padding-medium">
        <h3 class="h3 my-4">Key visuals</h3>
        <hr/>
        <div class="padding-medium text-center">
          <template v-for="(item, index) in store.keyVisuals" :key="index">
            <img :src="item.image" :alt="item.title" class="item-key-visual">
          </template>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted } from 'vue';
import { useStore } from '@/stores/data';

// data
let isVisible = ref(false);
const store = useStore();

// mounted
onMounted(() => {
  isVisible.value = true
})
</script>