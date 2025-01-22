<template>
  <div class="home">
    <div class="title" ref="titleRef">hello，我是极地雪橇</div>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js';
import { onMounted, shallowRef, ShallowRef } from 'vue';

const titleRef:ShallowRef<HTMLDivElement | null> = shallowRef<HTMLDivElement | null>(null);

onMounted(() => {
  anime({
    targets: titleRef.value,
    translateX: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutQuad',
  })
})
</script>