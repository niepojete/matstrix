<template>
  <section class="section section-print">
    <div class="container mx-auto">

      <MainTitle title="Print" subtitle="Make it fly."/>

      <div class="flex flex-col flex-1 md:justify-center w-full padding-medium">
        <template v-for="(item, index) in store.prints" :key="index">
          <transition-slide :delay="600">
            <h3 v-if="isVisible" class="h3 my-4">{{ item.title }}</h3>
          </transition-slide>
          <transition-slide :delay="700">
            <hr v-if="isVisible"/>
          </transition-slide>
          <transition-slide :delay="800">
            <div v-if="isVisible"
                 class="grid gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-8 grid-cols-1 md:grid-cols-2 place-items-center padding-medium print-list">
              <div v-for="(subitem, subindex) in item.list" :key="subindex">
                <img :src="subitem.image" :alt="subitem.title">
              </div>
            </div>
          </transition-slide>
        </template>
      </div>

      <div class="flex flex-col flex-1 md:justify-center w-full padding-small">
        <h3 class="h3 my-4">business cards</h3>
        <hr/>
      </div>

      <div class="padding-medium text-center">
        <img src="/img/print-cards.jpg" class="inline-block" alt="Business card" style="max-width: 75%">
      </div>

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