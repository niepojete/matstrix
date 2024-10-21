<template>
  <section class="section section-tech-stack">
    <div class="container mx-auto">

      <transition-slide :delay="800">
        <h2 v-if="isVisible" class="h2">Tech stack</h2>
      </transition-slide>

      <transition-slide :delay="900">
        <div v-if="isVisible" class="flex flex-col flex-1 md:justify-center w-full padding-medium">
          <template v-for="(item, index) in store.tech" :key="index">
            <h3 class="h3 my-4">{{ item.title }}</h3>
            <hr/>
            <div class="md:flex md:flex-row tech-list">
              <div v-for="(subitem, subindex) in item.list"
                   :key="subindex"
                   class="flex flex-nowrap self-center m-5">
                <img :src="`/img/${subitem.img}`" :alt="subitem.title">
                <span class="self-center ml-2">{{ subitem.title }}</span>
              </div>
            </div>
          </template>
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