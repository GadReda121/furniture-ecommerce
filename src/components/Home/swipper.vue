<template>
    <swiper     
    :pagination="{
        clickable: true,
    }" 
    :modules="modules"
    class="mySwiper"  
    :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
    }"   
    :loop="true">
        <swiper-slide>
            <img src="../../../public/images/jum1.jpg" alt="Slide 1">
        </swiper-slide>
        <swiper-slide>
            <img src="../../../public/images/jum2.jpg" alt="Slide 2">
        </swiper-slide>
        <swiper-slide>
            <img src="../../../public/images/jum3.jpg" alt="Slide 3">
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default {
    name:"Swipper",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100vh;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}
</style>