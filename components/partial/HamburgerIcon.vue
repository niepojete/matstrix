<template>
  <div class="hamburger-icon" id="icon">
    <div class="icon-1" id="a"></div>
    <div class="icon-2" id="b"></div>
    <div class="icon-3" id="c"></div>
    <div class="clear"></div>
  </div>
</template>

<script setup lang="ts">
const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");

icon.addEventListener('click', () => {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  // todo emit
});
</script>