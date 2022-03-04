<template>
  <div class="input-modal">
    <Paragraph size=16 tag="p" weight="medium" color="black">Персональные данные</Paragraph>
    <Input :value="inputValue.name" @oninput="name" placeholder="Имя"></Input>
    <Input :value="inputValue.age" @oninput="age" modifier="number" placeholder="Возраст"></Input>
  </div>
</template>

<script>

import Paragraph from "@/components/ui/Paragraph.vue";
import Input from "@/components/ui/Input.vue";

export default {
  name: 'InputModal',

  props: {
    inputValue: {
      type: Object,
    }
  },

  components: {
    Paragraph, Input
  },

  methods: {
    name(value) {
      this.$emit("name", value)
    },

    age(value) {
      this.$emit("age", value)
    }
  }

}
</script>

<style lang="scss" scoped>
.input-modal {
  margin-bottom: 33px;

  p {
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 10px;
  }

  div:last-child {
    margin-bottom: 0;
  }
}
</style>
