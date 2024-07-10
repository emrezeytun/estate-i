<template>
  <button
    :disabled="disabled"
    @click="onButtonClicked"
    :class="[type, { disabled: disabled }]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    text: {
      type: String,
      default: 'Send',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onButtonClicked() {
      if (this.disabled) return;
      this.$emit('onButtonClicked');
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  border: none;
  padding: 8px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;
  &:hover {
    opacity: 0.9;
  }
  &.primary {
    background: $primary-color;
    color: #fff;
  }
  &.disabled {
    opacity: 0.3;
    cursor: no-drop;
  }
}
</style>
