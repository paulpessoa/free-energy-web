<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
       
      </v-col>

      <v-col class="mb-4">
        <h1>
          A escolha é sua.
        </h1>
        <h1>
          A energia também.
        </h1>

        <p class="subheading font-weight-regular">
          Free Energy fornece acesso a energia renovável de baixo custo produzida por centenas de produtores espalhados pelo país.
        </p>

        <v-btn class="button-start" to="/market">
          Acessar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.button-start {
  @include button-primary;
}
</style>

<script>
  export default {
    name: 'HelloWorld'
  }
</script>
