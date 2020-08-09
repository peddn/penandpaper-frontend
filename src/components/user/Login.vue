<template>
  <section class="section" id="login">
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-4 is-offset-4">
          <div class="card">
            <div class="card-content">
              <p class="title has-text-centered">login</p>
              <div class="field">
                <div class="control">
                  <input class="input" type="email" placeholder="Email" v-model="email" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input" type="password" placeholder="Password" v-model="password" />
                </div>
              </div>
              <div class="field is-grouped is-grouped-right">
                <p class="control">
                  <a class="button is-light" v-on:click="cancelHandler">cancle</a>
                </p>
                <p class="control">
                  <a
                    class="button is-primary"
                    v-on:click="loginHandler"
                    v-bind:disabled="isInputValid"
                  >login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    isInputValid() {
      if (this.email !== "" && this.password !== "") {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    loginHandler() {
      this.$store.dispatch('user/login', {
        email: this.email,
        password: this.password
      });
    },
    cancelHandler() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style lang="scss">
</style>