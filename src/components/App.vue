<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view></router-view>
    <ul id="flashs">
      <li :key="index" v-for="(flash, index) in flashs">{{ index }} -{{ flash.type }} - {{ flash.message }}</li>
    </ul>
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";

export default {
  components: {
    Toolbar,
  },
  data() {
    return {};
  },
  computed: {
    flashs() {
      return this.$store.state.app.flashs;
    }
  },
  beforeCreate() {
    // dispatch all api calls for the needed data
    //this.$store.dispatch("character/getCharacter");
  },
  updated() {
    const flashCount = this.$store.state.app.flashs.length;
    if(flashCount > 0) {
      console.log(this.$store.state.app.flashs[flashCount-1])
    }
    
  }

};
</script>

<style lang="scss">
@charset "utf-8";

@import url("https://fonts.googleapis.com/css2?family=Overlock&display=swap");

@import "~bulma/bulma";
@import "~@creativebulma/bulma-tooltip";



.charname {
  font-family: "Overlock", cursive;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
}
.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #000;
}
.separator::before {
  margin-right: 0.25em;
}
.separator::after {
  margin-left: 0.25em;
}
</style>