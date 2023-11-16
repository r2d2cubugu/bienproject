
import { RouterLink } from 'vue-router';
<template>
  <div class=" flex flex-col h-screen gap-12 ">
    <!-- <div class=" lg:bg-[url('./static/LoginBg.png')] lg:w-full lg:h-screen lg:px-20 lg:py-52 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-between"> -->
      <img class=" hidden lg:flex h-max absolute top-32 left-20" src="../static/bienLogin.svg" alt="">
    <div class=" lg:bg-[url('./static/dirdirdirdir.png')] lg:w-full lg:h-screen lg:px-20  lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-end">
        <div class=" pt-40 pb-8 lg:py-10 px-5 lg:px-16 lg:relative lg:bottom-14 bg-white rounded-md h-max w-[100%] lg:w-max border self-center items-center">
          <div class=" flex flex-col">
            <p class=" text-xl lg:text-[32px] font-bold mb-4 lg:mb-3 ">Update your password</p>
            <p class=" lg:text-md text-neutral-700 mb-1 lg:mb-3 ">Enter the code we just sent to</p>
            <p>{{ kod }}</p>
            <p class=" lg:text-md text-neutral-700 font-semibold mb-1 lg:mb-3 ">{{ LoginStore.connectedMail }}</p>
            <div class=" flex gap-2">
             <div v-for="index in 6">
              <div class="w-12 h-12 ">
                <input value="" @keydown="goNext(index)" maxlength="1" class="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-black text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="sub" name="" :id=index>
              </div>
            </div>
            </div>
            <div class=" flex self-end gap-3 mt-16">
              <button @click="LoginStore.toComponent('LoginPassword')">Back</button>
              <button @click="newCode()">Resend code <span v-if="timer">{{ timer }}</span></button>
            </div>
          </div>
        </div>
    </div>
    <button class=" lg:hidden relative justify-self-center bottom-8 text-xs font-normal content-center"> Get help sign in  </button>

  </div>
    

</template>


<script setup>
import { ref,watch } from 'vue';
import { useLoginStore } from '../stores/LoginStore';
import { parseQuery } from 'vue-router';


let timer = ref(0)
let LoginStore = useLoginStore()
let kod = ref()
function createOTP(){
  const characters = "1234567890";
      let newPassword = "";
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newPassword += characters[randomIndex];
      }
      kod.value = parseInt(newPassword);
      console.log(kod.value);

  }
  
createOTP()
// console.log(kod.value);
let test = "salam"
let input6 = document.getElementById(6)
let birc = ref("")
let ikic = ref("")
let ucc = ref("")
let dordc = ref("")
let besc = ref("")
let altic = ref("")
let variables = ref([birc.value, ikic.value, ucc.value, dordc.value, besc.value, altic.value])
let isClicked = ref(false)


function newCode(){
  if(!isClicked.value){
  isClicked.value = true
  timer.value = 300
  createOTP()
  // while (isClicked = true) {
  //   timer--
  //   if (timer == 0) {
  //     break
  //   }
  // }
 


  setInterval(() => {
      if (timer.value > 0) {
        timer.value--;
      } else {
        isClicked.value = false
      }
    }, 1000);}
}


function goNext(x){
  if (document.getElementById(x).lenght == document.getElementById(x).maxlength) {
    setTimeout(() => {
      console.log(document.getElementById(x).value.charAt(0));
      variables.value[x-1] = document.getElementById(x).value.charAt(0)
      console.log(variables.value[x-1]);

        let passStr = ref("")
for (let i = 0; i < 6; i++) {
  passStr.value = passStr.value + variables.value[i] 
}
let passInt = ref(parseInt(passStr.value))
  if (passInt.value == kod.value) {
    LoginStore.toComponent("LoginReset")
  }
  
console.log("edede bax", passInt.value);
console.log("Str'e bax", passStr.value);
      
    }, 5);
    setTimeout(() => {
      if(document.getElementById(x).value != ""){
      document.getElementById(x+1).focus()
      
  }
    }, 10);
   
    
  }
}

// let myKodStr = birc.value + ikic.value + ucc.value + dordc.value + besc.value + altic.value
// let myKod = ref(parseQuery(myKodStr.value))
// console.log("Salam",myKod.value);
</script>