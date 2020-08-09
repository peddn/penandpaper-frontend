<template>
  <div class="modal" id="characters-open-modal" v-bind:class="{ 'is-active': isOpenModalActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Open Characters</p>
        <button class="delete" aria-label="close" v-on:click="toggleOpenModalActive"></button>
      </header>
      <section class="modal-card-body">
        <char-card
          v-for="(character, index) in closedCharacters"
          v-bind:module="module"
          v-bind:character="character"
          v-bind:index="index"
          v-bind:key="character.id"
        ></char-card>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" v-on:click="toggleOpenModalActive">Open</button>
        <button class="button" v-on:click="toggleOpenModalActive">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import CharCard from './CharCard.vue';

export default {
  props: ["module"],
  components: {
    CharCard
  },
  data() {
    return {
      openModalActive: false,
    };
  },
  computed: {
    isOpenModalActive() {
      return this.$store.state.characters.playOpenModalActive;
    },
    openedCharacters() {
      return this.$store.getters["characters/getOpenedCharactersByModule"](this.module);
    },
    closedCharacters() {
      return this.$store.getters["characters/getClosedCharactersByModule"](this.module);
    }
  },
  methods: {
    toggleOpenModalActive() {
      this.$store.commit("characters/togglePlayOpenModalActive");
    }
  }
};
</script>

<style lang="scss">
</style>