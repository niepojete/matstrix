<template>
  <section class="section section-web-apps h-screen">
    <div class="container mx-auto">
      <div class="flex justify-center items-center h-screen">
        <MainTitle title="One man" subtitle="Digital Agency."/>
        <div class="shape-list" ref="target">
          <img src="/img/shape1.png" class="shape shape-0" :style="layer0"/>
          <img src="/img/shape2.png" class="shape shape-1" :style="layer1"/>
          <img src="/img/shape3.png" class="shape shape-2" :style="layer2"/>
          <img src="/img/shape4.png" class="shape shape-3" :style="layer3"/>
          <img src="/img/shape5.png" class="shape shape-4" :style="layer4"/>
          <img src="/img/shape6.png" class="shape shape-5" :style="layer5"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useParallax } from '@vueuse/core';

// data
const target = ref(null);
const parallax = reactive(useParallax(target));

// layers
const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * 30}px) scale(0.5) rotate(${parallax.roll * 30}deg)`,
}))
const layer1 = computed(() => ({
  transform: `translateX(${parallax.tilt * 60}px) translateY(${parallax.roll * 60}px) scale(0.5) rotate(${parallax.roll * 90}deg)`,
}))
const layer2 = computed(() => ({
  transform: `translateX(${parallax.tilt * -120}px) translateY(${parallax.roll * -120}px) scale(0.5) rotate(${parallax.roll * 60}deg)`,
}))
const layer3 = computed(() => ({
  transform: `translateX(${parallax.tilt * 160}px) translateY(${parallax.roll * 160}px) scale(0.5) rotate(${parallax.roll * 30}deg)`,
}))
const layer4 = computed(() => ({
  transform: `translateX(${parallax.tilt * -40}px) translateY(${parallax.roll * -40}px) scale(0.5) rotate(${parallax.roll * 20}deg)`,
}))
const layer5 = computed(() => ({
  transform: `translateX(${parallax.tilt * -140}px) translateY(${parallax.roll * -140}px) scale(0.5) rotate(${parallax.roll * 15}deg)`,
}))

</script>