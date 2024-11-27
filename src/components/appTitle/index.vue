<template>
  <div class="app-title">
    <RouterLink class="app-title-item" :to="tab.path" v-for="tab in tabs" :key="tab.title">{{ tab.title }}</RouterLink>
  </div>
</template>

<script setup lang="ts">
// use models
import { AppTitleProps } from './models'

defineOptions({
  name: 'AppTitle',
})

defineProps<AppTitleProps>()
</script>

<style lang="scss" scoped>
.app-title {
  .app-title-item {
    padding: 8px;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    transition: all 0.5s;

    &.router-link-active {
      background-color: #63e2b729;
      color: #63e2b7;
    }
  }
}
</style>