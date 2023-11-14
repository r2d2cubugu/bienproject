<template>
    <div class=" flex-col h-full" >
        <div class=" border-b pl-2 border-black w-full flex justify-between pr-2 py-[11.5px]">
            <div class=" flex gap-3">
                <img class=" w-12" :src=contact.profil alt="">
                <p class=" self-center font-bold text-2xl"> {{ contact.name }}</p>
            </div>
            <div class=" flex gap-2">
                <button> <img src="./../../static/blockIcon.svg" alt=""> </button>
                <button> <img src="./../../static/trashIcon.svg" alt=""> </button>
               
            </div>
               
            </div>
            
        <div class=" overflow-y-scroll h-[60vh] flex flex-col items-start w-[100%] relative">
        <!-- <div class=" flex flex-col">
            <div v-for=" con in contact.messages" :key="con.id">
             {{ con }}
            </div>
        </div> -->
        <div class="flex flex-col w-full border border-blue-400">
          <!-- <div class=" px-[50%] py-2"><p>{{ contact.messages[0].time }}</p></div> -->
            <div v-for=" chat in contact.messages" class=" max-w-[66.6666666%] flex flex-shrink-0" :class="[chat.isYour ? 'self-end' : '']">
                <div class="flex self-end break-words border border-red-500 " :class="chat.isYour ? 'mb-[7%]' : 'mb-3'"  >
                <img class="mr-3 flex-shrink-0" v-if="!chat.isYour" :src=contact.profil alt=""> 
                <p class=" h-auto p-2 resize-none border break-all" :class="chat.isYour ? ' bg-green-900 text-white align-bottom  rounded-bl-3xl rounded-tl-3xl rounded-tr-xl' : ' bg-[#CECECE] rounded-br-3xl rounded-tr-3xl rounded-tl-xl'" >{{ chat.content }}</p>
                </div>
            </div>
        </div>

    </div>
    <div class=" sticky pl-16 pr-36 py-7 bottom-0 flex border-y-2 bg-white gap-2">
        <img class="" src="./../../static/paperclipIcon.svg" alt="">
    <textarea class=" pr-3 py-4 resize-none border border-black w-[610px]"  v-model="myMessage" placeholder="Type something..." type="text"> </textarea>
    <button @click="sendMessage(contact.id)" class=" bg-[#1473E6] text-white h-min py-1 px-2 rounded-full self-center" >Send</button>
</div>
    </div>

</template>

<script setup>
import { useMessageUserStore } from '../../stores/messageUserStore';
import {ref, watch} from "vue"
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const messageUserStore = useMessageUserStore()

messageUserStore.isSelected = true


const contact =ref(messageUserStore.chat.find(el => el.id == route.params.id))
watch(()=>route.params.id,(newValue)=>{

contact.value = messageUserStore.chat.find(el => el.id == route.params.id)
})
const myMessage = ref()
function sendMessage(id) {
    if(myMessage.value == null){

    }else{
    const message = ref({
        content:myMessage.value,
        isYour: true
    })
    contact.value.messages.push(message.value)
    myMessage.value = null}
}
console.log(contact);
</script>