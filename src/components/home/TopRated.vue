<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Top Rated</h1>
    <div class="flex flex-wrap gap-5 justify-center ">
      <ProductCard v-for="product in topProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useProductsStore } from "../../stores/products";
import ProductCard from "../ProductCard.vue";
const productsStore = useProductsStore();
const topProducts = ref([]);
onMounted(async () => {
  await productsStore.fetchProducts();
  topProducts.value = productsStore.getTopRating(4.5);
});
</script>
