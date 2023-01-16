<template>
  <div class="vit-badge">
    <slot></slot>
    <sup 
      >
    </sup>
  </div>
</template>

<script>
export default {
  name: 'VitBadge',

  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
  },

  computed: {
    
  }

}
</script>
