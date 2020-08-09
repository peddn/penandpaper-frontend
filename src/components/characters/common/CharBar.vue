<template>
  <div id="common-charbar">
    <p>{{ module }}</p>
    <div class="columns">
      <div class="column is-2">
        <button class="button is-fullwidth mt-2" v-on:click="toggleOpenModalActive">
          <span class="icon">
            <i class="fas fa-folder-open"></i>
          </span>
          <span>Open Character</span>
        </button>
      </div>
      <div class="column">
        <div class="tabs is-boxed mt-2">
          <ul>
            <li
              is="tab"
              v-for="(character, index) in characters"
              v-bind:character="character"
              v-bind:index="index"
              v-bind:key="character.id"
            ></li>
          </ul>
        </div>
      </div>
    </div>
    <open-modal v-bind:module="module"></open-modal>
  </div>
</template>

<script>
import OpenModal from './charbar/OpenModal.vue';
import Tab from "./charbar/Tab.vue";

export default {
  props: [
    'module'
  ],
  components: {
    OpenModal,
    Tab
  },
  computed: {
    characters() {
      return this.$store.getters['characters/profile']
    }
  },
  methods: {
    toggleOpenModalActive() {
      this.$store.commit('characters/togglePlayOpenModalActive');
    },
  }
};
</script>

<style>
</style>