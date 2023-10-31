<template>
    <div>
        <!-- <pre>{{ contact.value }}</pre> -->
        <!-- {{ contact.hisMessages[0].message }} -->
        {{ $route.params.id }}
        salam
    </div>
</template>

<script setup>
import { useMessageUserStore } from '../../stores/messageUserStore';
import {ref} from "vue"
import { useRoute } from 'vue-router';
const route = useRoute()
const messageUserStore = useMessageUserStore()

const contact = messageUserStore.messages.find(el => el.id == route.id)
console.log(contact);
</script>