<template>
  <div class="form">
    <Header></Header>
    <main class="main">
      <KidsModal :data="userInput"></KidsModal>
      <CardsModal></CardsModal>
      <Button modifier="primary">Сохранить</Button>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>


import Footer from "@/components/Footer";
import Header from "@/components/Heder";
import KidsModal from "@/components/modals/InputModal";
import CardsModal from "@/components/modals/CardsModal";
import Button from "@/components/ui/Button.vue";

export default {
  name: 'Form',
  components: {KidsModal, CardsModal, Header, Footer, Button},

  data() {
    return {
      userInput: [
        {placeholder: "Имя"}, {placeholder: "Возраст"}
      ]
    }
  },

}
</script>

<style>
.form {
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  font-family: var(--font-montseratt);
}

.main {
  max-width: 616px;
  width: 100%;
  height: 100%;
}

</style>
