<template>
    <div class=" py-24 px-36">
        <div class=" border-2 border-black flex">
        <div class=" flex flex-col border-r-2  ">
            <div class=" border-b pl-2 border-black w-full flex gap-3 pr-48 py-5">
                <img class=" w-12 h-8" src="../static/icon_mail_.svg" alt="">
                <p class=" self-center font-bold text-2xl">Messages</p>
            </div>
            <div class=" flex-col min-h-[50vh]">
                <div v-for=" user in messageUserStore.chat" :key="user.id">
                    
                        <button @click="$router.push(`/mymessage/${user.id}`), select(user.id)" :class="user.isSelected ? 'text-blue-700' : ''" class=" border-b-2 pl-2 flex justify-start text-sm gap-2 py-3.5 w-full">
                            <!-- <pre>{{ contact }}</pre> -->
                            <img class=" w-12 h-12 rounded-full" :src=user.profil alt="">
                            <div class=" justify-start items-start">
                                <p class=" font-bold self-start justify-self-start">{{ user.name }}</p>
                                <p class="  justify-self-start self-start start">{{ user.messages[user.messages.length-1].content }}</p>
                            </div>
                            <!-- <p>
                               {{ contact.lastMessage.time }}
                            </p> -->
                        </button>
                        
                    
                </div>
            </div>
        </div>
        <div class=" w-full relative">
            <p class=" justify-self-center self-center align-middle text-center place-self-center absolute left-[48%] top-[48%] font-bold " v-if="!messageUserStore.isSelected"> No Message Selected </p>
            <RouterView class=" w-full h-full"></RouterView>
        </div>
    </div>
    </div>
</template>


<script setup>
import {ref} from "vue"
import { useLoginStore } from "../stores/LoginStore";
import { useMessageUserStore } from '../stores/messageUserStore';
let messageUserStore = useMessageUserStore()
const loginStore = useLoginStore()
loginStore.isConnected = true
messageUserStore.isSelected = false
for (let i = 0; i < messageUserStore.chat.length; i++) {
    messageUserStore.chat[i].isSelected = false
    
}


function select(id){
    let selected = messageUserStore.chat.find(el => el.id == id);
    let unSelected = messageUserStore.chat.filter(el => el.id != id);
    selected.isSelected = true;
    for (let i = 0; i < unSelected.length; i++) {
        unSelected[i].isSelected = false;
        
    }
    messageUserStore.isSelected = true
}


const date = ref(new Date())
const year = ref(date.value.getUTCFullYear)
// console.log(new Date());
</script>