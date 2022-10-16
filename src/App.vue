<template>
  <v-app>
    <v-app-bar app elevation="0" class="">
      <div class="d-flex align-center">
        <router-link to="/" style="text-decoration: none" class="d-flex align-center">
          <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="./assets/logo.png" transition="scale-transition"
            width="40" />
          <h1 style="color: white"> Free Energy </h1>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/market" text>
        Mercado
      </v-btn>
      <v-btn to="/account" text>
        Sua Conta
      </v-btn>
      <v-btn to="/configuration" text>
        Configurações
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-divider class="mx-8" color="#fff"></v-divider>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import '@/scss/main.scss';

* {
  color: #fff;
  font-family: $font-family;
}

.v-app-bar {
  background-color: $color-primary !important;

  .v-btn {
    color: $color-tertiary;
    text-transform: none;
  }
}

.v-main {
  background-color: $color-primary;
}
</style>
