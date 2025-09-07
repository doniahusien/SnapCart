<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 class="text-white text-2xl font-bold mb-4">SnapCart</h2>
        <p class="text-gray-400">
          Your one-stop shop for all the trending products. Quality guaranteed, delivered
          fast.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-white text-lg font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/" class="hover:text-emerald-400 transition-colors"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/products" class="hover:text-emerald-400 transition-colors"
              >Products</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-emerald-400 transition-colors"
              >About</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Categories -->
      <div>
        <h3 class="text-white text-lg font-semibold mb-4">Categories</h3>
        <ul class="space-y-2">
          <li>
            <RouterLink
              to="/category/electronics"
              class="hover:text-emerald-400 transition-colors"
              >Electronics</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/category/jewelery"
              class="hover:text-emerald-400 transition-colors"
              >Jewelery</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/category/men's clothing"
              class="hover:text-emerald-400 transition-colors"
              >Men's Clothing</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/category/women's clothing"
              class="hover:text-emerald-400 transition-colors"
              >Women's Clothing</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h3 class="text-white text-lg font-semibold mb-4">Follow Us</h3>
        <div class="flex gap-4 text-gray-300">
          <a href="#" class="hover:text-emerald-400 transition-colors">
            <GlobeAltIcon class="w-6 h-6" />
          </a>
          <a href="#" class="hover:text-emerald-400 transition-colors">
            <LinkIcon class="w-6 h-6" />
          </a>
          <a href="#" class="hover:text-emerald-400 transition-colors">
            <UserIcon class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <div class="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
      © 2025 SnapCart. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { GlobeAltIcon, LinkIcon, UserIcon } from "@heroicons/vue/24/outline";
</script>
