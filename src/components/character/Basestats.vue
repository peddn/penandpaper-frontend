<template>
  <section class="section">
    <div class="container">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="subtitle mb-5 is-uppercase">Stärke</p>
            <p class="title">{{ characterBasiseigenschaften.st }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="subtitle mb-5 is-uppercase">Geschicklichkeit</p>
            <p class="title">{{ characterBasiseigenschaften.gs }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="subtitle mb-5 is-uppercase">Gewandheit</p>
            <p class="title">{{ characterBasiseigenschaften.gw }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="subtitle mb-5 is-uppercase">Konstitution</p>
            <p class="title">{{ characterBasiseigenschaften.ko }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="subtitle mb-5 is-uppercase">Intelligenz</p>
            <p class="title">{{ characterBasiseigenschaften.in }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="subtitle mb-5 is-uppercase">Zaubertalent</p>
            <p class="title">{{ characterBasiseigenschaften.zt }}</p>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {};
  },
  computed: {
    characterBasiseigenschaften() {
      return this.$store.state.character.basiseigenschaften;
    }
  },
};
</script>

<style>
</style>