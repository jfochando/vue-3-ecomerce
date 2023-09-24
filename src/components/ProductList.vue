<script lang="ts">

import ProductCard from '@/components/ProductCard.vue';
import { mapState } from 'pinia';
import { useProductsStore } from '../stores/products';

export default {
    components:{
        ProductCard,
    },
    computed: {
        ...mapState( useProductsStore, ['products', 'loading'] )
    },  
}

</script>

<template>
    <div v-if="loading" class="d-flex justify-center align-center h-100">
        <v-progress-circular size="50" indeterminate />
    </div>

    <v-row v-else>
        <v-col v-for="p in products" :key="p.id" cols="4">
            <ProductCard :product="p" />
        </v-col>
    </v-row>        
</template>