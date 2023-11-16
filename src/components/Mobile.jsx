import React from "react";

export const Mobile = ({heading,price,url,desc})=>{
    return(
        <div className="sub">
            <img src={`img/${url}.webp`} alt="" />
            <h2>{heading}</h2>
            <h3>{price}</h3>
            <p>{desc}</p>
            <button>ADD TO CART</button>
            <button>BUY</button>
        </div>
    )
}