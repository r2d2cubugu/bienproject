
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
            <button class=" text-sm flex border-2 px-10 rounded-xl justify-center lg:justify-start lg:pl-3 self-center font-bold p-2 lg:text-[#0000008A] lg:text-base gap-2 w-[100%]"> <img class=" w-5 h-5 self-center" src="../static/Google.svg" alt=""> <p class="">Contuine with Google</p></button>
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