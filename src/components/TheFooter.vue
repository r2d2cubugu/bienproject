<template>
    <div class=" absolute bottom-0">
        <div class=" relative bottom-0 py-24 lg:px-32 bg-black w-full flex justify-between">
            <div class=" flex flex-col gap-4">
                <img class=" w-min" src="../static/BIENwhite.svg" alt="">
                <p class=" lg:w-[600px] text-white ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus et quisquam ad asperiores id, ratione corrupti recusandae eveniet aperiam dolorem consectetur molestiae animi vero dolor aut beatae a. Ut, vel!</p>
            <div class=" flex lg:hidden gap-2 justify-between">
                <div class=" flex flex-col">
                <button @click="$router.push('/contact')" class=" text-white font-semibold">Contact</button>
                <p class=" text-white">Mirbala@gmail.com</p>
            </div>
            <div class=" flex w-max gap-2">
                <button><img src="../static/roundInsta.svg" alt=""></button>
                <button><img src="../static/roundLink.svg" alt=""></button>
                <button><img src="../static//roundYoutube.svg" alt=""></button>
                <button><img src="../static/roundFace.svg" alt=""></button>
            </div>
            </div>

            <div class=" hidden lg:flex">
                <button><img src="../static/icon_instagram.svg" alt=""></button>
                <button><img src="../static/icon_linkedin_.svg" alt=""></button>
                <button><img src="../static//icon_youtube_.svg" alt=""></button>
                <button><img src="../static/icon_facebook.svg" alt=""></button>
            </div>

         </div>
            <div class=" hidden lg:flex lg:flex-col">
                <button @click="$router.push('/contact')" class=" text-white font-semibold">Contact</button>
                <p class=" text-white">Mirbala</p>
            </div>
        </div>
    </div>
</template>


