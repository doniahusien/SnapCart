<template>
  <div class="flex flex-col justify-center items-center gap-8 px-6 py-12 ">
    <h1 class="text-3xl font-extrabold text-gray-800 mb-8">Top Rated</h1>

    <div class="flex flex-col md:gap-40 w-full max-w-6xl">
      <div
        v-for="(item, index) in topProducts"
        :key="item.id"
        class="flex flex-col md:flex-row rounded-lg overflow-hidden"
        :class="index % 2 === 0 ? '' : 'md:flex-row-reverse'"
      >
     
        <div class="md:w-2/3 flex justify-center items-center p-4 bg-black">
          <img
            :src="item.image"
            alt=""
            class="object-contain max-h-72 w-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div class="md:w-1/2 flex flex-col justify-center p-6  text-black gap-4">
          <h2 class="text-xl font-semibold">{{ item.title }}</h2>
          <RouterLink
            :to="`/product/${item.id}`"
            class="hover:bg-emerald-600 hover:text-white hover:transition-colors inline-block border text-center w-42 border-gray-400 text-black font-medium px-4 py-2 rounded transition-colors"
          >
            SEE PRODUCT
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useProductsStore } from "../../stores/products";
import { RouterLink } from "vue-router";
const productsStore = useProductsStore();
const topProducts = ref([]);
onMounted(async () => {
  await productsStore.fetchProducts();
  topProducts.value = productsStore.getTopRating(4.6);
});
</script>
