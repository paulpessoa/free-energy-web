<template>
    <v-container>
        <v-row>
            <v-col class="col-6">
                <h3>Carrinho</h3>
                <p>Total_ 152kWh | R$ 21,59</p>
                <v-card>
                    <h3>Cart 1</h3>
                    <draggable class="list-group" :list="list1" group="people" @change="log">
                        <transition-group>
                            <v-card class="list-group-item ma-4 pa-4" v-for="(element, index) in list1"
                                :key="element.name">
                                {{ element.name }} {{ index }}
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card>
            </v-col>

            <v-col class="col-6">
                <h3>Ofertas</h3>
                <p>Exibindo resultados para <b>{{userLocation}}</b></p>
                <v-card>
                    <h3>Offers 2</h3>
                    <draggable class="list-group" :list="list2" group="people" @change="log">
                        <transition-group>
                            <v-card class="list-group-item ma-4 pa-4" v-for="(element, index) in list2"
                                :key="element.name">
                                {{ element.name }} {{ index }}
                            </v-card>
                        </transition-group>
                    </draggable>
                </v-card>
            </v-col>
            <rawDisplayer class="col-6" :value="list1" title="List 1" />
            <rawDisplayer class="col-6" :value="list2" title="List 2" />
        </v-row>

    </v-container>
</template>
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
                { name: "John", id: 1 },
                { name: "Joao", id: 2 },
                { name: "Jean", id: 3 },
                { name: "Gerard", id: 4 }
            ],
            list2: [
                { name: "Juan", id: 5 },
                { name: "Edgard", id: 6 },
                { name: "Johnson", id: 7 }
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
            this.list.push({ name: "Juan" });
        },
        replace: function () {
            this.list = [{ name: "Edgard" }];
        },
        clone: function (el) {
            return {
                name: el.name + " cloned"
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