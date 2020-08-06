<template>
  <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/" exact-active-class="is-active">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/characters/play" exact-active-class="is-active">Characters</router-link>
          <router-link class="navbar-item" to="/locations" exact-active-class="is-active">Locations</router-link>
          <router-link class="navbar-item" to="/campaigns" exact-active-class="is-active">Campaigns</router-link>
          <router-link class="navbar-item" to="/adventures" exact-active-class="is-active">Adventures</router-link>
          <router-link class="navbar-item" to="/groups" exact-active-class="is-active">Groups</router-link>

        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <template v-if="isAuthenticated">
                <router-link class="button" to="/profile">
                  <strong>Profile</strong>
                </router-link>
                <a class="button">
                  <strong>logout</strong>
                </a>
              </template>

              <router-link class="button" to="/login" v-else>
                <strong>Login</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters["app/isAuthenticated"];
    },
  },
};
</script>

<style lang="scss">
</style>