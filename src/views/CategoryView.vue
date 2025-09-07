<template>
  <div class="flex flex-col gap-20 p-20">
    <div class="flex flex-col md:flex-row justify-center">
      <button
        v-for="item in categories"
        @click="changeCategory(item)"
        :class="[
          'rounded-sm p-3 shadow-md',
          activeTab === item.toLowerCase() ? 'bg-emerald-600 text-white' : '',
        ]"
      >
        {{ item.toUpperCase() }}
      </button>
    </div>
    <div class="flex justify-between flex-wrap">
      <ProductCard
        v-for="product in productsStore.productsByCategory"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useProductsStore } from "../stores/products";
import ProductCard from "../components/ProductCard.vue";
import { useRoute, useRouter } from "vue-router";
const productsStore = useProductsStore();
const router = useRouter();
const route = useRoute();
const cat = route.params.cat;
const activeTab = ref(cat);
const categories = ["Jewelery", "Electronics", "Men Clothing", "Women Clothing"];

const categoryMap = {
  jewelery: "jewelery",
  electronics: "electronics",
  "men clothing": "men's clothing",
  "women clothing": "women's clothing",
};
onMounted(async () => {
  await productsStore.fetchByCategory(cat.toLowerCase());
});

const changeCategory = (category) => {
  router.push({ name: "category", params: { cat: category.toLowerCase() } });
};
watch(
  () => route.params.cat,
  async (newCat) => {
    activeTab.value = newCat;
    const apiCat = categoryMap[newCat] || newCat;
    await productsStore.fetchByCategory(apiCat.toLowerCase());
  }
);
</script>
