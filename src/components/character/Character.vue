<template>
  <div id="character">
    <hero></hero>
    <div class="container">
      <div class="separator is-uppercase">Basiseigenschaften</div>
    </div>
    <basestats></basestats>
    <statusbar></statusbar>
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
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>