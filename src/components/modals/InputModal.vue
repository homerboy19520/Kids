<template>
  <div class="input-modal">
    <Paragraph size=16 tag="p" weight="medium" color="black">Персональные данные</Paragraph>
    <Input modifier="form" :placeholder="item.placeholder" v-for="(item,index) in data" :key="index"></Input>
  </div>
</template>

<script>

import Paragraph from "@/components/ui/Paragraph.vue";
import Input from "@/components/ui/Input.vue";

export default {
  name: 'InputModal',

  components: {
    Paragraph, Input
  },

  props: {
    data: {
      type: Array,
      required: true,
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
