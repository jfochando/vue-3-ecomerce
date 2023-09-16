import { defineStore } from "pinia"
import type { Product } from '@/model/Types'

export const useProductsStore = defineStore('products', {
    state: () => ({
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
            if ( !state.categoryId ) {
                return state._products
            }

            return state._products.filter( p => p.categoryId === state.categoryId)
        }
    },

    actions: {
        selectCategory( categoryId: number ){
            this.categoryId = categoryId
        }
    }
})