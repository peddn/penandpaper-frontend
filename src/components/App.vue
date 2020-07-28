<template>
  <div class="box" id="app">
    {{ msg }}
  </div>
</template>

<script>
export default {
      data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style lang="scss">
    @charset "utf-8";
    @import "~bulma/sass/utilities/_all.sass";
    @import "~bulma/sass/base/_all.sass";
    @import "~bulma/sass/elements/box.sass";
</style>