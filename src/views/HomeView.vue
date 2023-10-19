<template>
    <div class=" p-12">
        <div class=" relative">
            <img class="" src="../static/topPhoto.jpg" alt="">
            <p class=" absolute left-10 bottom-10 text-white font-bold tracking-widest text-2xl">Welcome to the world of fashion</p>
        </div>
        <div>
            <div class=" flex mt-12 text-xl"><p class=" uppercase">latest photos</p> <img src="../static/Arrow.svg" alt=""></div>
            <div>
                <div v-for="index in 6">
                    <div>
                        sagol
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