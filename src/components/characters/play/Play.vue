<template>
  <div id="characters-play">

    <char-bar module="play"></char-bar>
<!--
    <div class="columns">
      <div class="column is-8">

      </div>
      <div class="column is-4">
        <div class="box">
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            <div class="column">
              <p>
                <strong>EW:</strong>Einhandschwert
              </p>
              <p>
                <span
                  class="tag is-success has-tooltip-arrow has-tooltip-bottom"
                  data-tooltip="Fertigkeitswert"
                >+10</span>
                <span
                  class="tag is-success has-tooltip-arrow has-tooltip-bottom"
                  data-tooltip="Angriff von Hinten"
                >+2</span>
                <span
                  class="tag is-success has-tooltip-arrow has-tooltip-bottom"
                  data-tooltip="Angreifer liegt auf dem Boden"
                >-4</span>
              </p>
            </div>
            <div class="column is-narrow">
              <article class="message">
                <div class="message-body">
                  <p class="is-size-5 has-text-weight-bold">25</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            <div class="column">
              <p>
                <strong>EW:</strong>Einhandschwert
              </p>
              <p>
                <span class="tag is-success">+10</span>
                <span class="tag is-success">-2</span>
                <span class="tag is-success">+4</span>
              </p>
            </div>
            <div class="column is-narrow">
              <article class="message">
                <div class="message-body">
                  <p class="is-size-5 has-text-weight-bold">25</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            <div class="column">
              <p>
                <strong>EW:</strong>Einhandschwert
              </p>
              <p>
                <span class="tag is-success">+10</span>
                <span class="tag is-success">-2</span>
                <span class="tag is-success">+4</span>
              </p>
            </div>
            <div class="column is-narrow">
              <article class="message">
                <div class="message-body">
                  <p class="is-size-5 has-text-weight-bold">25</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            <div class="column">
              <p>
                <strong>EW:</strong>Einhandschwert
              </p>
              <p>
                <span class="tag is-success">+10</span>
                <span class="tag is-success">-2</span>
                <span class="tag is-success">+4</span>
              </p>
            </div>
            <div class="column is-narrow">
              <article class="message">
                <div class="message-body">
                  <p class="is-size-5 has-text-weight-bold">25</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            <div class="column">
              <p>
                <strong>EW:</strong>Einhandschwert
              </p>
              <p>
                <span class="tag is-success">+10</span>
                <span class="tag is-success">-2</span>
                <span class="tag is-success">+4</span>
              </p>
            </div>
            <div class="column is-narrow">
              <article class="message">
                <div class="message-body">
                  <p class="is-size-5 has-text-weight-bold">25</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            <div class="column">
              <p>
                <strong>EW:</strong>Einhandschwert
              </p>
              <p>
                <span class="tag is-success">+10</span>
                <span class="tag is-success">-2</span>
                <span class="tag is-success">+4</span>
              </p>
            </div>
            <div class="column is-narrow">
              <article class="message">
                <div class="message-body">
                  <p class="is-size-5 has-text-weight-bold">25</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            <div class="column">
              <p>
                <strong>EW:</strong>Einhandschwert
              </p>
              <p>
                <span class="tag is-success">+10</span>
                <span class="tag is-success">-2</span>
                <span class="tag is-success">+4</span>
              </p>
            </div>
            <div class="column is-narrow">
              <article class="message">
                <div class="message-body">
                  <p class="is-size-5 has-text-weight-bold">25</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
-->
  </div>
</template>

<script>
import CharBar from '../common/CharBar.vue';

export default {
  data() {
    return {
      openModalActive: false,
    };
  },
  components: {
    CharBar
  },
  computed: {
    isOpenModalActive() {
      return this.openModalActive;
    },
  },
  methods: {
    toggleOpenModalActive() {
      this.openModalActive = !this.openModalActive;
      return this.openModalActive;
    },
  },
};
</script>

<style lang="scss">
</style>




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