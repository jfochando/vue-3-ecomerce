<script lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { mapState } from 'pinia';
import { useProductsStore } from '../stores/products';

export default {
    components:{
        ProductCard,
    },
    computed: {
        ...mapState( useProductsStore, ['products'] )
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