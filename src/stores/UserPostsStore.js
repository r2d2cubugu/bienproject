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
    isComponentPost: "",
    myName: null,
    myProfile: "https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
    likedPosts:{
        userProfil:"../static/userProfil.svg",
        name:"Hesen Hesenli",
            photo:"../static/mostLiked.png",
            like:555
    },
    selectedPost: null,
    userPosts:[
        {
            photoLink:"../../src/static/mostLiked.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {
                    descp:" fgthtfhfthfth fthfthtfhfthf fdhrfhfchfchfhfch hhrfdhfhtf",
                    name:"Temkin",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:"pp",
                    name:"Temkin",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
            ],
            likes:"",
            id:1,
            isClicked:false
        },
        {
            photoLink:"../../src/static/latestPhoto.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {

                }
            ],
            likes:"",
            id:2,
            isClicked:false
        },
        {
            photoLink:"../../src/static/Rectangle 16.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            likes:"",
            id:3,
            isClicked:false,
            comments:[
                {
                    descp:" fgthtfhfthfth fthfthtfhfthf fdhrfhfchfchfhfch hhrfdhfhtf",
                    name:"Temkin111",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:"Yox",
                    name:"Temkin2",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:" fgthtfhfthfth fthfthtfhfthf fdhrfhfchfchfhfch hhrfdhfhtf",
                    name:"Temkin",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:"Yox",
                    name:"Temkin2",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:" fgthtfhfthfth fthfthtfhfthf fdhrfhfchfchfhfch hhrfdhfhtf",
                    name:"Temkin",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:"Yox",
                    name:"Temkin2",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:" fgthtfhfthfth fthfthtfhfthf fdhrfhfchfchfhfch hhrfdhfhtf",
                    name:"Temkin",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:"Yox",
                    name:"Temkin2",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:" fgthtfhfthfth fthfthtfhfthf fdhrfhfchfchfhfch hhrfdhfhtf",
                    name:"Temkin",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:"Yox",
                    name:"Temkin2",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:" fgthtfhfthfth fthfthtfhfthf fdhrfhfchfchfhfch hhrfdhfhtf",
                    name:"Temkin",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:"Yox",
                    name:"Temkin2",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:" fgthtfhfthfth fthfthtfhfthf fdhrfhfchfchfhfch hhrfdhfhtf",
                    name:"Temkin",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:"Yox",
                    name:"Temkin2",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:" fgthtfhfthfth fthfthtfhfthf fdhrfhfchfchfhfch hhrfdhfhtf",
                    name:"Temkin",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
                {
                    descp:"Yox",
                    name:"Temkin2",
                    profil:"https://imgs.search.brave.com/fNfFIuWbI6hTW-UnaaoyU8Loc4R2oiCidqNc-EmfvnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3JldHJpY2EuY29t/L2ltYWdlcy9zdmcv/cm91bmQtY29ybmVy/cy5zdmc.svg",
                },
            ],
        },
        {
            photoLink:"../../src/static/latestPhoto.png",
            comments:[
                {

                }
            ],
            likes:"",
            id:4,
            isClicked:false
        },
        {
            photoLink:"../../src/static/mostLiked.png",
            comments:[
                {

                }
            ],
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            likes:"",
            id:5,
            isClicked:false
        },
        {
            photoLink:"../../src/static/Rectangle 16.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {

                }
            ],
            likes:"",
            id:6,
            isClicked:false
        },
        {
            photoLink:"../../src/static/latestPhoto.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {

                }
            ],
            likes:"",
            id:7,
            isClicked:false
        },
        {
            photoLink:"../../src/static/mostLiked.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {

                }
            ],
            likes:"",
            id:8,
            isClicked:false
        },
        {
            photoLink:"../../src/static/latestPhoto.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {

                }
            ],
            likes:"",
            id:9,
            isClicked:false
        },
        {
            photoLink:"../../src/static/Rectangle 16.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {

                }
            ],
            likes:"",
            id:10,
            isClicked:false
        },
        {
            photoLink:"../../src/static/mostLiked.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {

                }
            ],
            likes:"",
            id:11,
            isClicked:false
        },
        {
            photoLink:"../../src/static/Rectangle 16.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {

                }
            ],
            likes:"",
            id:12,
            isClicked:false
        },
        {
            photoLink:"../../src/static/latestPhoto.png",
            tags:[
                '#vallah','#bezdim','#buseyfeden'
            ],
            comments:[
                {

                }
            ],
            likes:"",
            id:13,
            isClicked:false
        }
        
    ]
    }),
    actions:{
        closeComments(id){
            let unselectOthers = this.userPosts.filter(el => el.id != id)
            for (let i = 0; i < unselectOthers.length; i++) {
                unselectOthers[i].isClicked = false;
                
            }
        }
    }
})