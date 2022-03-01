<script>
export default {
  name: 'Paragraph',
  props: {
    size: {
      type: Number,
      default: 14
    },
    weight: {
      type: Number,
      default: 400
    },
    color: {
      type: String,
      default: 'brand'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes() {
      return [
        'paragraph',
        `m-${this.size}`,
        `m-${this.weight}`,
        `m-${this.color}`
      ]
    }
  },
  render(createElement) {
    return createElement(
        this.tag,
        {
          class: this.classes,
          on: {
            click: (ev) => this.$emit('click', ev)
          }
        },
        this.$slots.default
    )
  }
}
</script>

<style lang="scss">
.paragraph {
  &.m-16 {
    font-size: 16px;
    line-height: 24px;
  }

  &.m-13 {
    font-size: 13px;
    line-height: 15px;
  }

  &.m-medium {
    font-weight: 500;
  }

  &.m-regular {
    font-weight: 400;
  }

  &.m-bold {
    font-weight: 700;
  }


  &.m-black {
    color: var(--color-black)
  }

  &.m-str-black {
    color: var(--color-strong-black)
  }

}
</style>
