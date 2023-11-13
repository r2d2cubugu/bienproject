<template>
    <div class=" flex flex-col h-screen gap-12 ">
      <!-- <div class=" lg:bg-[url('./static/LoginBg.png')] lg:w-full lg:h-screen lg:px-20 lg:py-52 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-between"> -->
        <img class=" hidden lg:flex h-max absolute top-32 left-20" src="../static/bienLogin.svg" alt="">
      <div class=" lg:bg-[url('./static/dirdirdirdir.png')] lg:w-full lg:h-screen lg:px-20  lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-end">
          <div class=" pt-40 pb-8 lg:py-10 px-5 lg:px-16 lg:relative lg:bottom-14 bg-white rounded-md h-max w-[100%] lg:w-max border self-center flex flex-col items-start">
            <div class=" flex flex-col">
              <p class=" text-xl lg:text-[32px] font-bold mb-4 lg:mb-3 ">Update your password</p>
              <p class=" lg:text-md text-neutral-700 font-semibold mb-1 lg:mb-3 ">{{ LoginStore.connectedMail }}</p>
            </div>
            <div class=" flex flex-col gap-3 my-4 w-full">
                <input v-model="password" class=" font-semibold p-2 w-[100%]" placeholder="New password" type="text">
                <input v-model="password2" class=" font-semibold p-2" placeholder="New password again" type="text">
            </div>
            <p v-if="msg" class=" font-bold text-red-600">{{ msg }}</p>
            <button  @click="changePass()" class=" self-end bg-[#1877F2] text-white font-bold py-1 px-3 lg:py-2 rounded-full">Change</button>
          </div>
      </div>
      <button class=" lg:hidden relative justify-self-center bottom-8 text-xs font-normal content-center"> Get help sign in  </button>
  
    </div>
      
  
  </template>

  <script setup>
  import { useLoginStore } from '../stores/LoginStore';
  import  {ref} from "vue"
  const LoginStore = useLoginStore();
  const password = ref()
  const password2 = ref()
  const msg = ref()
  function changePass(){
    if(password.value != password2.value){
        msg.value = "Sifreler uygun gelmir"
        setTimeout(() => {
            msg.value = ""
        }, 3000);
    }else{
        const user = LoginStore.users.find(el => el.email == LoginStore.connectedMail)
        user.password = password.value;
        // console.log(LoginStore.users[0].email);
        // console.log(LoginStore.users[0].password);
        LoginStore.changedPassword()
        LoginStore.toComponent('LoginHome')

    }
  }
</script>