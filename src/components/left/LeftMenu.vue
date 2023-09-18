
<script lang="ts">

import OrderOptions from '@/components/left/Orderoptions.vue'
import CategoryOptions from '@/components/left/CategoryOptions.vue'


export default {
    
    components: { OrderOptions, CategoryOptions },
   
}
</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <CategoryOptions />

            <v-divider class="my-2"></v-divider>

            <OrderOptions />
        </v-list>
    </v-sheet>
</template>