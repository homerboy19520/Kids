<template>
  <form class="form">
    <Paragraph size=16 tag="p" weight="medium" color="black">Персональные данные</Paragraph>
    <Input :value="inputValue.name" @oninput="setName" placeholder="Имя"></Input>
    <Input :value="inputValue.age" @oninput="setAge" modifier="number" placeholder="Возраст"></Input>
  </form>
</template>

<script>

import Paragraph from "@/components/ui/Paragraph.vue";
import Input from "@/components/ui/Input.vue";

export default {
  name: 'FormModal',

  props: {
    inputValue: {
      type: Object,
    }
  },

  components: {
    Paragraph, Input
  },

  methods: {
    setName(value) {
      this.$emit("name", value)
    },

    setAge(value) {
      this.$emit("age", value)
    }
  }

}
</script>

<style lang="scss" scoped>
.form {
  margin-bottom: 33px;

  p {
    margin-bottom: 20px;
    user-select: none;
  }

  div {
    margin-bottom: 10px;
  }

  div:last-child {
    margin-bottom: 0;
  }
}
</style>
