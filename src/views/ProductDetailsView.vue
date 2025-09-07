<template>
  <div
    class="max-w-4xl mx-auto mt-10 mb-20 py-10 px-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-6"
  >
    <div
      class="flex-shrink-0 w-full md:w-1/3 flex justify-center transition-transform duration-500 ease-in-out hover:scale-110 items-center"
    >
      <img
        :src="productsStore.product?.image"
        :alt="productsStore.product?.title"
        class="object-contain h-64 w-64 rounded-lg"
      />
    </div>

    <div class="flex-1 flex flex-col gap-4">
      <h2 class="text-2xl font-bold">{{ productsStore.product?.title }}</h2>
      <p class="text-gray-600 italic capitalize">{{ productsStore.product?.category }}</p>
      <p class="text-xl font-semibold text-green-600">
        $ {{ productsStore.product?.price }}
      </p>
      <p class="text-gray-700">{{ productsStore.product?.description }}</p>

      <div class="flex items-center gap-2 mt-2">
        <span
          class="text-yellow-400 flex items-center gap-1 px-2 py-1 rounded font-semibold"
        >
          <StarIcon class="w-4 h-4" />
          {{ productsStore.product?.rating?.rate }}
        </span>
        <span class="text-gray-500"
          >({{ productsStore.product?.rating?.count }} reviews)</span
        >
      </div>

      <button
        @click="addToCart(productsStore.product.id)"
        class="mt-auto cursor-pointer bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProductsStore } from "../stores/products";
import { onMounted, ref } from "vue";
import { useCartStore } from "../stores/cart";

import { StarIcon } from "@heroicons/vue/24/solid";
const productsStore = useProductsStore();
const route = useRoute();
const id = ref(route.params.id);
const cartStore = useCartStore();

function addToCart(productId) {
  cartStore.addCart(productId);
}
onMounted(async () => {
  await productsStore.fetchProductById(id.value);
});
</script>
