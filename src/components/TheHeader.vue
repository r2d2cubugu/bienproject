<template>
    <div class=" lg:p-5 border-b-2 border-black">
        <div class=" flex justify-between w-[100%]">
            <img src="../static/BIEN.svg" alt="">
            <div class=" flex flex-col justify-between gap-5 lg:gap-0 lg:justify-center">
                <input type="text" class=" border-2 rounded-3xl pr-48 pl-1 hidden lg:flex placeholder:text-black border-black" placeholder="Search"></div>
            <div class=" flex gap-2">
                    <button @click="$router.push('/login')" v-if="!LoginStore.isConnected" class=" self-center h-min py-[1.73px] lg:py-1 px-3  border-2 border-black rounded-md lg:rounded-2xl">Login</button>
                <button v-if="!LoginStore.isConnected" class=" mr-8 self-center h-min w-max py-[1.73px] lg:py-1 px-3  border-2 border-black rounded-md lg:rounded-2xl flex bg-black text-white">Sign up</button>
                <button v-if="LoginStore.isConnected"><img src="../static/bellIcon.svg" alt=""></button>
                <button v-if="LoginStore.isConnected"></button>
                <div class=" justify-start items-center h-8 flex">
                    <select name="Lang" id="lang">
                <option value="Lang">Az</option>
                <option value="Lang">En</option>
                </select>
                </div>
                
            </div>
        </div>
    </div>
</template>


<script setup>
import { useLoginStore } from '../stores/LoginStore';
let LoginStore = useLoginStore()

</script>