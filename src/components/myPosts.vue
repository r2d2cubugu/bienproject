<template>
    <div class="inset-0 flex h-screen absolute top-[0%] z-50"
    >
    <button class=" bg-[#000000B2] h-screen w-full fixed top-0 cursor-none" @click="userPostsStore.isComponentPost = null">
      
    </button>
      <div class=" overflow-hidden h-20 flex items-center p-10 border border-white">
  
        <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :initialSlide="lastSlideIndex"
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
      ><swiper-slide class=" w-80 h-80 flex"  v-for="post in userPostsStore.userPosts" :key="post.photoLink" >
        <div class=" relative flex justify-center self-center items-center">
          <img class=" self-center justify-self-center max-h-[450px]" v-if="!post.isClicked"
          :src=post.photoLink />
          <img v-if="post.isClicked" class=" h-[500px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" alt="">
          <div v-if="post.isClicked" class=" z-[1000000] text-white absolute left-0 bg-black top-0 w-[100.07998988889999999%] h-full overflow-scroll">
            <button @click="post.isClicked = false" class=" absolute">X</button>
            <div class=" flex flex-col top-5 absolute left-0 gap-4 pb-8">
              <div v-for="comment in post.comments">
                <div class=" flex w-[60%] ml-2">
                  <!-- {{ comment.profil }} -->
                  <!-- <img class=" rounded-full" width="20" height="20" :src=comment.profil alt=""> -->
                  <div class=" flex justify-center items-start mr-3">

                    <div class=" w-10 h-10 rounded-full">
                    <img v-if="comment.descp" class=" w-10 h-10 rounded-full self-start" src="https://imgs.search.brave.com/GGTJI_H5dVD0LtQEKp0AOkDjxYfSYenyuRsKN-HiswI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/MzcyMDI0OS9waG90/by9wcm9maWxlLW9m/LWEtZmVtYWxlLWRv/Y3Rvci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9LXUydDgw/SlMxUUJlTUVNcFp0/MUE1X1o2a1NPWGlr/aFluUUR2c3dLZHZS/bz0" alt="">
                    </div>
                  </div>
      
                  <div class=" flex flex-col w-full ">

                    <p class=" w-full font-bold"> {{ comment.name }}</p>
                    <p class=" w-full"> {{ comment.descp }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class=" fixed bottom-0 bg-black self-center h-min w-full flex justify-between">
              <div class=" flex">
                <div class=" w-16 rounded-full">
                <img :src=userPostsStore.myProfile class=" w-max" alt="">
                </div>
                <textarea name="" placeholder="Type something..." v-model="comment" class=" resize-none h-12 w-64 text-black self-center" id="" cols="30" rows="8"></textarea>
              </div>
              <button @click="addComment(post.id)" class="bg-[#1473E6] text-white h-min py-1 px-1 rounded-full self-center">Send comment</button>
            </div>
          </div>
        </div>

        <div class=" flex flex-col">
          <div class=" flex justify-between">
          <div class=" flex z-[100] flex-wrap text-center align-middle self-center  text-white font-bold">
            <div v-for="tag in post.tags">
              {{ tag }}
            </div>
          </div>
          <div class=" flex">
            <button>
            <img class=" w-7" src="../static/postLike.svg" alt="">
            </button>
            <button v-if="!post.isClicked" @click="clicked(post.id);">
            <img class=" w-7" src="../static/postComment.svg" alt="">
            </button>
            <button>
            <img class=" w-7" src="../static/postSend.svg" alt="">
            </button>
          </div>
          
        </div>

        </div>
        </swiper-slide
        >
    </swiper>
    </div>


    </div>
     
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { useUserPostsStore } from '../stores/UserPostsStore';
    import {defineProps, ref} from 'vue'
  
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
      computed: {
    lastSlideIndex() {
      // Calculate the index of the last slide
      return this.selectedPost - 1;
    },
  },
  mounted(){
    // this.toggleComment()
  },

      setup() {
        let userPostsStore = useUserPostsStore()
        let selectedComs = ref([])
        let selectedPost = userPostsStore.selectedPost;
        let comment = ref()
        function clicked(id) {
          userPostsStore.closeComments(id)
          if(!userPostsStore.userPosts.find(el => el.id == id).isClicked){
            userPostsStore.userPosts.find(el => el.id == id).isClicked = true
          selectedComs.value = userPostsStore.userPosts.find(el => el.id == id).comments;
          // alert('s')
          }else{
            userPostsStore.userPosts.find(el => el.id == id).isClicked = false
          // alert('f')
          }
        }
        function addComment(id){
          if(comment.value != null || comment.value != ''){
            userPostsStore.userPosts.find(el => el.id == id).comments.push(
              {
                name: userPostsStore.myName,
                descp:comment.value,
                profil:userPostsStore.myProfile
              }
            )
            alert(comment.value);
            comment.value = ''
          }
        }
        // function toggleComment(){
        //   let swipe_slide=document.getElementsByClassName("swiper-slide ")[0]
        //   if(isClicked.value==false){
        //     swipe_slide.style.height="300px"
        //     console.log("iwe dusdu")

        //   }else{
        //     console.log("hele iwe dusmeyib")
        //   }
        // }
        return {
          modules: [EffectCoverflow, Pagination],userPostsStore,selectedPost, clicked, selectedComs, addComment, comment
        };
      },
    };
  </script>
  
  <style scoped>
  ::-webkit-scrollbar{
    width: 0px;    
  }
  .hidden{
    display: none;
  }
  ::-webkit-scrollbar-track{
    background-color: #d1e5ff;;    
  }
  .swiper {
    width: 100%;
    background-color: black;
    padding-top: 50px;
    padding-bottom: 50px;
    left: 0;
    position: fixed;
    top: 10%;
  }
  
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 500px;
    /* height: 300px; */
    position: relative;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  </style>