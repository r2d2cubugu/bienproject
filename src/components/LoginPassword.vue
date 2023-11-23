<template>
    <div class=" flex flex-col h-screen gap-12">
      <img class="  hidden lg:flex h-max absolute top-32 left-20" src="../static/bienLogin.svg" alt="">
      <div class=" lg:bg-[url('./static/background2.png')] lg:w-full lg:h-[100vh] lg:px-20 lg:py-44 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-end">
          <div class=" pt-40 pb-8 lg:py-16 px-5 lg:px-16 bg-white rounded-md h-max w-[100%] lg:w-max">
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
               <p class=" font-bold text-red-600" v-if="msg"> {{ msg }}</p>
              <!-- Flowbitedan goturdum -->
              <div
              class=" flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p
                class="mx-4 mb-1 text-center text-[#00000080] text-opacity-50 ">
                Or
              </p>
            </div>
            <div class=" flex gap-2 flex-col">
              <button class=" text-sm flex border-2 px-10 rounded-2xl justify-center lg:justify-start lg:pl-3 self-center font-bold p-3 lg:text-[#0000008A] lg:text-base gap-2 w-[100%]">
                <svg enable-background="new 0 0 48 48" class=" w-5 h-5 self-center" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#ffc107"/><path d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z" fill="#ff3d00"/><path d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z" fill="#4caf50"/><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z" fill="#1976d2"/></svg>
                <p class="">Contuine with Google</p></button>
              
            </div>
            <div class=" flex flex-col mt-4 lg:mt-0">
            <button @click="LoginStore.toComponent('ResetPass')" class=" hidden mt-4 lg:flex text-[#1473E6]">Get help sign in</button>
            <button @click="LoginStore.toComponent('LoginHome')" class=" hidden mt-4 lg:flex text-[#1473E6]">Sign to another account</button>
            </div>
            <div class=" lg:hidden p-0 gap-0">
            <button @click="LoginStore.toComponent('ResetPass')" class="text-[#1473E6] text-[14px] lg:text-[9px] block mb-0">Reset your password</button>
            <button class="text-[#1473E6] text-[14px] lg:text-[9px]">Sign in to a different account</button>
  
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
  import { useUserPostsStore } from "../stores/UserPostsStore";
  // let realEmail=ref()
  const LoginStore = useLoginStore()
  const userPostsStore = useUserPostsStore()
  let router = useRouter()
  let checkPassword = ref()
  let checkAccount = ref()
  let password = ref(12345)
  let testPassword=ref()
  let msg = ref()
  let isFailed = ref(false)
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
      userPostsStore.myName = LoginStore.connectedMail
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