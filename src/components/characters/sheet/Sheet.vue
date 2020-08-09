<template>
  <div id="character-sheet">
    <div class="box">
      <hero></hero>
      <div class="container">
        <div class="separator is-uppercase">Basiseigenschaften</div>
      </div>
      <basestats></basestats>
      <statusbar></statusbar>
    </div>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Basestats from "./Basestats.vue";
import Statusbar from "./Statusbar.vue";

export default {
  components: {
    Hero,
    Basestats,
    Statusbar,
  },
};
</script>

<style lang="scss">
</style>