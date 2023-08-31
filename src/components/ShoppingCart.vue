<script lang="ts">
import { mapState } from 'pinia'
import { useCartStore } from '@/stores/cart'
import  ShoppingCartItem from '@/components/ShoppingCartItem.vue'

export default {
    components: {
        ShoppingCartItem
    },
    
    computed: {
        // cartStore(){
        //     return useCartStore()
        // },
        // details(){            
        //     return this.cartStore.details
        //},
        ...mapState(useCartStore,['details'])
    }
}

</script>

<template>
    <v-card class="mt-4">
        <v-card-text>
            <v-card-title class="text-center" v-if="details.length>0">Productos agregados al carrito</v-card-title>
            <v-list v-if="details.length > 0">
                <ShoppingCartItem v-for="detail in details" :key="detail.product.id" :detail="detail" />
            </v-list>
            <p v-else class="text-center">
                Aún no has agregado productos a tu carrito de compras.<br>
                Haz <RouterLink to="/">click aquí</RouterLink> para ver los productos disponibles.
            </p>
        </v-card-text>
    </v-card>
    
</template>