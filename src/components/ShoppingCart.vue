<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default {
    methods: {
        decrementQuantity(productId :number){            
            this.cartStore.decrement(productId)
        },
        incrementQuantity(productId :number){            
            this.cartStore.increment(productId)
        },
        deleteProduct(productId :number){
            this.cartStore.deleteProduct(productId)
        }
    },
    computed: {
        cartStore(){
            return useCartStore()
        },
        details(){            
            return this.cartStore.details
        }
    }
}

</script>

<template>
    <v-card class="mt-4">
        <v-card-text>
            <v-card-title class="text-center" v-if="details.length>0">Productos agregados al carrito</v-card-title>
            <v-list v-if="details.length > 0">
                <v-list-item v-for="detail in details" :key="detail.productId" :value="detail.productId">
                    <v-list-item-title>Product: {{ detail.productId }} <span class="ml-6">Cantidad :</span>
                        <v-btn
                            class="ml-2"
                            size="x-small"
                            icon="mdi-minus"
                            @click="decrementQuantity(detail.productId)" 
                        />
                        {{ detail.quantity }}
                        <v-btn
                            size="x-small"
                            icon="mdi-plus"
                            @click="incrementQuantity(detail.productId)" 
                        />
                        <v-btn
                            size="small"
                            icon="mdi-trash-can-outline"
                            variant="plain"
                            class="ml-3"
                            @click="deleteProduct(detail.productId)" 
                        />
                        
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <p v-else class="text-center">
                Aún no has agregado productos a tu carrito de compras.<br>
                Haz <RouterLink to="/">click aquí</RouterLink> para ver los productos disponibles.
            </p>
        </v-card-text>
    </v-card>
    
</template>