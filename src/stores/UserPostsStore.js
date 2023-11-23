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
    myName: 'Miri',
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
            photoLink:"https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            tags:[
               '#design','#trend','#bien'
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
            photoLink:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
            tags:[
               '#design','#trend','#bien'
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
            photoLink:"https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind.jpg?v=1624444348",
            tags:[
               '#design','#trend','#bien'
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
            photoLink:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
            comments:[
                {

                }
            ],
            likes:"",
            id:4,
            isClicked:false
        },
        {
            photoLink:"https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            comments:[
                {

                }
            ],
            tags:[
               '#design','#trend','#bien'
            ],
            likes:"",
            id:5,
            isClicked:false
        },
        {
            photoLink:"https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind.jpg?v=1624444348",
            tags:[
               '#design','#trend','#bien'
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
            photoLink:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
            tags:[
               '#design','#trend','#bien'
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
            photoLink:"https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            tags:[
               '#design','#trend','#bien'
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
            photoLink:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
            tags:[
               '#design','#trend','#bien'
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
            photoLink:"https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind.jpg?v=1624444348",
            tags:[
               '#design','#trend','#bien'
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
            photoLink:"https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            tags:[
               '#design','#trend','#bien','#cat'
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
            photoLink:"https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind.jpg?v=1624444348",
            tags:[
               '#design','#trend','#bien'
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
            photoLink:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
            tags:[
               '#design','#trend','#bien'
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