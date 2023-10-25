import { defineStore } from "pinia";

export let useLoginStore = defineStore({
    id:"LoginStore",
    state:()=>({
        isComponent: "",
        email:"",
        password:"",
        users:[
            {
                email:"sesivere@gmail.com",
                password:12345,
                id:1
            }
        ],
        connectedMail:"",
        connectedPass:"",
        isConnected:false
    }),
    actions:{
        toComponent(component){
            console.log("componentede bax",component)
            this.isComponent = component
        },
        updateEmail(email){
            this.email = email
        },
        updatePassword(password){
            this.password = password
        },
    }
})