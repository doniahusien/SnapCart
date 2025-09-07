<script setup>
import { onMounted } from 'vue';
import ProductCard from '../components/ProductCard.vue'
import { useProductsStore } from "../stores/products";
const productsStore = useProductsStore();
onMounted(async ()=> {
    await productsStore.fetchProducts();
})
</script>

<template>
  
  <div class="flex flex-row flex-wrap justify-center gap-10 p-10">
  <ProductCard v-for="item in productsStore.products" :key="item" :product="item"/>
  </div>
 
</template>

<style scoped>


</style>
