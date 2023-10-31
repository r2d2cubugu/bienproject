<template>
    <div class=" py-24 px-36">
        <div class=" border-2 border-black flex">
        <div class=" flex flex-col border-r-2  ">
            <div class=" border-b pl-2 border-black w-full flex gap-3 pr-48 py-5">
                <img class=" w-12 h-8" src="../static/icon_mail_.svg" alt="">
                <p class=" self-center font-bold text-2xl">Messages</p>
            </div>
            <div class=" flex-col">
                <div v-for=" contact in messageUserStore.messages" :key="contact.name">
                    
                        <button class=" border-b-2 pl-2 flex text-sm py-3.5 w-full">
                            <!-- <pre>{{ contact }}</pre> -->
                            <img class=" w-12 h-12" :src=contact.profil alt="">
                            <div class=" ml-5">
                                <p class=" font-bold">{{ contact.name }}</p>
                                <p class=" ">{{ contact.lastMessage.message }}</p>
                            </div>
                            <!-- <p>
                               {{ contact.lastMessage.time }}
                            </p> -->
                        </button>
                    
                </div>
            </div>
        </div>
        <div>
            <RouterView></RouterView>
        </div>
    </div>
    </div>
</template>


<script setup>
import {ref} from "vue"
import { useMessageUserStore } from '../stores/messageUserStore';
let messageUserStore = useMessageUserStore()

const date = ref(new Date())
const year = ref(date.value.getUTCFullYear)
console.log(new Date());
</script>