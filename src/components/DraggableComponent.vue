<template>
    <v-container>
        <v-row>
            
            <!--------------------- RIGHT BOX ----------------------->
            <v-col class="col-lg-6 col-md-6 col-sm-12">
                <h3 class="tab-title">Carrinho</h3>
                <p class="tab-subtitle">Total: {{sumProduction}}kWh | R$ {{sumPrice.toFixed(2)}}</p>
                <v-card class="card-cart">
                    <draggable :list="list1" group="people" @change="log">
                        <transition-group class="d-flex flex-row flex-wrap">
                            <div class="col-sm-12 col-md-12 col-lg-6" v-for="(element, index) in list1"
                                :key="element.company">
                                <v-card class="item ma-2 pa-4">
                                    <v-card-title class="title my-0 py-0" style="color: #ECA426">

                                        <h2 class="my-2 pa-0">{{ element.production }}</h2>
                                        <span class="mx-2">KWh</span>

                                    </v-card-title>
                                    <v-card-text>
                                        <div class="my-2">
                                            <v-icon small>mdi-map-marker</v-icon> {{ element.city }}, {{ element.state
                                            }}
                                        </div>
                                        <div class="my-2">
                                            <v-icon small>mdi-white-balance-sunny</v-icon> {{ element.type }}
                                        </div>
                                        <div class="my-2">
                                            <b>R$</b> {{ element.price}} / KWh
                                        </div>
                                        <v-btn @click="removeCart()" class="button-item ma-0 pa-0" text>
                                            Remover do carrinho
                                            <v-icon small>mdi-arrow-right</v-icon>
                                        </v-btn>
                                        <span v-show="false">{{index}}</span>
                                    </v-card-text>
                                </v-card>
                            </div>


                        </transition-group>
                    </draggable>
                </v-card>
            </v-col>
        
            <!--------------------- RIGHT BOX ----------------------->
            <v-col class="col-lg-6 col-md-6 col-sm-12">
                <h3 class="tab-title">Ofertas</h3>
                <p class="tab-subtitle">
                    <v-icon color="white" small>mdi-map-marker</v-icon> Exibindo resultados para <b>{{userLocation}}</b>
                </p>
                <v-card class="card-cart">
                    <draggable :list="list2" group="people" @change="log">
                        <transition-group class="d-flex flex-row flex-wrap">
                            <div class="col-sm-12 col-md-12 col-lg-6" v-for="(element, index) in list2"
                                :key="element.company">
                                <v-card class="item ma-2 pa-4">
                                    <v-card-title class="title my-0 py-0" style="color: #ECA426">
                                        <h2 class="my-2 pa-0">{{ element.production }}</h2>
                                        <span class="mx-2">KWh</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <div class="my-2">
                                            <v-icon small>mdi-map-marker</v-icon> {{ element.city }}, {{ element.state
                                            }}
                                        </div>
                                        <div class="my-2">
                                            <v-icon small>mdi-white-balance-sunny</v-icon> {{ element.type }}
                                        </div>
                                        <div class="my-2">
                                            <b>R$</b> {{ element.price}} / KWh
                                        </div>
                                        <v-btn @click="addCart()" class="button-item ma-0 pa-0" text>
                                            <v-icon small>mdi-arrow-left</v-icon>
                                            Adicionar ao carrinho
                                        </v-btn>
                                        <span v-show="false">{{index}}</span>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </transition-group>
                    </draggable>
                </v-card>
            </v-col>
        </v-row>

        <!--------------------- DIALOG ----------------------->
        <v-row class="market-actions">
            <v-dialog  v-model="dialog" max-width="400">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="button-checkout" v-bind="attrs" v-on="on"> Continuar </v-btn>
                </template>
                <v-card class="dialog-content" v-if="checkButton">
                    <h2 class="my-6">
                        Resumo da Compra
                    </h2>
                    <v-card-title class="ma-0 px-0">
                        <h2 style="color: #ECA426" class="pa-0 ma-0">{{sumProduction}}</h2>
                        <span style="color: #ECA426" class="pa-0 ma-0">KWh</span>
                        <v-spacer></v-spacer>
                        <p class="pa-0 ma-0"><b>R$</b> {{ sumPrice.toFixed(2) }} / KWh </p>
                    </v-card-title>

                    <v-card-actions class="my-6">
                        <v-btn text color="#1DCFDE" dark @click="dialog = false"> Voltar </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="button-checkout" @click="checkButton = false"> Finalizar </v-btn>
                    </v-card-actions>
                </v-card>
                
                
                <v-card class="dialog-content" v-else>
                    <v-icon color="#34F5C5" large>mdi-check-all</v-icon>
                    <h2> Compra realizada! </h2>
                    <p>Você já pode ursufruir da sua energia.</p>
                    <v-btn class="button-checkout" @click="checkOut()"> Concluir </v-btn>
                </v-card>
        </v-dialog>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
