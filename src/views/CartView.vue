<script lang="ts">
    import ShoppingCart from '@/components/cart/ShoppingCart.vue'
    import SumaryCard from '@/components/cart/SumaryCard.vue'

    export default {
        components: {
            ShoppingCart,
            SumaryCard
        }
    }
</script>

<template>
    <v-row>
        <v-col cols="8">
            <ShoppingCart />
        </v-col>
        <v-col cols="4">
            <SumaryCard />
        </v-col>
    </v-row>
    
</template>