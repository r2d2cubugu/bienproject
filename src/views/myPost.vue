<template>
    
    <div class=" inset-0 flex h-screen absolute top-[0%] z-50">
         
        <div class=" bg-[#000000B2] opacity-60 w-[100%] h-screen fixed  top-0 inset-0" @click="$router.push('/myprofile')">
</div>
<div class="  fixed top-9">
    <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper top-9 w-[8%]"
  >

        <swiper-slide v-for="(post,index) in userPostsStore.userPosts" class=" w-min" :key="index"
      ><img class=" h-20 w-80"
        :src=post.photoLink /></swiper-slide
    >
  </swiper>
</div>
    </div>
   
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';

  import '../style.css';

  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
</script>
<script setup>
import { useUserPostsStore } from '../stores/UserPostsStore';
const userPostsStore = useUserPostsStore()

</script>