<template>
  <div class="footer">
    <Paragraph size="13" tag="p" weight="regular" color="str-black">all rights reserved</Paragraph>
  </div>
</template>

<script>

import Paragraph from "@/components/ui/Paragraph.vue";

export default {
  name: 'Footer',

  components: {
    Paragraph
  }


}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: #FAFAFA;
  box-shadow: 0 1px 0 rgba(17, 17, 17, 0.1);
}
</style>
