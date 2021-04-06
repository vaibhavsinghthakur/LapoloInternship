import React from 'react'
import "./SingleComponent.css";
function SingleComponent({Key,img,name,City,ID,DevelopedAround}) {
    return (
        <div className="SingleComponent">
           {ID%2===0?
            <div className="Design1">
            <img className="image" src={img}/>
             <div className="Textdata">
               <div className="Textdata_name">
                 <span>Name:</span>
                 <p>{name}</p>
               </div>
               <div className="Textdata_name">
                 <span>City:</span>  
                 <p>{City}</p>
               </div>
               <div className="Textdata_name">
                 <span>DevelopedAround:</span>  
                 <p>{DevelopedAround}</p>
               </div>
            </div>
           </div>
           :
           <div className="Design1">
           <div className="Textdata">
           <div className="Textdata_name">
                 <span>Name:</span>
                 <p>{name}</p>
           </div>
           <div className="Textdata_name">
                 <span>City:</span>  
                 <p>{City}</p>
           </div>
           <div className="Textdata_name">
                 <span>DevelopedAround:</span>  
                 <p>{DevelopedAround}</p>
           </div>
           </div>
           <img className="image" src={img}/>
           </div>            
           }
        </div>
    )
}

export default SingleComponent
