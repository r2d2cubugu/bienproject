import { defineStore } from "pinia";


export let useUserPostsStore = defineStore({
    id:"UserPostsStore",
    state:()=>({
        latestPosts:{
            userProfil:"../static/userProfil.svg",
            name:"Hesen Hesenli",
            photo:"../static/latestPhoto.png",
            like:555,
            
    },
    likedPosts:{
        userProfil:"../static/userProfil.svg",
        name:"Hesen Hesenli",
            photo:"../static/mostLiked.png",
            like:555
    }
    })
})