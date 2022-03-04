import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    cards: [],
    preview: [],
    isOpen: false,
    user: {
      name: "Василий",
      age: "30",
    },
  }),
  mutations: {
    deleteCard(state, index) {
      state.cards.splice(index, 1);
    },

    addCard(state, card) {
      state.cards.push(card);
    },

    saveCards(state, localCards) {
      state.cards = localCards;
    },

    openModal(state) {
      state.isOpen = true;
    },

    saveToPreview(state) {
      state.preview = state.cards.slice();
    },
  },
  getters: {
    allCards(state) {
      return state.cards;
    },

    lengthCards(state) {
      return state.cards.length;
    },
  },
});
