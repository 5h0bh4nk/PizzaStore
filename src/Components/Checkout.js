import React , { useState } from 'react';
import { useHistory } from "react-router-dom";

function Checkout({ingredients}) {

    const [sucess,setSuccess]=useState(false);
    const history= useHistory();
    return (
        <div style={{display:"flex"}}>
           <div>
                <h1>My toppings</h1>
                {Object.keys(ingredients).map((topping)=>{
                    if (ingredients[topping])
                    return <p>{topping[0].toUpperCase()+topping.substr(1)}</p>;
                })}

                <button onClick={()=>setSuccess(true)}>
                    Confirm Your Order
                </button>
                <button onClick={()=> history.push("/")}>
                    Change Toppings
                </button>
           </div>
        </div>

    )
}

export default Checkout
