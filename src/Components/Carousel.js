import React, { useState } from "react";
import { Children } from "react";
import './caraousel.css'




function Carousel(props){
    const [activeItem,setactiveItem]=useState(0);

    const updateActiveItem =(count)=>{
        const totalChildren=Children.count(props.children);
        let newItemIndex=activeItem+count;

        if(newItemIndex<0){
            newItemIndex=0;
        }
        else if(newItemIndex>= totalChildren){
            newItemIndex= 0;
        }
        setactiveItem(newItemIndex);
    }

    return(
      <div className="carousel">
          <div className="main-element" 
                style={{transform:`translateX(-${activeItem*100}%)`}}>
                {Children.map(props.children,(child,index)=>{
                    
                    return React.cloneElement(child)
                    
                })}
                
         </div>
        <button onClick={()=>{
                updateActiveItem(1)
            }}
            >next</button>
            <button onClick={()=>{
        updateActiveItem(-1)
    }}>prev</button>
      </div>
      
      
    )
  }
  export default Carousel;