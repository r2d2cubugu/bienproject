<style>
html, body{
    width: 100%;
}
</style>

<template>
    <div class=" h-min">
        <TheHeader class=" w-[100%]" v-if="showHeader"/>
        <RouterView class=" w-[100%]"></RouterView>
        <TheFooter class=" relative bottom-0" v-if="showHeader"/>
    </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { useCheckStore } from './stores/CheckStore';
import { useLoginStore } from './stores/LoginStore';
import {useRoute} from "vue-router"
import { computed } from 'vue';
let route = useRoute()
let LoginStore = useLoginStore()
let showHeader = computed(()=>{
    return route.meta.showHeader != false
})

console.log(LoginStore.email, LoginStore.password);
let CheckStore = useCheckStore()

</script>