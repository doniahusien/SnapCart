<template>
  <section class="my-10 py-20 flex flex-col justify-center items-center">
    <h2 class="text-2xl font-bold mb-6"> Trending Products</h2>
    <div class="flex flex-wrap gap-6 justify-center">
      <ProductCard
        v-for="product in trendingProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
<script setup>
import { useProductsStore } from '../../stores/products';
import ProductCard from '../ProductCard.vue';
import { onMounted, ref } from 'vue';
const trendingProducts = ref([]);
const productsStore = useProductsStore();
onMounted(async () => {
    await productsStore.fetchProducts();
    trendingProducts.value = [...productsStore.products]
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, 8);
})
</script>