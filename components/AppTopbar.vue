<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'menuToggle', event: MouseEvent): void,
  (e: 'topbarMenuToggle', event: MouseEvent): void
}>();

const topbarImage = useAppLogo();

function onTopbarMenuToggle(event: MouseEvent) {
  emit('menuToggle', event);
  emit('topbarMenuToggle', event);
}
</script>

<template>
  <div class="layout-topbar">
    <NuxtLink to="/" class="layout-topbar-logo">
      <img alt="Logo" :src="topbarImage">
      <span>SAKAI</span>
    </NuxtLink>
    <button class="p-link layout-menu-button layout-topbar-button" @click="onTopbarMenuToggle">
      <i class="pi pi-bars" />
    </button>

    <button
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true
      }"
      class="p-link layout-topbar-menu-button layout-topbar-button"
    >
      <i class="pi pi-ellipsis-v" />
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-calendar" />
          <span>Events</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-cog" />
          <span>Settings</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user" />
          <span>Profile</span>
        </button>
      </li>
    </ul>
  </div>
</template>
