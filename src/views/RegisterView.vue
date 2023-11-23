<template>
  <div class=" flex flex-col h-screen gap-12 ">
    <!-- <div class=" lg:bg-[url('./static/LoginBg.png')] lg:w-full lg:h-screen lg:px-20 lg:py-52 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-between"> -->
      <img class=" hidden lg:flex h-max absolute top-32 left-20" src="../static/bienLogin.svg" alt="">
      <div class=" lg:bg-[url('./static/coxCiddiGorunenAdam.png')] lg:w-full lg:h-screen lg:px-20 lg:py-44 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-end">
          <div :class=" msg ? ' lg:px-14 lg:pb-6' : ' lg:px-16 lg:pb-4' " class=" pt-40 pb-8 lg:pt-20 lg:relative bottom-10  px-5 bg-white rounded-md h-max w-[100%] lg:w-max">
           <h4 class=" text-xl lg:text-[32px] self-start lg:self-center lg:text-center font-bold">Create an account</h4>
           <div class=" flex justify-center mt-8 lg:mt-12 gap-8">
            <button><svg enable-background="new 0 0 48 48" class=" w-12 h-12 rounded-full border-2 p-2 border-black" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#ffc107"/><path d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z" fill="#ff3d00"/><path d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z" fill="#4caf50"/><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z" fill="#1976d2"/></svg></button>
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