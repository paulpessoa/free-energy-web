<template>
    <v-card class="card-cart">
        <v-card-title>
            <h3>Cart 1</h3>
        </v-card-title>
        <v-card-text>
            <draggable class="list-group" :list="list1" group="people" @change="log">
                <transition-group>
                    <v-card class="list-group-item ma-4 pa-4" v-for="(element, index) in list1"
                        :key="element.name">
                        {{ element.name }} {{ index }}
                    </v-card>
                </transition-group>
            </draggable>
        </v-card-text>
    </v-card>
</template>

<style lang="sass" scoped>
.card-cart
    background-color: #f5f5f5
    border-radius: 10px
    padding: 10px
    margin: 10px
</style>

<script>
export default {
    name: "CardCartComponent"
}
</script>