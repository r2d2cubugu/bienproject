<template>
    <div class=" lg:p-5 border-b-2 border-black">
        <div class=" flex px-2 py-2 justify-between w-[100%]">
            <button v-if="!LoginStore.isConnected" class=" flex lg:hidden" @click="$router.push('/')">
            <img class="" src="../static/BIEN.svg" alt="">
            </button>
            <div v-if="LoginStore.isConnected" class=" lg:hidden flex justify-between w-full">
                <button v-if="LoginStore.isConnected" class=" flex lg:hidden" @click="$router.push('/')">
            <img class=" w-20" src="../static/BIEN.svg" alt="">
            </button>
            <button class=" bg-black rounded-[5px] my-2 flex w-max self-center lg:hidden  text-sm text-white" v-if="LoginStore.isConnected">Share Your Work</button>
            <div class=" flex items-center gap-2">
                <button v-if="LoginStore.isConnected" class=" lg:hidden"> <img class=" self-center" src="../static/magecglassicon.svg" alt=""></button>
                <button @click="$router.push('/mymessage')" class=" self-center lg:hidden" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/mailIconMobile.svg" alt=""></button>
                <button class=" self-center lg:hidden" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/bellIconMobile.svg" alt=""></button>
            </div>
            </div>
            <div v-if="!LoginStore.isConnected" class=" flex lg:hidden">
                    <button @click="$router.push('/login')" v-if="!LoginStore.isConnected" class=" self-center mr-1 h-min py-[1.73px] lg:py-1 px-3  border-2 border-black rounded-md lg:rounded-2xl">Login</button>
                <button @click="$router.push('/register')" v-if="!LoginStore.isConnected" class=" self-center h-min w-max py-[1.73px] lg:py-1 px-1  border-2 border-black rounded-md lg:rounded-2xl flex bg-black text-white">Sign up</button>
                    <select name="Lang" id="lang">
                <option value="Lang">Az</option>
                <option value="Lang">En</option>
                </select>
            </div>
            <button class=" hidden lg:flex" @click="$router.push('/')">
            <img class="" src="../static/BIEN.svg" alt="">
            </button>
            <div class=" hidden lg:flex lg:flex-col justify-between gap-5 lg:gap-0 lg:justify-center my-2">
                <input type="text" class=" border-2 rounded-3xl pr-48 pl-1 hidden lg:flex placeholder:text-black border-black" placeholder="Search">
                <button class=" bg-black rounded-[5px] my-2 flex w-max self-center lg:hidden  text-sm text-white" v-if="LoginStore.isConnected">Share Your Work</button>
            </div>
            <div class=" hidden lg:flex gap-2">
                    <button @click="$router.push('/login')" v-if="!LoginStore.isConnected" class=" self-center h-min py-[1.73px] lg:py-1 px-3  border-2 border-black rounded-md lg:rounded-2xl">Login</button>
                <button @click="$router.push('/register')" v-if="!LoginStore.isConnected" class=" mr-8 self-center h-min w-max py-[1.73px] lg:py-1 px-4  border-2 border-black rounded-md lg:rounded-2xl flex bg-black text-white">Sign up</button>
                <div v-if="LoginStore.isConnected" class=" flex gap-4">
                    <button class=" bg-black rounded-3xl lg:flex  lg:px-2.5 lg:py-2 lg:align-center lg:items-center hidden text-sm text-white" v-if="LoginStore.isConnected">Share Your Work</button>
                
                    <button @click="$router.push('/myprofile')" class=" self-center" v-if="LoginStore.isConnected"><img class=" self-center w-8 h-8 rounded-full hidden lg:flex" src="../static/profil.png" alt=""></button>
                    <button v-if="LoginStore.isConnected" class=" lg:hidden"> <img class=" self-center" src="../static/magecglassicon.svg" alt=""></button>
                
                    <button class=" self-center hidden lg:flex" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/icon_bell_.svg" alt=""></button>
                <button @click="$router.push('/mymessage')" class=" self-center hidden lg:flex" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/icon_mail_.svg" alt=""></button>
                <button @click="$router.push('/mymessage')" class=" self-center lg:hidden" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/mailIconMobile.svg" alt=""></button>
                <button class=" self-center lg:hidden" v-if="LoginStore.isConnected"><img class=" self-center" src="../static/bellIconMobile.svg" alt=""></button>
                </div>
                <div class=" justify-center items-center h-10 hidden lg:flex">
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