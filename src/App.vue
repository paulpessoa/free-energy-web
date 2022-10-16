<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/" class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/logo.png"
            transition="scale-transition"
            width="40"
          />
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
