<template>
    <div v-if=" loginStore.isConnected" class=" py-20 px-8">
        <div>
            <div class=" relative w-80">
                <div class=" relative">
                <img class=" w-84 h-80 lg:w-64 lg:h-64" src="../static/profil.png" alt="">
                <img src="../static/PngItem_1584538.png" class=" absolute left-0 top-0 w-80 h-80 lg:hidden opacity-80" alt="">
            </div>
                <div class=" absolute lg:relative w-80 flex flex-row lg:gap-2 lg:mt-5 lg:flex-col">
                    <div class=" w-64 h-8 py-2 rounded-2xl border border-black justify-center items-center gap-40 inline-flex">
    <p class="w-[67px] text-black text-sm font-normal ">Followers </p>  <p class="text-black text-sm font-normal ">26</p> </div>
                    <div class=" w-64 h-8 py-2 rounded-2xl border border-black justify-center items-center gap-40 inline-flex">
    <p class="w-[67px] text-black text-sm font-normal ">Following </p>  <p class="text-black text-sm font-normal ">421</p> </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div v-if=" !loginStore.isConnected">
        Sagol
    </div>
</template>

<script setup>
import { useLoginStore } from '../stores/LoginStore';
let loginStore = useLoginStore()

loginStore.isConnected = true
</script>