<template>
  <div>
    <v-content>
      <v-container>        
      <v-col class="my-10 py-10">
        <h1 style="font-size: 48px; font-weight: 400">A escolha é sua.</h1>
        <h1 style="font-size: 48px; font-weight: 400">A energia também.</h1>
        <p class="my-6" style="font-size: 22px; max-width: 80%">
          Free Energy fornece acesso a energia renovável de baixo custo produzida por centenas de produtores espalhados pelo país.
        </p>
        <v-btn class="button-start my-8" to="/market">Acessar</v-btn>
      </v-col>
    </v-container>
  </v-content>

  <!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
  <v-container class="my-10"  >
    <h2 class="my-4" style="color: #ECA426; font-weight: 400">Plataforma pioneira para compra e venda de energia renovável distribuída</h2>
    <p>Nossa visão é empoderar a vanguarda de produtores e consumidores de energia solar renovável de hoje e do amanhã.</p>
    <v-row class="mx-8 my-10">
      <v-col>
        <h3 style="font-size: 38px; font-weight: 400; color: #34F5C5">+ 110 mil</h3>
        <p>Produtores na plataforma</p>
      </v-col>
      <v-col>
        <h3 style="font-size: 38px; font-weight: 400; color: #34F5C5">+ 4 GW</h3>
        <p>De capacidade disponível.</p>
      </v-col>
      <v-col>
        <h3 style="font-size: 38px; font-weight: 400; color: #34F5C5">+ 11 %</h3>
        <p>Em média de economia.</p>
      </v-col>
    </v-row>
  </v-container>


<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->

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
          <p>A energia é distribuída na rede elétrica, gerando créditos para o produtor.</p>
        </div>
        <div class="d-flex">
          <img src="@/assets/logo.png" style="width: 100px" alt="Logo">
          <p>O produtor escolhe por quanto quer vender seus créditos.</p>
        </div>
        <div class="d-flex">
          <img src="@/assets/logo.png" style="width: 100px" alt="Logo">
          <p>Grandes consumidores de energia renovável compram os créditos no Mercado.</p>
        </div>
      </v-col>
      <v-col class="col-lg-6 col-md-6 col-sm-12 col-img-2">
       <img class="img-pc" src="@/assets/view-free-ennergy.png" alt="Free Ennergy">
      </v-col>
    </v-row>
  </v-container>

  <v-container class="py-10 my-10 ">
    <h2 style="color: #ECA426; font-size: 38px; font-weight: 400">Boas-vindas à Free Energy</h2>
    <p>A plataforma pioneira em prover acordos descentralizados entre produtores e grandes consumidores de energia renovável.</p>
    <div class="d-flex justify-center py-10 my-10">
      <v-btn class="button-start justify-space-between" to="/market">Faça parte</v-btn>
    </div>    

  </v-container>
</div>
</template>

<style lang="scss" scoped>
@import '~@/scss/_variables.scss';

.col-img-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-pc{
  width: 100%;
}
.button-start {
  @include button-primary;
}

.v-content {
  height: 650px;
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
