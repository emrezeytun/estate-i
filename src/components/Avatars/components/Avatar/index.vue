<template>
  <div class="avatar" :style="getColor(backgroundColor)">{{ shortName }}</div>
</template>

<script>
export default {
  props: {
    shortName: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '#f4f6f9',
    },
  },
  methods: {
    getColor(color) {
      return `background: ${color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 40px;
  height: 40px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 0 0 3px #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 400;
  font-size: 12px;
}
</style>
