import { defineStore } from 'pinia';
import type { CartDetail, Product } from '@/model/Types'
import { useLocalStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', {
    state: () => ({
        details: useLocalStorage<CartDetail[]>('cartDetails', [])
    }),

    getters: {
        cartItemsCount: ( state ) => {
            return state.details.length
        },

        totalAmount: (state) =>{
            let total = 0
            
            state.details.forEach( d => {
                total += d.product.price * d.quantity    
            })
            return total
        },
        
        whatsAppMessage(state) {
            let message = 'Hola, quiero realizar este pedido\n\n'

            state.details.forEach( d => {
                message += `Producto: ${d.product.name}\n`
                message += `Cantidad: ${d.quantity}\n`
                message += `SubTotal: ${d.quantity * d.product.price}€\n`
                message += '------------------------------\n\n'
            })

            message += `Total a pagar: ${this.totalAmount}\n\n`
            message += `Muchas gracias 😁`

            return encodeURI(message)
        },
        whatsAppLink(){
            return 'https://wa.me/34647354838?text=' + this.whatsAppMessage
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