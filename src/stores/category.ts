import { defineStore } from "pinia"
import { type Category } from "@/model/Types"
import categoriesData from '../data/categories.json'


export const useCategoriesStore = defineStore( 'categories', {
    state: () => ({
        categories: categoriesData as Category[]
    }),

    getters: {

    },
    actions: {

    }
})