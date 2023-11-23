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
            photoLink:"https://s3-alpha-sig.figma.com/img/6a86/b4fa/c4c45d295bc2c2437972b5b2161561b4?Expires=1701648000&Signature=bJ4Q6LB1yYPGMFwLK8JOs1pTQWnXlQXKhdE2ye9eG8aBDHqlwpNHbcvxlC5NbmoGn519d9Rm38-n9d5V6JLqbYKdqHoZNbWnqQiOXqxx7SAMDvASrGJ1u3qK8ofY0rfNv2OYMLHpDp~4-iLTSKcFLXINeVVJDTnVz20kCMQGx61hffbW5g3oqbMUfE0lBVr0aoHPvK1IOl5JRNayfsFCl8YiMG4xMqgKXpJy0MzFWzQSxQfV8VE5CtTd8U8gv-e-0ua4sFCEsbP2ytlziba3miD5QG0AoNSFpsPlK1L0HT6D8ZR-2UYzEodghWmKMI5MJd5ng6NTE~DR-paYWqHXOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/93e7/2913/1a3b60904f4c3753d0c52b7a6bfc9e92?Expires=1701648000&Signature=CsoMt67ik6s~ICtcNVovVufiNToZNFIsp5P52RR3~~Pp86vas8LiUM39A3MyHlvIYXbDc8hpHrEzEsh7IHTB5Ln32HurLRGRJ4E1V20GFHjqX1dCbbay6A3XN2IHzLL0NOjU1EPkL4XOcIZISl3m6VOTOa0Zkaa0I64a7qYbaE2H6yRyVxg6HQbymhPIzmVLkILUfyuJymqk~4TOJ6dMSElSqd6XkUFVZ1J~TyKlYYdPjr2Lynaw8aDwcP9SR6XTvRgIBL43LLibihzZi5FGER~-J9HBSbOjmvQcmvYz2JewI2hT1rVqx3GqAzyPO8hgPHCRKsK-A8WeFS~VzPqk3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/d784/8ab7/12c3c8e6e00fc90815eaaa6d4c506697?Expires=1701648000&Signature=SeFrhGcsUWp8WS0aG4JXQSq5if9xw3PETuKQ1Mf5SU8bdDGIXvls-Wl8WKOLJVVv~TG~K0G06waE5GfJ3b0wVMYbMy5iWo78HlLZQX9Ejj2146A2eluFMBHEvo~4E3ff~FEmgUXHCg8itRW2rr37BY64p49WE0uGCPImdjZSVfZC7lq5DcCvv~A~nZGmypIglrAujO5DRcC6qb5Wd3JyJK4~DH6QLY4cbx025oelMcrqKRE~I-rmoYyTGIQEz-mytx-qwWXir3P4rvbqEwrn5~mbRiGPfGZJDU6~4230U69HojQhJyKBs5hwTnQ3al~LpAyuklmwVmt4Ee2uSY2j3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/93e7/2913/1a3b60904f4c3753d0c52b7a6bfc9e92?Expires=1701648000&Signature=CsoMt67ik6s~ICtcNVovVufiNToZNFIsp5P52RR3~~Pp86vas8LiUM39A3MyHlvIYXbDc8hpHrEzEsh7IHTB5Ln32HurLRGRJ4E1V20GFHjqX1dCbbay6A3XN2IHzLL0NOjU1EPkL4XOcIZISl3m6VOTOa0Zkaa0I64a7qYbaE2H6yRyVxg6HQbymhPIzmVLkILUfyuJymqk~4TOJ6dMSElSqd6XkUFVZ1J~TyKlYYdPjr2Lynaw8aDwcP9SR6XTvRgIBL43LLibihzZi5FGER~-J9HBSbOjmvQcmvYz2JewI2hT1rVqx3GqAzyPO8hgPHCRKsK-A8WeFS~VzPqk3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            comments:[
                {

                }
            ],
            likes:"",
            id:4,
            isClicked:false
        },
        {
            photoLink:"https://s3-alpha-sig.figma.com/img/6a86/b4fa/c4c45d295bc2c2437972b5b2161561b4?Expires=1701648000&Signature=bJ4Q6LB1yYPGMFwLK8JOs1pTQWnXlQXKhdE2ye9eG8aBDHqlwpNHbcvxlC5NbmoGn519d9Rm38-n9d5V6JLqbYKdqHoZNbWnqQiOXqxx7SAMDvASrGJ1u3qK8ofY0rfNv2OYMLHpDp~4-iLTSKcFLXINeVVJDTnVz20kCMQGx61hffbW5g3oqbMUfE0lBVr0aoHPvK1IOl5JRNayfsFCl8YiMG4xMqgKXpJy0MzFWzQSxQfV8VE5CtTd8U8gv-e-0ua4sFCEsbP2ytlziba3miD5QG0AoNSFpsPlK1L0HT6D8ZR-2UYzEodghWmKMI5MJd5ng6NTE~DR-paYWqHXOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/d784/8ab7/12c3c8e6e00fc90815eaaa6d4c506697?Expires=1701648000&Signature=SeFrhGcsUWp8WS0aG4JXQSq5if9xw3PETuKQ1Mf5SU8bdDGIXvls-Wl8WKOLJVVv~TG~K0G06waE5GfJ3b0wVMYbMy5iWo78HlLZQX9Ejj2146A2eluFMBHEvo~4E3ff~FEmgUXHCg8itRW2rr37BY64p49WE0uGCPImdjZSVfZC7lq5DcCvv~A~nZGmypIglrAujO5DRcC6qb5Wd3JyJK4~DH6QLY4cbx025oelMcrqKRE~I-rmoYyTGIQEz-mytx-qwWXir3P4rvbqEwrn5~mbRiGPfGZJDU6~4230U69HojQhJyKBs5hwTnQ3al~LpAyuklmwVmt4Ee2uSY2j3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/93e7/2913/1a3b60904f4c3753d0c52b7a6bfc9e92?Expires=1701648000&Signature=CsoMt67ik6s~ICtcNVovVufiNToZNFIsp5P52RR3~~Pp86vas8LiUM39A3MyHlvIYXbDc8hpHrEzEsh7IHTB5Ln32HurLRGRJ4E1V20GFHjqX1dCbbay6A3XN2IHzLL0NOjU1EPkL4XOcIZISl3m6VOTOa0Zkaa0I64a7qYbaE2H6yRyVxg6HQbymhPIzmVLkILUfyuJymqk~4TOJ6dMSElSqd6XkUFVZ1J~TyKlYYdPjr2Lynaw8aDwcP9SR6XTvRgIBL43LLibihzZi5FGER~-J9HBSbOjmvQcmvYz2JewI2hT1rVqx3GqAzyPO8hgPHCRKsK-A8WeFS~VzPqk3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/6a86/b4fa/c4c45d295bc2c2437972b5b2161561b4?Expires=1701648000&Signature=bJ4Q6LB1yYPGMFwLK8JOs1pTQWnXlQXKhdE2ye9eG8aBDHqlwpNHbcvxlC5NbmoGn519d9Rm38-n9d5V6JLqbYKdqHoZNbWnqQiOXqxx7SAMDvASrGJ1u3qK8ofY0rfNv2OYMLHpDp~4-iLTSKcFLXINeVVJDTnVz20kCMQGx61hffbW5g3oqbMUfE0lBVr0aoHPvK1IOl5JRNayfsFCl8YiMG4xMqgKXpJy0MzFWzQSxQfV8VE5CtTd8U8gv-e-0ua4sFCEsbP2ytlziba3miD5QG0AoNSFpsPlK1L0HT6D8ZR-2UYzEodghWmKMI5MJd5ng6NTE~DR-paYWqHXOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/93e7/2913/1a3b60904f4c3753d0c52b7a6bfc9e92?Expires=1701648000&Signature=CsoMt67ik6s~ICtcNVovVufiNToZNFIsp5P52RR3~~Pp86vas8LiUM39A3MyHlvIYXbDc8hpHrEzEsh7IHTB5Ln32HurLRGRJ4E1V20GFHjqX1dCbbay6A3XN2IHzLL0NOjU1EPkL4XOcIZISl3m6VOTOa0Zkaa0I64a7qYbaE2H6yRyVxg6HQbymhPIzmVLkILUfyuJymqk~4TOJ6dMSElSqd6XkUFVZ1J~TyKlYYdPjr2Lynaw8aDwcP9SR6XTvRgIBL43LLibihzZi5FGER~-J9HBSbOjmvQcmvYz2JewI2hT1rVqx3GqAzyPO8hgPHCRKsK-A8WeFS~VzPqk3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/d784/8ab7/12c3c8e6e00fc90815eaaa6d4c506697?Expires=1701648000&Signature=SeFrhGcsUWp8WS0aG4JXQSq5if9xw3PETuKQ1Mf5SU8bdDGIXvls-Wl8WKOLJVVv~TG~K0G06waE5GfJ3b0wVMYbMy5iWo78HlLZQX9Ejj2146A2eluFMBHEvo~4E3ff~FEmgUXHCg8itRW2rr37BY64p49WE0uGCPImdjZSVfZC7lq5DcCvv~A~nZGmypIglrAujO5DRcC6qb5Wd3JyJK4~DH6QLY4cbx025oelMcrqKRE~I-rmoYyTGIQEz-mytx-qwWXir3P4rvbqEwrn5~mbRiGPfGZJDU6~4230U69HojQhJyKBs5hwTnQ3al~LpAyuklmwVmt4Ee2uSY2j3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/6a86/b4fa/c4c45d295bc2c2437972b5b2161561b4?Expires=1701648000&Signature=bJ4Q6LB1yYPGMFwLK8JOs1pTQWnXlQXKhdE2ye9eG8aBDHqlwpNHbcvxlC5NbmoGn519d9Rm38-n9d5V6JLqbYKdqHoZNbWnqQiOXqxx7SAMDvASrGJ1u3qK8ofY0rfNv2OYMLHpDp~4-iLTSKcFLXINeVVJDTnVz20kCMQGx61hffbW5g3oqbMUfE0lBVr0aoHPvK1IOl5JRNayfsFCl8YiMG4xMqgKXpJy0MzFWzQSxQfV8VE5CtTd8U8gv-e-0ua4sFCEsbP2ytlziba3miD5QG0AoNSFpsPlK1L0HT6D8ZR-2UYzEodghWmKMI5MJd5ng6NTE~DR-paYWqHXOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/d784/8ab7/12c3c8e6e00fc90815eaaa6d4c506697?Expires=1701648000&Signature=SeFrhGcsUWp8WS0aG4JXQSq5if9xw3PETuKQ1Mf5SU8bdDGIXvls-Wl8WKOLJVVv~TG~K0G06waE5GfJ3b0wVMYbMy5iWo78HlLZQX9Ejj2146A2eluFMBHEvo~4E3ff~FEmgUXHCg8itRW2rr37BY64p49WE0uGCPImdjZSVfZC7lq5DcCvv~A~nZGmypIglrAujO5DRcC6qb5Wd3JyJK4~DH6QLY4cbx025oelMcrqKRE~I-rmoYyTGIQEz-mytx-qwWXir3P4rvbqEwrn5~mbRiGPfGZJDU6~4230U69HojQhJyKBs5hwTnQ3al~LpAyuklmwVmt4Ee2uSY2j3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            photoLink:"https://s3-alpha-sig.figma.com/img/93e7/2913/1a3b60904f4c3753d0c52b7a6bfc9e92?Expires=1701648000&Signature=CsoMt67ik6s~ICtcNVovVufiNToZNFIsp5P52RR3~~Pp86vas8LiUM39A3MyHlvIYXbDc8hpHrEzEsh7IHTB5Ln32HurLRGRJ4E1V20GFHjqX1dCbbay6A3XN2IHzLL0NOjU1EPkL4XOcIZISl3m6VOTOa0Zkaa0I64a7qYbaE2H6yRyVxg6HQbymhPIzmVLkILUfyuJymqk~4TOJ6dMSElSqd6XkUFVZ1J~TyKlYYdPjr2Lynaw8aDwcP9SR6XTvRgIBL43LLibihzZi5FGER~-J9HBSbOjmvQcmvYz2JewI2hT1rVqx3GqAzyPO8hgPHCRKsK-A8WeFS~VzPqk3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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