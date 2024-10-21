<template>
  <section class="section section-services">
    <div class="container mx-auto">
    <!-- todo dynamic-->
    <!-- todo move to data-->
      <transition-slide :delay="700">
        <div v-if="isVisible"
             class="grid md:gap-x-8 md:gap-y-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 py-5 place-items-center">
          <div class="service-box">
            <img src="/img/svg/icon-speech.svg"/>
            <h3 class="h3">consulting</h3>
            <p>Be informed on technology, efficient use of resources and strategy that align with your business goals.</p>
          </div>
          <div class="service-box">
            <img src="/img/svg/icon-pencil.svg"/>
            <h3 class="h3">prototyping</h3>
            <p>Visualize, test, and refine design concepts early in the process, reduce the risk of costly changes later.</p>
          </div>
          <div class="service-box">
            <img src="/img/svg/icon-paint.svg"/>
            <h3 class="h3">design</h3>
            <p>Create appealing interface, experience and effectively communicate your brand's message.</p>
          </div>
          <div class="service-box">
            <img src="/img/svg/icon-code.svg"/>
            <h3 class="h3">development</h3>
            <p>Transform design concepts into functional, interactive product directly impacting user satisfaction.</p>
          </div>
          <div class="service-box">
            <img src="/img/svg/icon-restore.svg"/>
            <h3 class="h3">maintenance</h3>
            <p>Ensure your product stays updated, secure, and performs optimally over time.</p>
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