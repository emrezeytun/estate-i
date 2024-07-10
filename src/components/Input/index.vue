<template>
  <div class="input-component">
    <div v-if="type === 'datetime'" class="datetime-picker">
      <input
        placeholder=" "
        type="datetime-local"
        id="datetime-from"
        class="datetime-input"
        @input="onInputChanged"
      />
      <label for="datetime" class="datetime-label">{{ label }}</label>
    </div>

    <div v-if="type !== 'datetime'" class="input">
      <label> {{ label }} </label>
      <input
        @input="onInputChanged"
        :placeholder="placeholder"
        :type="type"
        :class="error ? 'error' : ''"
      />
      <span v-if="error"> {{ invalidText }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    invalidText: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInputChanged(e) {
      this.$emit('onInputChanged', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  label {
    font-size: 12px;
    letter-spacing: -0.5px;
    margin: 2px 0px;
  }
  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 4px;
    width: 100%;
    &:focus {
      outline: none;
    }
    &.error {
      border: 1px solid $danger-color;
    }
    &.datetime-input {
      padding: 5px;
      font-size: 16px;
    }
  }
  span {
    margin-top: 2px;
    color: $danger-color;
    font-size: 12px;
  }
}
.datetime-picker {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: max-content;
  .datetime-input {
    width: 100%;
    padding: 20px 10px 10px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .datetime-label {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 14px;
    color: #999;
    transition: 0.2s ease all;
    pointer-events: none;
  }
}

.datetime-input:focus + .datetime-label,
.datetime-input:not(:placeholder-shown) + .datetime-label {
  top: 5px;
  left: 10px;
  font-size: 12px;
  color: #333;
}
</style>
