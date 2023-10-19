import { defineStore } from "pinia";

export let useCheckStore = defineStore({
    id:"CheckStore",
    state:()=>({
        haveComponent:true
    }),
    actions:{
        ShowComponent(){
            this.haveComponent = true
        },
        HideComponent(){
            this.haveComponent = false
        }
    }
})