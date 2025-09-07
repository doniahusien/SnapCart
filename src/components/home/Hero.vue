<template>
   <Swiper
    :modules="[Autoplay, Pagination]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 2000 }"
    pagination
    class="h-[70vh] overflow-hidden"
  >
    <SwiperSlide v-for="(item,i) in images">
    <div class=" flex justify-center bg-cover h-[70vh] bg-center items-center" :style="{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${item.image})`
        }">
    
    </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

const images = [{ image: banner1 }, { image: banner2 }];
</script>
