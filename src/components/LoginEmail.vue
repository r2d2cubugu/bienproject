
import { RouterLink } from 'vue-router';
<template>
  <div class=" flex flex-col h-screen gap-12 ">
    <!-- <div class=" lg:bg-[url('./static/LoginBg.png')] lg:w-full lg:h-screen lg:px-20 lg:py-52 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-between"> -->
      <img class=" hidden lg:flex z-50 h-max absolute top-28 left-20 self-end" src="../static/bienLogin.svg" alt="">
    <div class=" lg:bg-[url('./static/LoginBg.png')] lg:w-full lg:h-screen relative top-0 lg:px-20  lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-end">
        <div class=" pt-40 pb-8 lg:py-10 px-5 lg:px-24 lg:relative lg:top-0 bg-white rounded-md h-max w-[100%] lg:w-max border self-center ">
            <div class=" mb-8 lg:mb-10">
                            <h4 class=" text-2xl lg:text-[32px] font-bold mb-2">Sign in</h4>
            <p class=" font-bold lg:text-xl">New user? <RouterLink class=" text-[#1473E6] font-normal lg:text-xl" to="/register">Create an account</RouterLink></p>
            </div>
            <div class=" flex flex-col gap-4">
                <input type="email" @keydown.enter="changeToPassword"  required class=" border-b-2 lg:border-2 p-1.5 pr-10 lg:rounded-lg lg:border-black" placeholder="Email address" v-model="mail" >
                <p v-if="msg" class=" text-red-700 font-bold text-sm">{{ msg }}</p>
                <p v-if="LoginStore.isChanged" class=" text-blue-700 font-bold text-sm">Hesabinizin parolu ugurla deyisdirildi</p>
                <button @keydown.enter="changeToPassword" @click=changeToPassword() class=" bg-[#1877F2] self-end  text-white py-1.5 px-3.5 rounded-full lg:rounded-lg">Contuine</button>
            </div>
            <div
            class=" flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-1 text-center text-[#00000080] text-opacity-50 ">
              Or
            </p>
          </div>
          <div class=" flex gap-2 flex-col">
            <button class=" lg:bg-[#1877F2] text-sm flex border-2 px-10 lg:border-0 rounded-xl justify-center lg:justify-start lg:pl-3 self-center lg:text-white font-bold p-2 lg:text-base gap-2 w-[100%]"> <img class=" w-5 h-5 self-center" src="../static/Facebook_f_logo_(2019).svg" alt=""> <p class="">Contuine with Facebook</p></button>
            <button class=" text-sm flex border-2 px-10 rounded-xl justify-center lg:justify-start lg:pl-3 self-center font-bold p-2 lg:text-[#0000008A] lg:text-base gap-2 w-[100%]"> 
              <svg enable-background="new 0 0 48 48" height="48" class=" w-5 h-5 self-center" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#ffc107"/><path d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z" fill="#ff3d00"/><path d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z" fill="#4caf50"/><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z" fill="#1976d2"/></svg>
              <p class="">Contuine with Google</p></button>
            <button class=" lg:bg-black text-sm flex border-2 px-10 lg:border-0 rounded-xl justify-center lg:justify-start lg:pl-3 self-center lg:text-white font-bold p-2 lg:text-base gap-2 w-[100%]"> <img class=" w-5 h-5 self-center hidden lg:flex" src="../static/whiteAppleicon.png" alt="">
              <img class=" w-5 h-5 self-center lg:hidden" src="../static/blackAppleicon.svg" alt="">
              <p class="">Contuine with Apple</p></button>
          </div>
          <button class=" hidden mt-4 lg:flex text-[#1473E6]">Get help sign in</button>
          <div class=" lg:hidden p-0 gap-0 mt-2">
          <button class="text-[#1473E6] text-[14px] lg:text-[9px] block mb-0">Reset your password</button>

          </div>
        </div>
    </div>
    <button class=" lg:hidden relative justify-self-center bottom-8 text-xs font-normal content-center"> Get help sign in </button>

  </div>
    

</template>


<script setup>
import { ref } from 'vue';
import { useLoginStore } from '../stores/LoginStore';
let LoginStore = useLoginStore()
let mail = ref()
let msg = ref()
let checkMail = ref()
function changeToPassword(){
  if(mail.value == null){
    msg.value = "Zehmet olmasa kecerli bir gmail yazin"
    setTimeout(() => {
      msg.value = null
    }, 2000);
  }else{
    // if(LoginStore.users.find(el => el.email == mail)){

      console.log("LoginStore.email",LoginStore.users[0].email)
    checkMail.value = LoginStore.users.find(el => el.email == mail.value);
    // console.log(LoginStore.users.find(el => el.email == mail));
    // console.log(isMail.value);
    if(checkMail.value == undefined){
      msg.value = "Bele bir mail yoxdu"
      console.log();
      setTimeout(() => {
      msg.value = null
    }, 2000);
    }else{
      LoginStore.connectedMail = mail.value
    LoginStore.toComponent("LoginPassword")}
    mail.value = null

    }
  }

</script>