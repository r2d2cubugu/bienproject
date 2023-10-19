<template>
    <div>
        <TheHeader v-if="showHeader"/>
        <RouterView></RouterView>
        <TheFooter v-if="CheckStore.haveComponent"/>
    </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { useCheckStore } from './stores/CheckStore';
import {useRoute} from "vue-router"
import { computed } from 'vue';
let route = useRoute()
let showHeader = computed(()=>{
    return route.meta.showHeader != false
})

let CheckStore = useCheckStore()

</script>