<template>
  <div class="form">
    <div class="form__wrapper">
      <InputModal
          :inputValue="value"
          v-if="isOpen"
          @age="setAge"
          @name="setName"
      ></InputModal>
      <CardsModal :isAdd="isFull" @click="openInputs" :isShow="isOpen"></CardsModal>
      <div v-if="isOpen" class="form__list">
        <div class="form__item" v-for="(item, index) in allCards" :key="index">
          <KidCard description="Имя" :text="item.name"></KidCard>
          <KidCard description="Возраст" :text="item.age"></KidCard>
          <Button modifier="delete" @click="onButton(index)">Удалить</Button>
        </div>
      </div>
      <Button v-if="isOpen" @click="click" modifier="primary">Сохранить</Button>
    </div>
  </div>
</template>

<script>
import CardsModal from "@/components/modals/CardsModal";
import Button from "@/components/ui/Button.vue";
import KidCard from "@/components/ui/KidCard";

import {mapMutations, mapState} from "vuex";
import {mapGetters} from "vuex";
import InputModal from "@/components/modals/InputModal";

export default {
  name: "Form",
  components: {InputModal, KidCard, CardsModal, Button},

  data() {
    return {
      name: "",
      age: "",
      value: {
        name: this.name,
        age: this.age,
      },
    };
  },

  methods: {
    ...mapMutations(["deleteCard", "addCard", "saveCards", "openModal", "saveToPreview"]),
    onButton(index) {
      this.deleteCard(index);
    },

    setAge(value) {
      this.age = value;
      this.value.age = value;
    },

    setName(value) {
      this.name = value;
      this.value.name = value;
    },

    openInputs() {
      if (this.isOpen && this.name.trim() && this.age.trim()) {
        this.addCard({
          name: this.name,
          age: this.age,
        });
        this.clearInput();
      }
      if (!this.isOpen) {
        this.openModal()
      }
    },

    click() {
      this.saveToPreview()
    },

    clearInput() {
      this.value = {
        name: "",
        age: "",
      };
    },
  },

  computed: {
    ...mapGetters(["allCards", "lengthCards"]),
    ...mapState({isOpen: 'isOpen'}),

    isFull() {
      return this.lengthCards < 5
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  font-family: var(--font-montseratt);

  &__wrapper {
    max-width: 616px;
    width: 100%;
    height: 100%;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 10px;

    @media (max-width: 560px) {
      flex-direction: column;
    }
  }

  &__list {
    margin: 11px 0 30px 0;
  }
}
</style>
