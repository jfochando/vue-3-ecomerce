<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default {
    computed: {
        details(){
            const cartStore = useCartStore()
            return cartStore.details
        }
    }
}

</script>

<template>
    <v-card class="mt-4">
        <v-card-text>
            <v-card-title class="text-center">Productos agregados al carrito</v-card-title>
            <v-list>
                <v-list-item v-for="detail in details" :key="detail.productId" :value="detail.productId">
                    <v-list-item-title>Product: {{ detail.productId }} - Quantity: {{ detail.quantity }}</v-list-item-title>                    
                </v-list-item>
            </v-list>            
        </v-card-text>
    </v-card>
    
</template>