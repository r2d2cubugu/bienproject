<template>
    <div class="inset-0 flex h-screen absolute top-[0%] z-50"
    >
    <button class=" bg-[#000000B2] h-screen w-full fixed top-0 cursor-none" @click="userPostsStore.isComponentPost = null">
      
    </button>
      <div class=" overflow-hidden h-screen flex items-center p-10 border border-white">
  
        <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="false"
      :modules="modules"
      class="mySwiper"
    >
      ><swiper-slide v-for="post in userPostsStore.userPosts" :key="post.photoLink"
        >
        <div class="absolute z-20 left-0 bottom-0 w-full bg-red-400">test here</div>
        
        <img
          :src=post.photoLink /></swiper-slide
      >
    </swiper>
    </div>
    </div>
     
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { useUserPostsStore } from '../stores/UserPostsStore';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/pagination';
  
    // import required modules
    import { EffectCoverflow, Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        let userPostsStore = useUserPostsStore()
        return {
          modules: [EffectCoverflow, Pagination],userPostsStore
        };
      },
    };
  </script>
  
  <style scoped>
  
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 500px;
    height: 500px;
    position: relative;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  </style>