<template>
  <header class="app-header">
    <div class="container mx-auto">

      <!--navi-->
      <nav class="header-nav">
        <ul class="flex items-center justify-between">
          <!--logo-->
          <li>
            <transition-slide :delay="300">
              <span v-if="isVisible" class="logo">matstrix.com</span>
            </transition-slide>
          </li>
          <!--hamburger -->
          <li>
            <transition-slide :delay="600">
              <PartialHamburgerIcon v-if="isVisible" @click="store.toggleNav()"/>
            </transition-slide>
          </li>
        </ul>
      </nav>

      <!--slide menu-->
      <Teleport to="body">
        <div class="app-header-modal" :class="store.showMenu ? 'active' : 'inactive'">
          <div class="container mx-auto">
            <MainNav/>
          </div>
        </div>
      </Teleport>

    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/data';

// data
const store = useStore();
let isVisible = ref(false);

// mounted
onMounted(() => {
  isVisible.value = true
})
</script>