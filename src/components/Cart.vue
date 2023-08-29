<!-- eslint-disable vue/multi-word-component-names -->

<script lang="ts">
import type { PropType } from 'vue';
import type { CartDetail } from '@/model/Types';

export default {
    props: {
        details: {
            type: Object as PropType<Array<CartDetail>>,
            required: true
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