<template>
    <div class="row">
        <v-col class="col-4">
            <h3>Cart 1</h3>
            <draggable class="list-group" :list="list1" group="people" @change="log">
                <transition-group>
                    <v-card class="list-group-item ma-4 pa-4" v-for="(element, index) in list1" :key="element.name">
                        {{ element.name }} {{ index }}
                    </v-card>
                </transition-group>
            </draggable>
        </v-col>

        <v-col class="col-4">
            <h3>Offers 2</h3>
            
            <draggable class="list-group" :list="list2" group="people" @change="log">
                    <transition-group>
                    <v-card class="list-group-item ma-4 pa-4" v-for="(element, index) in list2" :key="element.name">
                        {{ element.name }} {{ index }}
                    </v-card>
                </transition-group>
            </draggable>
        </v-col>
        <rawDisplayer class="col-4" :value="list1" title="List 1" />
        <rawDisplayer class="col-4" :value="list2" title="List 2" />
    </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
    name: "DraggableComponent",
    display: "Two Lists",
    order: 1,
    components: {
        draggable
    },
    data() {
        return {
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
    }
};
</script>