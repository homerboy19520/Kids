<template>
  <div class="data-modal">
    <div class="data-modal__wrapper">
      <Paragraph class="data-modal__title" size="16" tag="p" weight="medium" color="black"
      >Персональные данные
      </Paragraph>
      <Paragraph size="16" tag="p" weight="bold" color="black"
      >{{ user.name }}, {{ user.age }} {{ years }}
      </Paragraph>
    </div>
    <div class="data-modal__list">
      <Paragraph v-show="isShow" class="data-modal__title" size=16 tag="p" weight="medium" color="black">Дети
      </Paragraph>
      <div class="data-modal__item" v-for="(item,index) in preview" :key="index">
        <Paragraph size="16" tag="p" weight="bold" color="black"
        >{{ item.name }}, {{ item.age }}
        </Paragraph>
      </div>
    </div>
  </div>
</template>

<script>
import Paragraph from "@/components/ui/Paragraph.vue";
import {mapState} from "vuex";

export default {
  name: "DataModal",

  components: {
    Paragraph,
  },

  computed: {
    ...mapState({preview: "preview", user: "user", isShow: "isOpen"}),

    years() {
      let mass = this.user.age.split("")
      let lastNumber = mass[mass.length - 1];

      if (lastNumber === "1") {
        return "год"
      } else if (lastNumber === "2" || lastNumber === "3" || lastNumber === "4") {
        return "года"
      } else {
        return "лет"
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.data-modal {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  width: fit-content;
  margin: 0 auto;
  height: 100%;
  font-family: var(--font-montseratt);

  &__wrapper {
    max-width: 201px;
  }

  &__list {
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__item {
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #F1F1F1;;
    padding: 10px 20px;
    margin-bottom: 20px;
  }

  &__title {
    margin-bottom: 20px;
  }
}
</style>
