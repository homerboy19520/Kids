<template>
  <div class="input-block" :class="[`m-${modifier}}`]">
    <input required :value="localValue" @input="input($event.target.value)">
    <span class="placeholder">
    {{ placeholder }}
  </span>
  </div>
</template>

<script>

export default {
  name: 'Input',

  props: {
    placeholder: {
      type: String,
      default: ""
    },
    modifier: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      localValue: ""
    }
  },

  methods: {
    input(value) {
      this.localValue = value;
    },
  },

  mounted() {
    this.localValue = this.value;
  },

  watch: {
    localValue() {
      this.$emit("oninput", this.localValue)
    }

  }

}
</script>

<style lang="scss">
.input {
  outline: none;
  width: 30%;
  padding: 26px 16px 6px 16px;
  border: 1px solid #F1F1F1;;
  border-radius: 4px;

  font-family: var(--font-montseratt);
  font-weight: 400;
  color: var(--color-black);
  font-size: 14px;
  line-height: 24px;

  &::placeholder {
    font-family: var(--font-montseratt);
    font-weight: 400;
    color: var(--color-grey);
    font-size: 13px;
    line-height: 16px;
  }

  &:focus::placeholder {
    padding-bottom: 10px;
  }
}

.input-block {
  position: relative;
  width: 100%;


  & input {
    width: 100%;
    outline: none;
    padding: 26px 16px 6px 16px;
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    font-family: var(--font-montseratt);
    font-weight: 400;
    color: var(--color-black);
    font-size: 14px;
    line-height: 24px;


    &:valid + .placeholder,
    &:focus + .placeholder {
      transform: scale(1) translateY(-20px);
      background: #fff;
    }

    &:focus {
      color: #284B63;
      border-color: #284B63;
    }

    &:focus + span.placeholder {
      color: #284B63;
    }
  }

  & .placeholder {
    position: absolute;
    top: 50%;
    left: 16px;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    transform-origin: 0 0;
    background: none;
    pointer-events: none;
    transform: translate(0, -50%) scale(1.4);

    font-family: var(--font-montseratt);
    font-weight: 400;
    color: var(--color-grey);
    font-size: 13px;
    line-height: 16px;
  }
}

</style>
