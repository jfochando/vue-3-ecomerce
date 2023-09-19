<script lang="ts">
  
  import { useProductsStore } from '../stores/products'
  import { useCategoriesStore } from '../stores/category';

  import ProductList from '@/components/ProductList.vue'
  import LeftMenu from '@/components/left/LeftMenu.vue'

  function updateCategoryFromRouteParams( categoryIdParam: string|string[]){
    const productsStore = useProductsStore()
    const categoryId = Number( categoryIdParam)
    productsStore.selectCategory(categoryId)
  }

  export default {
    components: {
      ProductList,
      LeftMenu
    },
    
    beforeRouteEnter( to ) {
      updateCategoryFromRouteParams( to.params.categoryId)        
    },

    beforeRouteUpdate( to ) {
      updateCategoryFromRouteParams( to.params.categoryId)        
    },

    mounted() {

      setTimeout( () => {
        const productsStore = useProductsStore()
        productsStore.fetchProducts()
      }, 4000);

      setTimeout( () => {
        const categoriesStore = useCategoriesStore()
        categoriesStore.fetchCategories()
      }, 2000);       
      
    }
  }
</script>

<template>
  <v-row>
    <v-col cols="2">
      <LeftMenu />
    </v-col>

    <v-col cols="10">
      <ProductList />
    </v-col>
  </v-row>
</template>
