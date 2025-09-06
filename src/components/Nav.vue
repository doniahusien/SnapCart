<template>
  <div class="flex justify-around gap-2 lg:gap-5 items-center p-6 shadow-md">
    <h1 class="text-2xl text-emerald-600 font-bold">SnapCart</h1>
    <ul class="hidden text-lg md:flex justify-center items-center md:gap-5">
      <li>
        <RouterLink class="hover:text-emerald-400" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:text-emerald-400" to="/products">Products</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:text-emerald-400" to="/about">About</RouterLink>
      </li>
    </ul>

    <div class="hidden md:flex justify-around gap-2 md:gap-5">
      <RouterLink
        v-if="auth.isAuthenticated"
        to="/cart"
        class="px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600"
      >
        Cart
      </RouterLink>
      <button
        v-if="auth.isAuthenticated"
        @click="auth.logout()"
        class="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
      >
        Logout
      </button>
      <RouterLink
        v-else
        to="/login"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </RouterLink>
    </div>
    <button @click="isOpen = !isOpen" class="flex md:hidden cursor-pointer">
      <Bars3Icon v-show="!isOpen" class="w-8 h-8" />
      <XMarkIcon v-show="isOpen" class="w-8 h-8" />
    </button>
  </div>

  <div v-if="isOpen" class="bg-white min-h-screen">
    <ul class=" w-full md:hidden text-lg flex flex-col justify-between items-start p-3 gap-5">
      <li>
        <RouterLink class="hover:text-emerald-400" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:text-emerald-400" to="/products">Products</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:text-emerald-400" to="/about">About</RouterLink>
      </li>
      <li v-if="auth.isAuthenticated" class="w-full" >
        <RouterLink
          to="/cart"
          class=" block px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600"
        >
          Cart
        </RouterLink>
      </li>
      <li v-if="auth.isAuthenticated" class="w-full">
        <button @click="auth.logout()" class=" w-full text-start block px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600">
          Logout
        </button>
      </li>
      <li v-else class="w-full">
        <RouterLink
          to="/login"
          class=" block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useAuthStore } from "../stores/authStore";
import { ref } from "vue";
const auth = useAuthStore();
const isOpen = ref(false);
</script>
