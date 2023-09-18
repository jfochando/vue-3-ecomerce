import { defineStore } from "pinia"
import { type Category } from "@/model/Types"

export const useCategoriesStore = defineStore( 'categories', {
    state: () => ({
        categories: [
            { id: 1, name: 'Oficina', description: 'Productos para la oficina'},
            { id: 2, name: 'Ordenadores', description: 'Accesorios para pc' }
        ] as Category[]
    }),

    getters: {

    },
    actions: {

    }
})