@import '~@/scss/_variables.scss';

.tab-title {
    color: $color-tertiary;
}

.tab-subtitle {
    color: #EDF3F4;
}

.dialog-content{
    text-align: center;
    background: #06121E !important;
    border: #1DCFDE 3px solid;
    border-radius: 20px;
    padding: 30px;
    .v-card-text{
        padding: 20px;
        
    }
}
.card-cart {
    background: #06121E !important;
    border-radius: 20px;
    border: #1DCFDE 3px solid;
    padding: 10px;
    margin: 10px;
    min-height: 70vh;

    .item {
        cursor: grab;
        background: #192A3D !important;
        border-radius: 20px;
        border: #1DCFDE 3px solid;
        border-left: 0px;
        border-right: 0px;
        padding: 10px;
        margin: 10px;

        .title {
            h2 {
                color: $color-secondary;
                font-size: 40px;
                font-weight: 400;
            }

            span {
                color: $color-secondary;
                font-size: 18px;
            }
        }

        p,
        div,
        h3,
        .v-icon {
            color: #EDF3F4;
        }

        .button-item {
            text-transform: none;
            color: $color-tertiary;

            .v-icon {
                color: $color-tertiary;
            }
        }
    }
}


.market-actions {
    justify-content: center;
}
.button-checkout {
    @include button-primary
}
</style>

<script>
import draggable from "vuedraggable";
import axios from "axios";

export default {
    name: "DraggableComponent",
    display: "Two Lists",
    order: 1,
    components: {
        draggable
    },
    computed: {
  sumProduction: function(){
    return this.list1.reduce(function(total, item){
      return total + item.production; 
    },0);
  },
  sumPrice: function(){
    return this.list1.reduce(function(total, item){
      return total + item.price; 
            },0);
        }
    },
    data() {
        return {
            checkButton: true,
            sumCart: 685,
            dialog: false,
            userLocation: null,
            list2: [

            ],
            list1: [
                {
                    id: 9999999,
                    company: "Joa Energy",
                    production: 542,
                    city: "Joaçaba",
                    state: "PR",
                    type: "Solar",
                    price: 91.20,
                },
            ],
        };
    },
    methods: {
        listProducts(){
            axios.get('/products')
            .then(response => {
                this.list2 = response.data
                console.log(response.data[0].city)
            })
        },
        checkOut() {
            this.$router.push('/');
        },
        addCart() {
            alert("Arraste o item para o carrinho");
        },
        removeCart() {
            alert("Arraste o item para as ofertas");
        },
        geolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        },
        showPosition(position) {
            axios
                .get("https://www.mapquestapi.com/geocoding/v1/reverse?key=TPWvRrsfpgGWBACqqXd94fbDcfVpy2WJ&location=" + position.coords.latitude + "%2C" + position.coords.longitude + "&outFormat=json&thumbMaps=false")
                .then(response => {
                    this.userLocation = response.data.results[0].locations[0];
                    this.userLocation == ''
                        ?
                        (this.userLocation = "Localização não definida")
                        :
                        (this.userLocation = `${this.userLocation.adminArea5} - ${this.userLocation.adminArea3}, ${this.userLocation.adminArea1} `)
                });
        },
        add: function () {
            this.$store.commit("sumProduction", this.sumProduction);
            this.$store.commit("sumPrice", this.sumPrice);

        },
        log: function (evt) {
            window.console.log(evt);
        }
        },
    mounted() {
        this.geolocation();
    },
    created() {
        this.listProducts()
    }
}
</script>