<template>

<component class=" z-20" :is=isComponent>


</component>
    
    <div v-if=" loginStore.isConnected" class=" lg:py-20 lg:px-8 px-2 flex flex-col relative">
        
        <div class=" ">
            
            <div class=" flex flex-col lg:flex-row">
            <div class=" relative">
                <div class=" relative">
                <img class=" w-84   h-80 lg:w-64 lg:h-64" src="../static/profil.png" alt="">
                <img src="../static/PngItem_1584538.png" class=" absolute left-0 top-0 w-80 h-80 lg:hidden opacity-80" alt="">
            </div>
                <div class=" absolute bottom-0 left-0 lg:relative flex flex-row lg:gap-2 lg:mt-5 lg:flex-col">
                    <div class=" hidden lg:inline-flex lg:w-64 w-28 lg:h-8 lg:py-2 rounded-2xl border border-black justify-center bg-none lg:bg-white items-center gap-40 ">
    <p class="w-[67px] text-black text-sm font-normal ">Followers </p>  <p class="text-black text-sm font-normal ">26</p> </div>
                    <div class=" lg:w-64 hidden lg:inline-flex w-28 lg:h-8 lg:py-2 rounded-2xl border border-black justify-center bg-none lg:bg-white items-center gap-40">
    <p class="w-[67px] text-black text-sm font-normal ">Followging </p>  <p class="text-black text-sm font-normal ">47</p> </div>

    <div class="w-[300px] h-[41.89px] relative justify-center items-center gap-[5px] flex pl-[5%] lg:hidden">
        <div class="h-10 px-3 py-2.5 rounded-3xl border border-white justify-center items-center gap-[30px] flex">
        <p class="text-white text-lg font-normal ">Followgin </p>
        <p class="text-white text-lg font-normal ">47</p>
    </div>
    <div class="h-10 px-3 py-2.5 rounded-3xl border border-white justify-center items-center gap-[30px] flex">
        <p class="text-white text-lg font-normal ">Followers </p>
        <p class="text-white text-lg font-normal ">26</p>
    </div>
</div>
                </div>
            </div>

            <div class=" lg:ml-20 flex flex-col gap-6 lg:gap-10 ">
                <div>
                    <h1 class=" text-2xl font-bold uppercase">Mirrahim mirvalishli</h1>
                    <p class=" text-xl mb-1">Model</p>
                    <div class=" flex gap-2"><img class=" h-6" src="../static/locIcon.svg" alt=""> <p class=" self-end">Baku, Azerbaijan</p></div>
                </div>
                <div>
                    <h1 class=" text-xl font-semibold">About</h1>
                    <p class=" lg:w-[60%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <h1 class=" text-xl font-semibold">Related tags</h1>
                    <p class=" text-xl">#Model #Graphicdesigner #Uxuıdesigner</p>
                </div>
            </div>
            <div class=" hidden lg:gap-2 absolute right-0 lg:flex">
                
                <button class=" cursor-pointer" @click=" alert('s')"><img src="../static/iconEdit.svg" alt=""></button>
            </div>
        </div>
        
        <div class=" grid grid-cols-1 lg:grid-cols-3 gap-2 w-full mt-11 lg:mt-40">
            <div  v-for=" photos in userPostsStore.userPosts">
                <button @click="userPostsStore.isComponentPost='myPost'" class=" w-full">
                    <img class=" w-[100%]" :src=photos.photoLink>
                    <!-- <p>{{ photos.comments }}</p> -->
                </button>
         </div>
        </div>
        </div>
    </div>
    <div v-if=" !loginStore.isConnected">
        <div class=" flex h-screen justify-center self-center items-center ">
            Profilinize baxmaq ucun zehmet olmasa hesabiniza giris eleye, hesabiniz yoxdusa qeydiyyatdan kecin.
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useLoginStore } from '../stores/LoginStore'
import { useUserPostsStore } from '../stores/UserPostsStore'
import myPost from '../components/myPosts.vue'
import {ref,computed,watch} from "vue"
let loginStore = useLoginStore()
console.log("loginstore goster",loginStore.isComponentPost)
let isComponent=computed(()=>{
   if(userPostsStore.isComponentPost=="myPost"){
    return myPost
   }else{
    return ''
   }})

let userPostsStore = useUserPostsStore()

loginStore.isConnected = true
</script>