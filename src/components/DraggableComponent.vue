<template>
    <v-container>
        <v-row>
            <v-col class="col-lg-6 col-md-6 col-sm-12">
                <h3 class="tab-title">Carrinho</h3>
                <p class="tab-subtitle">Total_ 152kWh | R$ 21,59</p>
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
        <v-row class="market-actions">
            <v-btn class="button-checkout">
                Finalizar pedido
            </v-btn>
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

.card-cart {
    background: #06121E!important;
    border-radius: 20px;
    border: #1DCFDE 3px solid;
    padding: 10px;
    margin: 10px;
    min-height: 70vh;
    .item {
        cursor: grab;
        background: #192A3D!important;
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
    .button-checkout {
        @include button-primary
    }
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
    data() {
        return {
            userLocation: null,
            list1: [
                {
                    id: 1,
                    company: "Energy Green",
                    production: 152,
                    city: "Salvador",
                    state: "BA",
                    type: "Solar",
                    price: 14000000.00,
                },
                {
                    id: 4,
                    company: "Joa Energy",
                    production: 542,
                    city: "Joaçaba",
                    state: "PR",
                    type: "Solar",
                    price: 91.20,
                },
            ],
            list2: [
                {
                    id: 2,
                    company: "Hot Energy",
                    production: 98,
                    city: "Fortaleza",
                    state: "CE",
                    type: "Solar",
                    price: 32.20,
                },
                {
                    id: 3,
                    company: "Energy Plus",
                    production: 378,
                    city: "Santos",
                    state: "SP",
                    type: "Solar",
                    price: 54.20,
                }
            ]
        };
    },
    methods: {
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
            this.list.push({ company: "Juan" });
        },
        replace: function () {
            this.list = [{ company: "Edgard" }];
        },
        clone: function (el) {
            return {
                company: el.company + " cloned"
            };
        },
        log: function (evt) {
            window.console.log(evt);
        }
    },
    mounted() {
        this.geolocation();
    }
};
</script>