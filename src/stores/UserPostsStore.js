import { defineStore } from "pinia";


export let useUserPostsStore = defineStore({
    id:"UserPostsStore",
    state:()=>({
        latestPosts:{
            name:"Hesen Hesenli",
            photo:"../static/Rectangle 2.png",
            like:555
    },
    likedPosts:{
        name:"Hesen Hesenli",
            photo:"../static/Rectangle 2.png",
            like:555
    }
    })
})