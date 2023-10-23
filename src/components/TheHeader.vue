<template>
    <div class=" lg:p-5 border-b-2 border-black">
        <div class=" flex justify-between w-[100%]">
            <img src="../static/BIEN.svg" alt="">
            <div class=" flex flex-col justify-between gap-5 lg:gap-0 lg:justify-center my-2">
                <input type="text" class=" border-2 rounded-3xl pr-48 pl-1 hidden lg:flex placeholder:text-black border-black" placeholder="Search">
                <button class=" bg-black rounded-[5px] my-2 flex w-max self-center lg:hidden  text-sm text-white" v-if="LoginStore.isConnected">Share Your Work</button>
            </div>
            <div class=" flex gap-2">
                    <button @click="$router.push('/login')" v-if="!LoginStore.isConnected" class=" self-center h-min py-[1.73px] lg:py-1 px-3  border-2 border-black rounded-md lg:rounded-2xl">Login</button>
                <button v-if="!LoginStore.isConnected" class=" mr-8 self-center h-min w-max py-[1.73px] lg:py-1 px-4  border-2 border-black rounded-md lg:rounded-2xl flex bg-black text-white">Sign up</button>
                <div v-if="LoginStore.isConnected" class=" flex gap-4">
                    <button class=" bg-black rounded-3xl lg:flex  lg:px-2.5 lg:py-2 lg:align-center lg:items-center hidden text-sm text-white" v-if="LoginStore.isConnected">Share Your Work</button>
                
                    <button class=" self-center" v-if="LoginStore.isConnected"><img class=" self-center w-8 h-8 rounded-full hidden lg:flex" src="../static/profil.png" alt=""></button>
                    <button v-if="LoginStore.isConnected" class=" lg:hidden"> <img class=" self-center" src="../static/magecglassicon.svg" alt=""></button>
                
                    <button class=" self-center hidden lg:flex" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/icon_bell_.svg" alt=""></button>
                <button class=" self-center hidden lg:flex" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/icon_mail_.svg" alt=""></button>
                <button class=" self-center lg:hidden" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/mailIconMobile.svg" alt=""></button>
                <button class=" self-center lg:hidden" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/bellIconMobile.svg" alt=""></button>
                </div>
                <div v-if="!LoginStore.isConnected" class=" justify-center items-center h-10 flex">
                    <select name="Lang" id="lang">
                <option value="Lang">Az</option>
                <option value="Lang">En</option>
                </select>
                </div>
                <div v-if="LoginStore.isConnected" class=" justify-center items-center h-10 hidden lg:flex">
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