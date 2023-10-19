<template>
    <div>
        <TheHeader v-if="CheckStore.haveComponent"/>
        <RouterView></RouterView>
        <TheFooter v-if="CheckStore.haveComponent"/>
    </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { useCheckStore } from './stores/CheckStore';
let CheckStore = useCheckStore()

</script>