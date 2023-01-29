<template>
  <div class="vit-badge">
    <slot> </slot>
    <sup
      v-show="!hidden && (content || content === 0 || isDot)"
      v-text="content"
      class="vit-badge__content"
      :class="['vit-badge__content--' + type, { 'is-fixed': $slots.default, 'is-dot': isDot }]"
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
    type: {
      type: String,
      validator(val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
      },
    },
  },

  computed: {
    content() {
      if (this.sDot) return

      const value = this.value
      const max = this.max

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }

      return value
    },
  },
}
</script>
