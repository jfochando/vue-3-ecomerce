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
            }
        }
    }
</script>
<template>
    <v-list-item>                    
        <v-list-item-title>
            <v-avatar class="mr-6" size="45" rounded="0">
                <v-img
                    v-if="productImageUrl"
                    alt="Avatar"
                    :src="productImageUrl"
                ></v-img>
            </v-avatar>
            {{ detail.product.name }} <span class="ml-6">Cantidad :</span>
            <v-btn
                class="ml-2"
                size="x-small"
                icon="mdi-minus"
                @click="decrementQuantity(detail.product.id)" 
            />
            {{ detail.quantity }}
            <v-btn
                size="x-small"
                icon="mdi-plus"
                @click="incrementQuantity(detail.product.id)" 
            />
            <v-btn
                size="small"
                icon="mdi-trash-can-outline"
                variant="plain"
                class="ml-3"
                @click="deleteProduct(detail.product.id)" 
            />
            
        </v-list-item-title>
    </v-list-item>            
</template>