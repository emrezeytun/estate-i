<template>
  <div class="selectbox-container">
    <label v-if="label">{{ label }}</label>
    <select
      :disabled="isDisabled"
      @change="onChangeData"
      :placeholder="placeholder"
    >
      <option value="" disabled :selected="!defaultValue">
        {{ placeholder }}
      </option>
      <option v-for="item in selectboxData" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    formKey: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: String,
      default: '',
    },
    selectboxData: {
      type: Array,
      default: () => [],
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChangeData(e) {
      this.$emit('onChangeData', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.selectbox {
  &-container {
    position: relative;
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 12px;
      font: normal normal bold 14px/20px Inter;
      letter-spacing: 0px;
      color: #262626;
    }
    &-icon {
      position: absolute;
      top: calc(25% + 2px);
      opacity: 0.4;
      left: 12px;
      img {
        width: 20px;
      }
    }
    select {
      background: #fafbfc 0% 0% no-repeat padding-box;
      border: 1px solid #dfe1e6;
      border-radius: 5px;
      padding: 12px;
      outline: none;
    }
  }
}
</style>
