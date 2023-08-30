<script lang="ts">
import ProductCard from '@/components/ProductCard.vue';

import type { Product, CartDetail } from '@/model/Types';

export default {
    components:{
        ProductCard,
    },

    data(){
        return {
            products: <Array<Product>> [
                {id: 1, name: 'Silla', price: 56},
                {id: 2, name: 'Monitor', price: 450},
                {id: 3, name: 'Microfono', price: 120},
                {id: 4, name: 'Placa Base', price: 256},
                {id: 5, name: 'CPU', price: 650},
                {id: 6, name: 'Tarjeta Gráfica', price: 1200}
            ],
            details: <Array<CartDetail>>[]
        }
    },

    methods: {
        onAddProduct(productId: number){
            const detailFound = this.details.find( d => d.productId === productId)

            if (detailFound) {
                detailFound.quantity += 1
            } else {
                this.details.push({
                    productId,
                    quantity: 1
                })
            }
            
        }
    }
}

</script>

<template>    
    <v-row>
        <v-col v-for="p in products" cols="4">
            <ProductCard                 
                :product="p"
                @addProduct="onAddProduct(p.id)"
            />
        </v-col>
    </v-row>        
</template>