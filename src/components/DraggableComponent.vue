<template>
    <v-container>
        <v-row>
            <v-col class="col-6">
                <h3>Carrinho</h3>
                <p>Total_ 152kWh | R$ 21,59</p>
                <v-card class="card-cart">                  
                    <draggable class="list-group" :list="list1" group="people" @change="log">
                        <transition-group>

                            <v-card class="list-group-item ma-4 pa-4" v-for="(element, index) in list1"
                                :key="element.company">
                                Index:  {{ index }}
                                <br/>
                                Company: {{ element.company }}
                                <br/>
                                Production: {{ element.production }}
                                <br/>
                                City: {{ element.city }}
                                <br/>
                                State: {{ element.state }}
                                <br/>
                                type: {{ element.type }}
                                <br/>
                                Price: {{ element.price }}
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card>
            </v-col>

            <v-col class="col-6">
                <h3>Ofertas</h3>
                <p>Exibindo resultados para <b>{{userLocation}}</b></p>
                <v-card class="card-cart">
                    <draggable class="list-group" :list="list2" group="people" @change="log">
                        <transition-group>
                            <v-card class="list-group-item ma-4 pa-4" v-for="(element, index) in list2"
                                :key="element.company">
                                Index:  {{ index }}
                                <br/>
                                Company: {{ element.company }}
                                <br/>
                                Production: {{ element.production }}
                                <br/>
                                City: {{ element.city }}
                                <br/>
                                State: {{ element.state }}
                                <br/>
                                type: {{ element.type }}
                                <br/>
                                Price: {{ element.price }}
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<style lang="scss" scoped>
    .card-cart {
        background-color: #06121E;
        border-radius: 20px;
        border: #1DCFDE 3px solid;
        padding: 10px;
        margin: 10px;
        min-height: 70vh;
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
                price: 14.20,
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
            ]
        };
    },
    methods: {
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