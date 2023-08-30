<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '@/model/Types';
import { useCartStore } from '@/stores/cart';

export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true    
        }
    },
    
    methods: {
        onAddButtonClick(){            
            const cartStore = useCartStore()
            cartStore.addProduct( this.product.id )
        }
    },
}
</script>

<template>
    <v-card>
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
        />
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-text>
            <p class="mb-4">Esto es una descripción</p>        
            <v-chip>
                {{ product.price }} €
            </v-chip>
        </v-card-text>
        <v-card-actions>
            <v-btn
                @click="onAddButtonClick"
                variant="tonal"
                rounded
                color="orange-lighten-2"
                size="small"

            >Agregar al carrito</v-btn>
        </v-card-actions>        
    </v-card>    
</template>