<template>
  <div class="hamburger-icon" :class="{'visible' : true}" id="hamburger">
<!--:class="{'visible' : goingUp && scrollY != 0 }"-->
    <template v-for="(item,index) in 3" :key="index">
      <div :class="[{ 'active' : store.showMenu }, 'line-'+[index]]"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/data';
const store = useStore();
</script>