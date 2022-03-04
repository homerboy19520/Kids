<template>
  <div class="cards-modal" :class="{center:!isShow}">
    <Paragraph v-if="isShow" size=16 tag="p" weight="medium" color="black">Дети (макс. 5)</Paragraph>
    <Button v-if="isAdd" @click="onButton" modifier="secondary">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z"
              fill="#01A7FD"/>
      </svg>
      <span>Добавить ребенка</span>
    </Button>
  </div>
</template>

<script>

import Paragraph from "@/components/ui/Paragraph.vue";
import Button from "@/components/ui/Button.vue";

export default {
  name: 'CardsModal',

  components: {
    Paragraph, Button
  },

  props: {
    isShow: {
      type: Boolean,
      required: true,
    },

    isAdd: {
      type: Boolean,
      required: true,
    }
  },

  methods: {

    onButton() {
      this.$emit("click")
    }
  }


}
</script>

<style lang="scss" scoped>
.cards-modal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;

  &.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & p {
    user-select: none;
  }

  div {
    margin-left: auto;
  }
}
</style>
