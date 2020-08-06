<template>
  <div id="characters">
    <section class="section">
      <div class="container">
        <nav class="navbar is-info" role="navigation" aria-label="main navigation">
          <div class="navbar-menu">
            <div class="navbar-start">
              <div class="navbar-item">
                <div class="buttons">
                  <router-link class="button is-success" to="/characters/play">
                    <span class="icon">
                      <i class="fas fa-dice"></i>
                    </span>
                    <span>Play</span>
                  </router-link>
                  <router-link class="button is-success" to="/characters/create">
                    <span class="icon">
                      <i class="fas fa-user-plus"></i>
                    </span>
                    <span>Create</span>
                  </router-link>
                  <router-link class="button is-success" to="/characters/improve">
                    <span class="icon">
                      <i class="fas fa-angle-double-up"></i>
                    </span>
                    <span>Improve</span>
                  </router-link>
                  <router-link class="button is-success" to="/characters/equip">
                    <span class="icon">
                      <i class="fas fa-gem"></i>
                    </span>
                    <span>Equip</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>