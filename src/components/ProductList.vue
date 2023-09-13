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
                {id: 1, name: 'Silla', price: 56, image:'/products/silla.jpg', categoryId: 1},
                {id: 2, name: 'Monitor', price: 450, image:'/products/monitor.jpeg', categoryId: 1},
                {id: 3, name: 'Microfono', price: 120, categoryId: 2},
                {id: 4, name: 'Placa Base', price: 256, image:'/products/placa_base.jpeg', categoryId: 2},
                {id: 5, name: 'CPU', price: 650, image:'/products/cpu.jpg', categoryId: 2},
                {id: 6, name: 'Tarjeta Gráfica', price: 1200, image:'/products/rtx_4090.jpg', categoryId: 2}
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