<template>
  <n-config-provider :theme="darkTheme">
    <div class="test-link">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/404">other</RouterLink>
    </div>
    <n-notification-provider>
      <n-message-provider>
        <Transition name="router-anim" mode="out-in">
          <RouterView />
        </Transition>
      </n-message-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<style lang="scss" scoped>
.router-anim-enter-active,
.router-anim-leave-active {
  transition: transform 0.5s ease
}

.router-anim-enter-from,
.router-anim-leave-to {
  transform: translateX(-100%);
}

.test-link * {
  margin: 0 10px
}
</style>