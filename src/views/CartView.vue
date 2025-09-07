<script setup>
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

</script>

<template>
  <div class="p-6 py-20 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">🛒 Your Cart</h1>

    <div v-if="cartStore.cartItems.length === 0" class="text-gray-500 text-center">
      Your cart is empty.
    </div>

    <div 
      v-for="item in cartStore.cartItems" 
      :key="item.productId"
      class="border p-4 rounded-lg flex items-center gap-4 mb-4 shadow-sm"
    >
      <img 
        :src="item.image" 
        alt="product image" 
        class="w-20 h-20 object-contain"
      />

      <div class="flex-1">
        <h3 class="font-semibold">{{ item.title }}</h3>
        <p class="text-gray-600">Price: ${{ item.price }}</p>
        <p class="text-gray-800 font-medium">
          Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}
        </p>
      </div>

      <div class="flex items-center gap-2">
        <button 
          @click="cartStore.decrement(item.productId)"
          class="px-2 py-1 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span class="font-medium">{{ item.quantity }}</span>
        <button 
          @click="cartStore.increment(item.productId)"
          class="px-2 py-1 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>

    <div 
      v-if="cartStore.cartItems.length > 0"
      class="mt-6 text-right"
    >
      <h2 class="text-xl font-bold">
        Total: ${{ cartStore.totalPrice.toFixed(2) }}
      </h2>
    </div>
  </div>
</template>
