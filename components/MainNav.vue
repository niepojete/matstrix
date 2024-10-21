<template>
  <nav class="main-nav padding-big">

    <template v-for="(item, index) in store.menu" :key="index">
      <transition-slide :delay="100 * index" easing="ease-in-out">
        <div v-if="isVisible">
          <NuxtLink :to="item.url" class="flex flex-nowrap item-main-nav">
            <svg height="16" viewBox="0 0 16 16" width="16" class="fill-current self-center">
              <polygon fill-rule="evenodd" points="9.586 5 5 5 5 3 13 3 13 11 11 11 11 6.414 4.707 12.707 3.293 11.293"/>
            </svg>
            <span class="h3 ml-4 self-center">{{ item.title }}</span>
          </NuxtLink>
        </div>
      </transition-slide>
    </template>

    <transition-slide :delay="600">
      <div v-if="isVisible" class="contact-box">
        <h3 class="h3">contact me</h3>
        <p>matstrix@hotmail.com</p>
        <p>+48 792 435 911</p>
      </div>
    </transition-slide>

  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from '@/stores/data';

// data
const store = useStore();
const route = useRoute();
const router = useRouter();
const { showMenu } = storeToRefs(store)
let isVisible = ref(false);

// watch
watch(showMenu, () => {
  if(showMenu.value === true){
    // wait for opening menu animation to finish
    // then show menu elements
    setTimeout( () => {
      isVisible.value = true;
    }, 400 )
  }
  // on exit
  else{
    isVisible.value = false;
  }
})

// navigation guard for smoother exit animation
router.beforeEach((to, from, next) => {
  if (from.fullPath === route.fullPath && showMenu.value === true) {
    // animate out menu elements
    isVisible.value = false;
    // wait
    setTimeout( () => {
      // then close menu
      store.showMenu = false;
      // and navigate
      next()
    }, 600 )
  } else {
    next()
  }
})

</script>