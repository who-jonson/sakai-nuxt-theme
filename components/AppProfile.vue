<script lang="ts" setup>
const expanded = ref(false);
</script>

<template>
  <div class="layout-profile">
    <div>
      <img src="/images/avatar/profile.jpg" alt="">
    </div>
    <button class="p-link layout-profile-link" @click.prevent="expanded = !expanded">
      <span class="username">Claire Williams</span>
      <i class="pi pi-fw pi-cog" />
    </button>
    <Transition name="layout-submenu-wrapper">
      <ul v-show="expanded">
        <li>
          <button class="p-link">
            <i class="pi pi-fw pi-user" /><span>Account</span>
          </button>
        </li>
        <li>
          <button class="p-link">
            <i class="pi pi-fw pi-inbox" /><span>Notifications</span><span class="menuitem-badge">2</span>
          </button>
        </li>
        <li>
          <button class="p-link">
            <i class="pi pi-fw pi-power-off" /><span>Logout</span>
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>

</style>
