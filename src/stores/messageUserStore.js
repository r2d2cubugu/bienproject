import { defineStore } from "pinia";

export let useMessageUserStore = defineStore({
    id:"Message store",
    state:()=>({
        name:"Salam",
        messages:[
            {
                name:"Hesen",
                id:1,
                profil:"../../src/static/contact1.png",
                hisMessages:[
                    {
                        message:"Test1",
                        time:"2023 12 20 19:20:03"
                    }
                ],
                yourMessages:[
                    {
                        message:"Test2",
                        time:"2023 12 20 19:21:04"
                    }
                ],
                lastMessage:{
                    message:"Pqmw",
                    time:"20231220192104"
                }
            },
            {
                name:"Hesen",
                id:2,
                profil:"../../src/static/contact2.png",
                hisMessages:[
                    {
                        message:"Test1",
                        time:"2023 12 20 19:20:03"
                    }
                ],
                yourMessages:[
                    {
                        message:"Test2",
                        time:"2023 12 20 19:21:04"
                    }
                ],
                lastMessage:{
                    message:"Pqmw",
                    time:"20231220192104"
                }
            },
            {
                name:"Hesen",
                id:3,
                profil:"../../src/static/contact3.png",
                hisMessages:[
                    {
                        message:"Test1",
                        time:"2023 12 20 19:20:03"
                    }
                ],
                yourMessages:[
                    {
                        message:"Test2",
                        time:"20231220192104"
                    }
                ],
                lastMessage:{
                    message:"Pqmw",
                    time:{
                        day:31,
                        month:10,
                        year:2023,
                        clock:"20:22"
                    }
                }
            },
        ]
    })
})