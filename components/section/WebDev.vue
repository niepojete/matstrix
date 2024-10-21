<template>
  <section class="section section-web-dev">
    <div class="container mx-auto">

      <transition-slide :delay="800">
        <h2 v-if="isVisible" class="h2">Live projects</h2>
      </transition-slide>

      <transition-slide :delay="900">
        <div v-if="isVisible" class="flex flex-col flex-1 md:justify-center w-full padding-medium">

          <template v-for="(item, index) in store.webdev" :key="index">
            <h3 class="h3 mt-8 mb-4">{{ item.title }}</h3>
            <hr/>
            <table class="table-fixed dev-list">
              <tbody>
                <tr v-for="(subitem, subindex) in item.list">
                  <td class="title">{{ subitem.title }}</td>
                  <td class="desc">{{ subitem.desc }}</td>
                  <td class="time">
                    <div class="pulse-status">
                      <span class="dot-text">{{ subitem.time }}</span>
                      <span class="dot" title="Ongoing"></span>
                    </div>
                  </td>
                  <td class="url">
                    <a v-if="subitem.ios" :href="subitem.ios" target="_blank" title="visit website">
                      <img src="/img/svg/icon-apple.svg" class="icon icon-apple"/>
                    </a>
                    <a v-if="subitem.android" :href="subitem.android" target="_blank" title="visit website">
                      <img src="/img/svg/icon-google-play.svg" class="icon icon-google-play"/>
                    </a>
                    <a v-if="subitem.web" :href="subitem.web" target="_blank" title="visit website">
                      <img src="/img/svg/icon-globe.svg" class="icon icon-globe"/>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </template>

          <p class="mt-8 text-center text-sm">100+ projects no longer available</p>

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