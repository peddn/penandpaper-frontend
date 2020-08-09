<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img v-bind:src="portraitUrl" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{ character.name}}</p>
      <p class="subtitle is-6">{{ character.abenteurertyp }}</p>
      <label class="checkbox">
        <input type="checkbox" />
      </label>
    </div>
  </div>
</template>

<script>
import { BACKEND_URL } from '../../../../config.js';

export default {
  props: ["module", "character"],
  computed: {
      portraitUrl() {
          return BACKEND_URL + this.character.portrait.formats.medium.url;
      }
  },
  
};
</script>

<style lang="scss">
</style>