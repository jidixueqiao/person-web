<template>
  <div class="app-title">
    <RouterLink v-for="tab in tabs" :key="tab.title" class="app-title-item" :to="tab.path">{{
      tab.title
    }}</RouterLink>
  </div>
</template>

<script setup lang="ts">
// use models
import { AppTitleProps } from './models'

defineOptions({
  name: 'AppTitle'
})

defineProps<AppTitleProps>()
</script>

<style lang="scss" scoped>
.app-title {
  text-align: center;
  border-bottom: 1px solid #fff;

  .app-title-item {
    padding: 8px;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    transition: all 0.5s;
    width: 120px;
    text-align: center;
  }
}
</style>
