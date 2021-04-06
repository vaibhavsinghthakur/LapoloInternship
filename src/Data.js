import React,{useState} from 'react'
import SingleComponent from  "./SingleComponent.js";
function Data() {
    const [data,SetData]=useState([
        {img:"https://www.inditales.com/wp-content/uploads/2018/11/ekambareswarar-temple-kanchipuram.jpg",
        name:"Ekambareswarar Temple",
        City:"Kanchipuram",
        DevelopedAround:"600 A.D",
        ID:0
       } ,
       {img:"https://lh3.googleusercontent.com/RfaTa3bsm8zmVJYznMHpncW4HCNPmPf3fstlmU5hNNm-8j3Mz8nJjUj_avt1Qi0",
       name:"Taj Mahal",
       City:"Agra",
       DevelopedAround:"1631-1648",
       ID:1
      },
      {img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/20191218_Pa%C5%82ac_Wiatr%C3%B3w_w_Jaipurze_1129_9124.jpg/1200px-20191218_Pa%C5%82ac_Wiatr%C3%B3w_w_Jaipurze_1129_9124.jpg",
      name:"Hawa Mahal",
      City:"Jaipur",
      DevelopedAround:"1799 A.D",
      ID:2
     },
     {img:"https://cdn.s3waas.gov.in/s3a1d0c6e83f027327d8461063f4ac58a6/uploads/bfi_thumb/2019061331-e1560413537315-olwb1iiex4s4tt6ij8ucflbj4d5bpl9m8asm7rv91m.jpg",
     name:"Shiv Temple",
     City:"Jabalpur",
     DevelopedAround:"2004",
     ID:3
    },
    {img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kedarnath_Temple_-_OCT_2014.jpg/361px-Kedarnath_Temple_-_OCT_2014.jpg",
    name:"Lord of Kedarkhand",
    City:"Uttarakhand",
    DevelopedAround:" 8th Century.",
    ID:4
   }      
    ]);
    return (
        <div>
            {
                data.map((comp,id)=>{
                  return(<SingleComponent
                     key={id}
                     ID={comp.ID}
                     img={comp.img}
                     name={comp.name}
                     City={comp.City}
                     DevelopedAround={comp.DevelopedAround}
                  /> )
                })
            }
        </div>
    )
}

export default Data
