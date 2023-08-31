import { defineStore } from 'pinia';
import type { CartDetail, Product } from '@/model/Types'

export const useCartStore = defineStore('cart', {
    state: () => ({
        details: <Array<CartDetail>>[]
    }),
    getters: {
        cartItemsCount: ( state ) => {
            return state.details.length
        }
    },
    actions: {
        addProduct(product: Product){
            const detailFound = this.details.find( d => d.product.id === product.id)

            if (detailFound) {
                detailFound.quantity += 1
            } else {
                this.details.push({
                    product,
                    quantity: 1
                })
            }
        },
        
        deleteProduct(productId: number){
            const index = this.details.findIndex( d => d.product.id === productId)
            this.details.splice(index,1)
        },
        
        increment(productId: number){
            const detailFound = this.details.find( d => d.product.id === productId)
            if (detailFound) {                
                detailFound.quantity++                
            }
        },
        
        decrement(productId: number){
            const detailFound = this.details.find( d => d.product.id === productId)
            
            if (detailFound) {
                if( detailFound.quantity == 1){
                    this.deleteProduct(productId)
                } else {
                    detailFound.quantity--
                }
            }
        },
        
    }
})