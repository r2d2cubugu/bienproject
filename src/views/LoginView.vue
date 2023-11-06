<template>
  <div>
    
    <component :is=isComponent>
    <!-- <LoginEmail /> -->
  </component>
  </div>
</template>

<script setup>
import {ref,computed} from "vue"
import LoginEmail from '../components/LoginEmail.vue';
import LoginPassword from "../components/LoginPassword.vue";
import LoginResetPass from "../components/LoginResetPass.vue";
import { useLoginStore } from "../stores/LoginStore";

let isComponent=computed(()=>{
   if(LoginStore.isComponent=="LoginPassword"){
    return LoginPassword
   }else if(LoginStore.isComponent == "ResetPass"){
    return LoginResetPass
   }
   else{
    return LoginEmail

   }
})
let LoginStore = useLoginStore()
LoginStore.toComponent("LoginEmail")

</script>