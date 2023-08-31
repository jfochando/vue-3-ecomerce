<script lang="ts">
import ProductCard from '@/components/ProductCard.vue';

import type { Product } from '@/model/Types';

export default {
    components:{
        ProductCard,
    },

    data(){
        return {
            products: [
                {id: 1, name: 'Silla', price: 56},
                {id: 2, name: 'Monitor', price: 450},
                {id: 3, name: 'Microfono', price: 120},
                {id: 4, name: 'Placa Base', price: 256},
                {id: 5, name: 'CPU', price: 650},
                {id: 6, name: 'Tarjeta Gráfica', price: 1200}
            ] as Product[]
            
        }
    },
}

</script>

<template>    
    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="4">
            <ProductCard :product="p" />
        </v-col>
    </v-row>        
</template>