<template>
  <div>
    
    <component :is=isComponent>
    <!-- <LoginEmail /> -->
  </component>
  <button @click="$router.push('/')"><img class=" fixed top-4 left-2 hidden lg:flex" src="../static/BIENwhite.svg" alt=""><img class=" fixed top-8 left-2 lg:hidden" src="../static/BIEN.svg" alt=""></button>
  </div>
</template>

<script setup>
import {ref,computed} from "vue"
import LoginEmail from '../components/LoginEmail.vue';
import LoginPassword from "../components/LoginPassword.vue";
import { useLoginStore } from "../stores/LoginStore";

let isComponent=computed(()=>{
   if(LoginStore.isComponent=="LoginPassword"){
    return LoginPassword
   }else{
    return LoginEmail

   }
})
let LoginStore = useLoginStore()
LoginStore.toComponent("LoginEmail")

</script>