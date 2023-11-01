<template>
    <div class=" overflow-y-scroll w-full">
        <div class=" flex flex-col">
            <div v-for=" con in contact.messages" :key="con.id">
             {{ con }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMessageUserStore } from '../../stores/messageUserStore';
import {ref} from "vue"
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const messageUserStore = useMessageUserStore()

const contact = messageUserStore.messages.find(el => el.id == route.params.id)
console.log(contact);
</script>