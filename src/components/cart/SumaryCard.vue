<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';

export default {
    computed: {
        ...mapState(useCartStore,['totalAmount'])
    }
}

</script>
<template>
    <v-card class="mt-4">
        <v-card-title>Resumen de la compra</v-card-title>
        <v-card-subtitle>
            Total a pagar: {{ totalAmount }}
        </v-card-subtitle>
        <v-card-text class="text-right">           
            <v-btn 
                variant="tonal"
                rounded
                color="orange-lighten-2"
                size="small"
            >
                Realizar pedido
            </v-btn>
            
        </v-card-text>
    </v-card>
</template>