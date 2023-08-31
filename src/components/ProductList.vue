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
                {id: 1, name: 'Silla', price: 56, image:'https://euromueble.es/pub/media/catalog/product/cache/350051f4e6dd08acd6162c67a6f4c169/s/f/sfa61yt677.jpg'},
                {id: 2, name: 'Monitor', price: 450, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO--prt8C1_Q6o2Nt4ugnvpP_yL0o-KQqdlO3tbljApelUb9AKkyMsMEmOlOkqzgOyZDw&usqp=CAU'},
                {id: 3, name: 'Microfono', price: 120},
                {id: 4, name: 'Placa Base', price: 256, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpo33Aa99Gidg9cIqa2uUF8s4U1CuHg9LkoQ&usqp=CAU'},
                {id: 5, name: 'CPU', price: 650, image:'https://areagamer.es/wp-content/uploads/2020/03/Intel-Core-i9-9900.jpg'},
                {id: 6, name: 'Tarjeta Gráfica', price: 1200, image:'https://media.lifeinformatica.com/contents/Life/NVIDIA-900-1G136-2530-000/imgs/900-1G136-2530-000-03.jpg'}
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