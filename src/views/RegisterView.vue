<template>
    <div class=" flex flex-col h-screen gap-12">
      <div class=" lg:bg-[url('./static/coxCiddiGorunenAdam.png')] lg:w-full lg:h-[110vh] lg:px-20 lg:py-52 lg:bg-cover lg:bg-center lg:bg-no-repeat flex lg:justify-between">
          <img class=" hidden lg:flex h-max" src="../static/bienLogin.svg" alt="">
          <div class=" pt-40 pb-8 lg:py-16 px-5 lg:px-16 bg-white rounded-md h-max w-[100%] lg:w-max">
           <h4 class=" text-xl lg:text-[32px] self-start lg:self-center lg:text-center font-bold">Create an account</h4>
           <div class=" flex justify-center mt-8 lg:mt-12 gap-8">
            <button><img class=" w-12 h-12 rounded-full border-2 p-2 border-black" src="../static/google.svg" alt=""></button>
            <button><img class=" w-12 h-12 rounded-full border-2 p-2 self-center border-black" src="../static/blackAppleicon.svg" alt=""></button>
            <button><img class=" w-12 h-12 rounded-full border-2 self-center p-2 border-black" src="../static/blueRoundFace.png" alt=""></button>
           </div>
           <div
              class=" flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 mt-8 mb-4 lg:mb-8 after:flex-1 after:border-t after:border-neutral-300">
              <p
                class="mx-4 mb-1 text-center text-[#00000080] text-opacity-50 ">
                Or
              </p>
            </div>
            <div>
                <div>
                    <p class="text-neutral-700 text-xl font-semibold">Sign up with email</p>
                    <p class=" text-neutral-700 text-lg inline">Already have an account? </p> <button class=" font-semibold text-lg text-blue-600">Sign in</button>
                </div>
                <div class=" flex flex-col mt-6 lg:gap-4 lg:mt-7">
                <input type="email"  required class=" border-b-2 lg:border-2 p-1.5 pr-10 w-[96%] lg:rounded-lg lg:border-black" placeholder="Email address">
                <input type="password"  required class=" border-b-2 lg:border-2 p-1.5 pr-10 w-[96%] lg:rounded-lg lg:border-black" placeholder="Password">
                </div>
                <div class=" flex justify-end mt-2">
                    <button class=" bg-[#1877F2] self-end  text-white py-1.5 px-3.5 rounded-full lg:rounded-lg">Contuine</button>
                </div>
            </div>
          </div>
      </div>
      <button class=" lg:hidden relative justify-self-center bottom-8 text-xs font-normal content-center"> Get help sign in </button>
  
    </div>
      
  
  </template>