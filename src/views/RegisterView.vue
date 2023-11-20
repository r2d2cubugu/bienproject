<template>
  <div class=" flex flex-col h-screen gap-12 ">
    <!-- <div class=" lg:bg-[url('./static/LoginBg.png')] lg:w-full lg:h-screen lg:px-20 lg:py-52 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-between"> -->
      <img class=" hidden lg:flex h-max absolute top-32 left-20" src="../static/bienLogin.svg" alt="">
      <div class=" lg:bg-[url('./static/coxCiddiGorunenAdam.png')] lg:w-full lg:h-screen lg:px-20 lg:py-44 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-end">
          <div :class=" msg ? ' lg:px-14 lg:pb-6' : ' lg:px-16 lg:pb-4' " class=" pt-40 pb-8 lg:pt-20 lg:relative bottom-10  px-5 bg-white rounded-md h-max w-[100%] lg:w-max">
           <h4 class=" text-xl lg:text-[32px] self-start lg:self-center lg:text-center font-bold">Create an account</h4>
           <div class=" flex justify-center mt-8 lg:mt-12 gap-8">
            <button><img class=" w-12 h-12 rounded-full border-2 p-2 border-black" src="../static/google.svg" alt=""></button>
            <button><img class=" w-12 h-12 rounded-full border-2 p-2 self-center border-black" src="../static/blackAppleicon.svg" alt=""></button>
            <button><img class=" w-12 h-12 rounded-full border-2 self-center p-2 border-black" src="../static/blueRoundFace.png" alt=""></button>
           </div>
           <div
              class=" flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 mt-8 mb-4 after:flex-1 after:border-t after:border-neutral-300">
              <p
                class="mx-4 mb-1 text-center text-[#00000080] text-opacity-50 ">
                Or
              </p>
            </div>
            <div>
  
                <div>
                    <p class="text-neutral-700 text-xl font-semibold">Sign up with email</p>
                    <p class=" text-neutral-700 text-lg inline">Already have an account? </p> <button @click="$router.push('/login')" class=" font-semibold text-lg text-blue-600">Sign in</button>
                </div>
                <div class="  h-min">
              </div>
                <div class=" flex flex-col mt-6 lg:gap-4 lg:mt-7">
                <input for="email" v-on:keyup.enter="$event.target.nextElementSibling.focus()" type="email" v-model="mail" :class=" isFalseMail ? ' border-red-600' : 'lg:border-black'"   required class=" border-b-2 lg:border-2 p-1.5 pr-10 w-[96%] lg:rounded-lg " placeholder="Email address">
                <input @keyup.enter="registerNewUser" type="password" v-model="pass" :class=" isFalsePass ? ' border-red-600' : ''"  required class=" border-b-2 lg:border-2 p-1.5 pr-10 w-[96%] lg:rounded-lg lg:border-black" placeholder="Password">
                </div>
                <p v-if=" msg" :class=" isCorrect ? ' text-green-700 font-bold' : 'text-red-700 font-bold'" class=" p-0 m-0 ">{{ msg }}</p>
                <div v-if="!msg" class=" flex justify-end mt-2">
                    <button @keydown.enter="registerNewUser()" @click="registerNewUser()" class=" bg-[#1877F2] self-end  text-white py-1.5 px-3.5 rounded-full lg:rounded-lg">Contuine</button>
                </div>
            </div>
          </div>
      </div>
    <button class=" lg:hidden relative justify-self-center bottom-8 text-xs font-normal content-center"> Get help sign in </button>

  </div>
    

</template>


<script setup>
import { useLoginStore } from '../stores/LoginStore';
import {ref} from "vue"
import {useRoute} from "vue-router"
const loginStore = useLoginStore()
let route = useRoute()
let msg = ref()
let mail = ref()
let pass = ref()
let isCorrect = ref(false)
let isFalseMail = ref(false)
let isFalsePass = ref(false)
let newUser = ref({})

function registerNewUser(){
  if(mail.value == null || pass.value == null || mail.value == '' || pass.value == ''){
    msg.value = "Zehmet olmasa qirmizi xanalari doldurun."
    isCorrect.value = false
    setTimeout(() => {
      msg.value = null
    }, 3000);
    isCorrect.value = false
    if(mail.value == null || mail.value == ''){
      isFalseMail.value = true
      // console.log("Mail", isFalseMail.value);
    }
    if(pass.value == null || pass.value == ''){
      isFalsePass.value = true
      // console.log("Pass", isFalsePass.value);
    }
    if(mail.value != null && mail.value != ''){
      isFalseMail.value = false
      // console.log("Mail", isFalseMail.value);
    }
    if(pass.value != null && pass.value != ''){
      isFalsePass.value = true
      // console.log("Pass", isFalsePass.value);
    }

  }else{
    if(loginStore.users.find(el => el.email == mail.value)){
      isCorrect.value = false
      msg.value = "Bu adla biri coxdan qeydiyatdan kecib"
      setTimeout(() => {
        msg.value = null
      }, 3000);
    }else if( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value) ){
      isFalseMail.value = true
      msg.value = "Zehmet olmasa kecerli bir gmail girin"
      setTimeout(() => {
        msg.value = ""
      }, 3000);
    }else{
      isFalseMail.value = false
    isFalsePass.value = false
    newUser.value=
    {
  email: mail.value,
  password: pass.value,
  id: new Date()
    }

    loginStore.users.push(newUser.value)
    isCorrect.value = true
    msg.value = " Hesabiniz ugurla yarandi"
    setTimeout(() => {
      msg.value = null
    }, 3000);
    mail.value = null
    pass.value = null
    }
  }
  
// console.log(newUser.value);
}



</script>