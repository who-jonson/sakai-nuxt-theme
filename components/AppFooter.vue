<script lang="ts" setup>
const footerImage = useAppLogo();
</script>

<template>
  <div class="layout-footer">
    <img alt="Logo" :src="footerImage" height="20" class="mr-2">
    by
    <span class="font-medium ml-2">PrimeVue</span>
  </div>
</template>
