<template>
  <div
    class=" p-4 pb-10 rounded-lg shadow-md w-64 flex flex-col justify-between gap-2 items-center"
  >
    <div class="w-full flex items-center justify-center">
      <img :src="product.image" alt="" class="h-40 object-contain mb-2 transition-transform duration-300 hover:scale-105" />
    </div>
    <h3 class="font-bold text-center">{{ product.title }}</h3>
    <p class="text-gray-600">${{ product.price }}</p>
    <p class="text-yellow-500 flex flex-row justify-center items-center gap-2"><span class="w-6"><StarIcon/></span> {{ product.rating.rate }}</p>
    <button
      class="bg-emerald-500 cursor-pointer mt-2 text-white font-semibold py-1 px-4 rounded hover:bg-emerald-600 transition-colors duration-300"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';
defineProps({
  product: Object,
});
</script>
