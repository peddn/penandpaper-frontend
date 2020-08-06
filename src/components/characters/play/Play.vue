<template>
  <div id="characters-play">
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
            <li class="is-active">
              <a>
                <span class="mr-2">Lughaid</span>
                <button class="delete"></button>
              </a>
            </li>
            <li>
              <a>
                <span class="mr-2">Harrbold</span>
                <button class="delete"></button>
              </a>
            </li>
            <li>
              <a>
                <span class="mr-2">Earelia</span>
                <button class="delete"></button>
              </a>
            </li>
            <li>
              <a>
                <span class="mr-2">Elendil</span>
                <button class="delete"></button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-8">
        <div class="box">
          <hero></hero>
          <div class="container">
            <div class="separator is-uppercase">Basiseigenschaften</div>
          </div>
          <basestats></basestats>
          <statusbar></statusbar>
        </div>
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

    <div class="modal" id="characters-open-modal" v-bind:class="{ 'is-active': isOpenModalActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Open Characters</p>
          <button class="delete" aria-label="close" v-on:click="toggleOpenModalActive"></button>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-1by1">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                  <label class="checkbox">
                    <input type="checkbox" />
                  </label>
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-1by1">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                  <label class="checkbox">
                    <input type="checkbox" />
                  </label>
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-1by1">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                  <label class="checkbox">
                    <input type="checkbox" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" v-on:click="toggleOpenModalActive">Open</button>
          <button class="button" v-on:click="toggleOpenModalActive">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Basestats from "./Basestats.vue";
import Statusbar from "./Statusbar.vue";

export default {
  data() {
    return {
      openModalActive: false,
    };
  },
  components: {
    Hero,
    Basestats,
    Statusbar,
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