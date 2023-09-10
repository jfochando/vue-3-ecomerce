<script lang="ts">
import { mapState } from 'pinia'
import { useCartStore } from '@/stores/cart'
import  ShoppingCartItem from '@/components/cart/ShoppingCartItem.vue'

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
        <v-card-title v-if="details.length>0">Productos agregados al carrito</v-card-title>
        <v-card-text>            
            <v-table v-if="details.length > 0">
                <thead>
                    <tr>
                        <th class="text-left">
                        Producto
                        </th>
                        <th class="text-center">
                        Cantidad
                        </th>
                        <th class="text-left">
                        Precio
                        </th>
                        <th class="text-left">
                        Subtotal
                        </th>
                        <th class="text-left">
                            <span class="d-sr-only">Eliminar</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ShoppingCartItem v-for="detail in details" :key="detail.product.id" :detail="detail" />
                </tbody>
            </v-table>            
            <p v-else class="text-center">
                Aún no has agregado productos a tu carrito de compras.<br>
                Haz <RouterLink to="/">click aquí</RouterLink> para ver los productos disponibles.
            </p>

        </v-card-text>
    </v-card>
    
</template>