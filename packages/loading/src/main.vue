<template>
  <div class="me-loading">
    <div class="loading-text">{{ loadingText }}</div>
  </div>
</template>

<script>
export default {
  name: 'MeLoading',
  props: {
    loadingText: {
      type: String,
      default: '',
    },
  },
}
</script>
