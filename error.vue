<script lang="ts" setup>
interface ErrorProps {
  error: {
    description?: string,
    message?: string,
    statusCode: string,
    statusMessage: string,
    url: string
  };
}

const { error } = defineProps<ErrorProps>();

const component = computed(() => {
  if (parseInt(error.statusCode) === 403) {
    return resolveComponent('AccessDenied', false);
  }

  return parseInt(error.statusCode) === 404
    ? resolveComponent('NotFound', false)
    : resolveComponent('ServerError', false);
});

definePageMeta({
  layout: 'empty',
  title: 'Error'
});
</script>

<template>
  <div>
    <Head>
      <Title>{{ error.statusMessage }}</Title>
    </Head>

    <Component :is="component" :error="error" />
  </div>
</template>
