import { defineStore } from "pinia"
import type { Product } from '@/model/Types'

export const useProductsStore = defineStore('products', {
    state: () => ({
        order: '' as string,
        categoryId: null as number|null,
        _products: [
            {id: 1, name: 'Silla', price: 56, image:'/products/silla.jpg', categoryId: 1},
            {id: 2, name: 'Monitor', price: 450, image:'/products/monitor.jpeg', categoryId: 1},
            {id: 3, name: 'Microfono', price: 120, categoryId: 2},
            {id: 4, name: 'Placa Base', price: 256, image:'/products/placa_base.jpeg', categoryId: 2},
            {id: 5, name: 'CPU', price: 650, image:'/products/cpu.jpg', categoryId: 2},
            {id: 6, name: 'Tarjeta Gráfica', price: 1200, image:'/products/rtx_4090.jpg', categoryId: 2}
        ] as Product[]
    }),

    getters: {        
        products( state ){
            let products = null

            // Filter
            if ( state.categoryId ) {
                products = state._products.filter( p => p.categoryId === state.categoryId)
                
            } else {
                products = state._products
            }

            // Ordena
            if (state.order === '') {
                return products    
            }

            if (state.order === 'price') {
                return products.sort( (a, b) => a.price - b.price )
            }

            if (state.order === 'name') {
                return products.sort( (a,b) => a.name.localeCompare(b.name) )
            }

            
        }
    },

    actions: {
        selectCategory( categoryId: number ){
            this.categoryId = categoryId
        },
        
        orderByPrice(){
            this.order = 'price'
        },

        orderByName(){
            this.order = 'name'
        }
    }
})