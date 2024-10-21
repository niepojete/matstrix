<template>
  <nav class="more-nav">
    <transition-slide :duration="{ enter: 300, leave: 200 }" easing="ease-in-out">
      <ul v-if="isVisible"
          class="md:flex items-center justify-between gap-5">
        <li v-for="(item, index) in store.menu"
            :key="index"
            class="item mb-5">
          <NuxtLink :to="item.url">
            <svg height="16" viewBox="0 0 16 16" width="16" class="fill-current">
              <polygon fill-rule="evenodd" points="9.586 5 5 5 5 3 13 3 13 11 11 11 11 6.414 4.707 12.707 3.293 11.293"/>
            </svg>
            <span>{{ item.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </transition-slide>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/data';
const store = useStore();

// data
let isVisible = ref(false);

// mounted
onMounted(() => {
  isVisible.value = true
})

</script>