<template>
    <div>
        Salam <br>
        <component :is=isComponent>
            
        </component>
        <button @click="isComponent=TestBir">Test bir</button>
        <button @click="isComponent=TestIki">Test iki</button>
    </div>
</template>

<script setup>
import {ref} from "vue"
let isComponent = ref(TestBir)
import TestBir from '../components/Test/TestBir.vue';
import TestIki from '../components/Test/TestIki.vue';

</script>