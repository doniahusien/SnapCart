<template>
    <h1>Hi hello</h1>
    {{ cat }}
</template>
<script setup>
import { useProductsStore } from '../stores/products';
import { useRoute } from 'vue-router';
const cat = useRoute().params.cat;
</script>