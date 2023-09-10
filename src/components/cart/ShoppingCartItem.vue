<script lang="ts">
    import { useCartStore } from '@/stores/cart'
    import type { CartDetail } from '@/model/Types'
    import type { PropType } from 'vue'
    import { mapActions } from 'pinia'

    export default {
        props:{
            detail: {
                type: Object as PropType<CartDetail>,
                required: true
            }
        },
        methods: {
            // decrementQuantity(productId :number){            
            //     this.cartStore.decrement(productId)
            // },
            // incrementQuantity(productId :number){            
            //     this.cartStore.increment(productId)
            // },
            // deleteProduct(productId :number){
            //     this.cartStore.deleteProduct(productId)
            // },
            ...mapActions(useCartStore, {
                decrementQuantity: 'decrement',
                incrementQuantity: 'increment',
                deleteProduct: 'deleteProduct'
            })
        },
        computed: {
            productImageUrl(){
                return this.detail.product.image
                ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
            },
            subTotal(){
                return this.detail.quantity * this.detail.product.price
            }
        }
    }
</script>
<template>
    <tr>
        <td>
            <v-avatar class="mr-6" size="40" >
                <v-img :src="productImageUrl" />                
            </v-avatar>
            {{ detail.product.name }}
        </td>
        <td class="text-center">
            <v-btn
                class="mr-2"
                size="x-small"
                icon="mdi-minus"
                @click="decrementQuantity(detail.product.id)" 
            />
            {{ detail.quantity }}
            <v-btn
                class="ml-2"
                size="x-small"
                icon="mdi-plus"
                @click="incrementQuantity(detail.product.id)" 
            />            
        </td>
        <td>{{ detail.product.price }} €</td>
        <td>{{ subTotal }} €</td>
        <td>
            <v-btn
                size="small"
                icon="mdi-trash-can-outline"
                variant="plain"
                class="ml-3"
                @click="deleteProduct(detail.product.id)" 
            />
        </td>
    </tr>  
</template>