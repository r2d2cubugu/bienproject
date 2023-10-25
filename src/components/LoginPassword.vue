<template>
    <div class=" flex flex-col h-screen gap-12">
      <div class=" lg:bg-[url('./static/background2.png')] lg:w-full lg:h-[110vh] lg:px-20 lg:py-44 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-between">
          <img class=" hidden lg:flex h-max" src="../static/bienLogin.svg" alt="">
          <div class=" pt-40 pb-8 lg:py-20 px-5 lg:px-24 bg-white rounded-md h-max w-[100%] lg:w-max">
              <div class=" mb-8 lg:mb-10">
                              <h4 class=" text-2xl lg:text-[32px] font-bold mb-2 self-center hidden lg:flex">Enter your password</h4>
                              <h4 class=" text-2xl lg:text-[22px] self-center font-bold mb-2">{{ LoginStore.connectedMail }}</h4>
                              
              <!-- <p class=" font-bold lg:text-xl">New user? <RouterLink class=" text-[#1473E6] font-normal lg:text-xl" to="/register">Create an account</RouterLink></p> -->
              </div>
              <div class=" flex flex-col gap-4">
                  <input @keydown.enter="goHomePage" type="password"  required class=" border-b-2 lg:border-2 p-1.5 pr-10 w-[96%] lg:rounded-lg lg:border-black" placeholder="Password" v-model="testPassword" >
                  <div class=" flex justify-end">
                  <button @click="goHomePage()" class=" bg-[#1877F2]  text-white py-1.5 px-3.5 rounded-full lg:rounded-lg">Contuine</button>

                  </div>
              </div>
              <!-- Flowbitedan goturdum -->
              <div
              class=" flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p
                class="mx-4 mb-1 text-center text-[#00000080] text-opacity-50 ">
                Or
              </p>
            </div>
            <div class=" flex gap-2 flex-col">
              <button class=" text-sm flex border-2 px-10 rounded-2xl justify-center lg:justify-start lg:pl-3 self-center font-bold p-3 lg:text-[#0000008A] lg:text-base gap-2 w-[100%]"> <img class=" w-5 h-5 self-center" src="../static/Google.svg" alt=""> <p class="">Contuine with Google</p></button>
              
            </div>
            <div class=" flex flex-col">
            <button class=" hidden mt-4 lg:flex text-[#1473E6]">Get help sign in</button>
            <button @click="LoginStore.toComponent(LoginHome)" class=" hidden mt-4 lg:flex text-[#1473E6]">Sign to another account</button>
            </div>
            <div class=" lg:hidden p-0 gap-0">
            <button class="text-[#1473E6] text-[9px] block mb-0">Reset your password</button>
            <button class="text-[#1473E6] text-[9px]">Sign in to a different account</button>
  
            </div>
          </div>
          <!-- <img src="https://www.figma.com/file/eCuTmzALv6S8RDrsCKZGGD/image/b47e7df3efd6eba2a3b3d2b9441da0ccb03513b2" class=" " alt=""> -->
      </div>
      <div class=" flex flex-col">
      <button class=" lg:hidden relative justify-self-center bottom-8 text-xs font-normal content-center"> Get help sign in </button>
      <button @click="LoginStore.toComponent(LoginHome)" class=" lg:hidden relative justify-self-center bottom-8 text-xs font-normal content-center"> Sign another account </button>

      </div>  
    </div>
      
  
  </template>

  <script setup>
  import {ref} from "vue"
  import {useRouter} from "vue-router"
  import { useLoginStore } from "../stores/LoginStore";
  // let realEmail=ref()
  const LoginStore = useLoginStore()
  let router = useRouter()
  let checkPassword = ref()
  let checkAccount = ref()
  let password = ref(12345)
  let testPassword=ref()
  let msg = ref()
  function goHomePage(){
    if(password.value = null){
    msg.value = "Parolunuz yanlisdir"
setTimeout(() => {
    msg.value = null
}, 2000)}
else{
    checkAccount.value = LoginStore.connectedMail
    // if()
    let checkAcc=LoginStore.users.find(el=>el.email==LoginStore.connectedMail)
    checkPassword.value=checkAcc.password
    // console.log("checkPasswordcheckPassword",checkPassword.value)
    // console.log("LoginStore./connectedMail",LoginStore.connectedMail)
    // console.log("password",password.value)



    if(LoginStore.connectedMail && testPassword.value==checkPassword.value){
      // alert("ugurulu")
      router.push('/')
      LoginStore.connectedPass = testPassword.value
      testPassword.value = null
      LoginStore.isConnected = true

    }else{
      msg.value = "Sifre yanlisdir"
      setTimeout(()=>{
        msg.value = null
      }, 2000)
      // console.log("ugurusuz")
    }

    // if(LoginStore.users.find(el => el.email == checkAccount.value).password == password.value){
    //     alert("")
    // }
    // if(check){}
}
  }

</script>