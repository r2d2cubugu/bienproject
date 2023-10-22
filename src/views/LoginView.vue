
import { RouterLink } from 'vue-router';
<template>
    <div class=" lg:bg-[url('./static/LoginBg.png')] w-full lg:h-[110vh] py-52 lg:bg-cover lg:bg-center lg:bg-no-repeat">
        <img class=" hidden lg:flex h-[100%]" src="../static/bienLogin.svg" alt="">
        <div class=" pt-40 pb-8 lg:py-20 px-20 lg:px-24 bg-white">
            <h4 class=" text-xl lg:text-3xl font-bold">Sign in</h4>
            <p>New user?<RouterLink to="/register">Create an account</RouterLink></p>
        </div>
        <!-- <img src="https://www.figma.com/file/eCuTmzALv6S8RDrsCKZGGD/image/b47e7df3efd6eba2a3b3d2b9441da0ccb03513b2" class=" " alt=""> -->
    </div>
</template>