<script lang="ts">

import { mapActions, mapState } from 'pinia';
import { useProductsStore } from '../../stores/products';


export default {

    methods:{
        ...mapActions(useProductsStore, ['orderByName', 'orderByNameDesc', 'orderByPrice', 'orderByPriceDesc'])
    },
    computed:{
        ...mapState( useProductsStore, ['order'] )
    }
}
</script>


<template>
    <v-list-subheader>Ordenar por:</v-list-subheader>
    <v-list-item :active="order === 'price'"
        color="grey-lighten-4"
        link
        @click="orderByPrice"
    >
        <v-list-item-title>
            Precio ascendente
        </v-list-item-title>
    </v-list-item>
    <v-list-item :active="order === 'priceDesc'"
        color="grey-lighten-4"
        link
        @click="orderByPriceDesc"
    >
        <v-list-item-title>
            Precio descendente
        </v-list-item-title>
    </v-list-item>
    <v-list-item :active="order === 'name'"
        color="grey-lighten-4"
        link
        @click="orderByName"
    >
        <v-list-item-title>
            Nombre ascendente
        </v-list-item-title>
    </v-list-item>
    <v-list-item :active="order === 'nameDesc'"
        color="grey-lighten-4"
        link
        @click="orderByNameDesc"
    >
        <v-list-item-title>
            Nombre descendente
        </v-list-item-title>
    </v-list-item>
</template>
