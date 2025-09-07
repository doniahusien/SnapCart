<template>
  <section class="py-20 px-6 text-center bg-black text-white">
    <h2 class="text-2xl font-bold mb-6">Featured Categories</h2>

    <div class="flex flex-wrap gap-6 justify-center items-center">
      <div
        v-for="(cat, i) in products.categories"
        :key="i"
        class="flex items-center justify-center w-40 h-24 bg-white rounded-xl shadow hover:shadow-lg transition"
      >
        <RouterLink
          :to="`/category/${cat}`"
          class="text-lg font-semibold text-gray-700 hover:text-emerald-500"
        >
          {{ cat }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductsStore } from "../../stores/products";

const products = useProductsStore();

onMounted(async() => {
  await products.fetchCategories();
});
</script>
