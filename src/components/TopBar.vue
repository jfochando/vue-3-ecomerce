<script lang="ts">
    import { useCartStore } from '@/stores/cart';

    export default {
        computed: {
            itemsCount() {
                const cartStore = useCartStore()
                return cartStore.cartItemsCount
            }
        }
    }
</script>

<template>
    <v-app-bar flat>
        <v-container class="mx-auto d-flex align-center justify-center">
            <v-avatar
                class="me-4"               
                size="32"
            >
            <v-img src="/lion-fire-logo.jpg"></v-img>
        </v-avatar>

            <RouterLink to="/" custom v-slot="{navigate}">
                <v-btn class="mr-6" prepend-icon="mdi-home" :active="$route.name === 'home'" variant="text" @click="navigate">Home</v-btn>
            </RouterLink>
            
            <RouterLink to="/cart">
                <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
                    <v-btn prepend-icon="mdi-cart" :active="$route.name === 'cart'" variant="text">Cart</v-btn>
                </v-badge>            
            </RouterLink>
            
            <RouterLink to="/about">
                <v-btn class="ml-6" prepend-icon="mdi-information" :active="$route.name === 'about'" variant="text">About</v-btn>
            </RouterLink>
        
            <v-spacer></v-spacer>

            <v-responsive max-width="160">
                <v-text-field
                    density="compact"
                    flat
                    hide-details
                    label="Search"
                    rounded="lg"
                    single-line
                    variant="solo-filled"
                ></v-text-field>
            </v-responsive>
        </v-container>
    </v-app-bar>
</template>