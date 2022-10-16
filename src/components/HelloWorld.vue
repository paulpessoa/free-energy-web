<template>
  <div>
    <v-content>
      <v-container>
        
      <v-col class="mb-4">
        <h1>
          A escolha é sua.
        </h1>
        <h1>
          A energia também.
        </h1>

        <p>
          Free Energy fornece acesso a energia renovável de baixo custo produzida por centenas de produtores espalhados pelo país.
        </p>

        <v-btn class="button-start" to="/market">
          Acessar
        </v-btn>
      </v-col>
    </v-container>
  </v-content>
  <v-container>
    <h2>Plataforma pioneira para compra e venda de energia renovável distribuída</h2>
    <p>Nossa visão é empoderar a vanguarda de produtores e consumidores de energia solar renovável de hoje e do amanhã.</p>


    <v-row>
      <v-col>
        <h3>+ 110 mil</h3>
        <p>Produtores na plataforma</p>
      </v-col>
      <v-col>
        <h3>+ 4 GW</h3>
        <p>De capacidade disponível.</p>
      </v-col>
      <v-col>
        <h3>+ 11 %</h3>
        <p>Em média de economia.</p>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <h2>Como funciona</h2>

    <v-row>
      <v-col class="col-lg-6 col-md-6 col-sm-12">
        <div class="d-flex">
          <img src="@/assets/logo.png" style="width: 100px" alt="Logo">
          <p>Produtores de energia renovável disponibilizam sua produção.</p>
        </div>
        <div class="d-flex">
          <img src="@/assets/logo.png" style="width: 100px" alt="Logo">
          <p>Produtores de energia renovável disponibilizam sua produção.</p>
        </div>
        <div class="d-flex">
          <img src="@/assets/logo.png" style="width: 100px" alt="Logo">
          <p>Produtores de energia renovável disponibilizam sua produção.</p>
        </div>
        <div class="d-flex">
          <img src="@/assets/logo.png" style="width: 100px" alt="Logo">
          <p>Produtores de energia renovável disponibilizam sua produção.</p>
        </div>
      </v-col>
      <v-col class="col-lg-6 col-md-6 col-sm-12">
       <img src="@/assets/view-free-ennergy.png" alt="Free Ennergy">
      </v-col>
    </v-row>

  </v-container>

  <v-container>
    <h2>Boas-vindas à Free Energy</h2>
    <p>A plataforma pioneira em prover acordos descentralizados entre produtores e grandes consumidores de energia renovável.</p>
    <v-btn>Faça parte</v-btn>
  </v-container>
</div>
</template>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.button-start {
  @include button-primary;
}

.v-content {
  height: 90vh;
  background-image: url('../assets/world-background.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
  export default {
    name: 'HelloWorld'
  }
</script>
