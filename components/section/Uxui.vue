<template>
  <section class="section section-uxui">
    <div class="container mx-auto">

      <MainTitle title="UX/UI" subtitle="Some kind of voodoo."/>

      <div class="flex flex-col flex-1 md:justify-center w-full padding-medium">
        <template v-for="(item, index) in store.uxui" :key="index">
          <transition-slide :delay="600">
            <h3 v-if="isVisible" class="h3 my-4">{{ item.title }}</h3>
          </transition-slide>
          <transition-slide :delay="700">
            <hr v-if="isVisible"/>
          </transition-slide>
          <transition-slide :delay="800">
            <div v-if="isVisible" class="padding-medium text-center">
              <template v-for="(subitem, subindex) in item.list" :key="subindex">
                <img :src="subitem.image" :alt="subitem.title" class="item-uxui">
              </template>
            </div>
          </transition-slide>
        </template>
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