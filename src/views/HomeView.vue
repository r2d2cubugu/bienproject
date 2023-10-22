<template>
    <div class=" px-2 lg:px-12 mb-4">
        <div class=" relative mt-12">
            <img class=" self-center object-cover w-[100%] h-max" src="../static/topPhoto.jpg" alt="">
            <p class=" absolute left-4 bottom-4 lg:left-10 lg:bottom-10 text-white font-bold tracking-widest text-sm lg:text-2xl">Welcome to the world of fashion</p>
        </div>
        
        <div>
            <div class=" flex mt-12 mb-7 text-xl"><p class=" uppercase font-bold lg:font-normal">latest posts</p> <div class=" hidden lg:flex"><img src="../static/Arrow.svg" alt=""></div> <div class=" lg:hidden text-center self-center"><img class=" self-center"  src="../static/shortArrow.svg" alt=""></div></div>
            <div class=" flex flex-col lg:grid lg:grid-cols-3 md:gap-7 gap-10 align-mid">
                <div v-for="index in 6">
                    <div class="">
                        <img class=" w-[100%]" src="../static/latestPhoto.png" alt="">
                        <div class=" flex justify-between mt-2">
                            <div class=" flex gap-2"><img class=" w-8 rounded-full" src="../static/userProfil.svg" alt=""> <p class=" self-center">{{ UserPostsStore.latestPosts.name }}</p></div> <div class=" flex gap-2 self-center">{{ UserPostsStore.latestPosts.like }} <img src="../static/likeIcon.svg" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class=" flex mt-12 mb-7 text-xl"><p class=" uppercase font-bold lg:font-normal">most liked</p> <div class=" hidden lg:flex"><img src="../static/Arrow.svg" alt=""></div> <div class=" lg:hidden text-center self-center"><img class=" self-center"  src="../static/shortArrow.svg" alt=""></div></div>
            <div class=" flex flex-col lg:grid lg:grid-cols-3 md:gap-7 gap-10 align-mid">
                <div v-for="index in 6">
                    <div class="">
                        <img class=" w-[100%]" src="../static/mostLiked.png" alt="">
                        <div class=" flex justify-between mt-2">
                            <div class=" flex gap-2"><img class=" w-8 rounded-full" src="../static/userProfil.svg" alt=""> <p class=" self-center">{{ UserPostsStore.latestPosts.name }}</p></div> <div class=" flex gap-2 self-center">{{ UserPostsStore.latestPosts.like }} <img src="../static/likeIcon.svg" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    


    </div>
</template>
<script setup>
import { useCheckStore } from "../stores/CheckStore"
import {useUserPostsStore} from "../stores/UserPostsStore"
let CheckStore = useCheckStore()
let UserPostsStore = useUserPostsStore()

CheckStore.ShowComponent()
</script>

<style>
.alignmid{
    align-items: center;
}
</style>