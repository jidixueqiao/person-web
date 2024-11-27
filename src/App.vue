<template>
  <n-config-provider :theme="darkTheme">
    <AppTitle :tabs="appTitleTabs" />

    <n-notification-provider>
      <n-message-provider>
        <router-view v-slot="{ Component }">
          <transition name="router-anim" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </n-message-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { AppTitleTab } from './components/appTitle/models';

const appTitleTabs: AppTitleTab[] = [{
  title: 'Home',
  path: '/'
}, {
  title: 'other',
  path: '/other'
}]
</script>

<style lang="scss" scoped>
.router-anim-enter-active,
.router-anim-leave-active {
  transition: opacity 0.5s ease
}

.router-anim-enter-from,
.router-anim-leave-to {
  opacity: 0;
}
</style>