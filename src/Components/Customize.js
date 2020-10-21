import React from 'react'
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png"
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png"
import { motion } from 'framer-motion';
import { useHistory } from "react-router-dom";


export default function Customize({ingredients,setToppings}) {

let history = useHistory();

function handleClick() {
    history.push("/checkout");
}

const changeTopping = (name)=>{
    let newtop=JSON.parse(JSON.stringify(ingredients));
    //toggle data
    newtop[name]=!newtop[name];
    setToppings(newtop);
};

    return (
        <div style={{display:"flex"}}>
           <div style={{border: "2px solid black", flex: 1,alignItems:"center"}}>
               <p align="center"><b>😋 YumYum !!😋</b></p>
               <div style= {{minHeight:500,maxWidth:500,position:"relative"}}>
                    <motion.div
                        initial={{ opacity : 0 }}
                        animate={{
                            y: ingredients["cheese"] ?100 :-100,
                            opacity: ingredients["cheese"] ? 1:0,
                            scale : ingredients["cheese"]?1:0,
                        }}
                        transition={{duration: 1}}
                        className="ingredients"
                    >
                    <img src={Cheese} alt="Tomato" height="100%" width="100%" />
                    </motion.div>



                    <motion.div
                        initial={{ opacity : 0 }}
                        animate={{
                            y: ingredients["pineapple"] ?100 :-100,
                            opacity: ingredients["pineapple"] ? 1:0,
                        }}
                        transition={{duration: 1}}
                        className="ingredients"
                    >
                    <img src={Pineapple} alt="Tomato" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{
                            y: ingredients["olive"] ? 100:-100,
                            opacity:ingredients["olive"]? 1:0,
                        }}
                        transition={{duration:1}}
                        className="ingredients"
                    >
                    <img src={Olive} alt="PizzaBase" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{opacity:0}}
                        animate={{
                            y:ingredients["mushroom"]? 100:-100,
                            opacity:ingredients["mushroom"]? 1:0,
                        }}
                        transition = {{duration :1}}
                        className="ingredients"
                    >
                    <img src={Mushroom} alt="PizzaBase" height="100%" width="100%"/>
                    </motion.div>

                    <motion.div
                        initial={{opacity:0}}
                        animate={{
                            y:ingredients["basil"]? 100:-100,
                            opacity:ingredients["basil"]? 1:0,
                        }}
                        transition = {{duration :1}}
                        className="ingredients"
                    >
                    <img src={Basil} alt="PizzaBase" height="100%" width="100%"/>
                    </motion.div>

                    <motion.div
                        initial={{opacity:0}}
                        animate={{
                            y:ingredients["tomato"]? 100:-100,
                            opacity:ingredients["tomato"]? 1:0,
                        }}
                        transition = {{duration :1}}
                        className="ingredients"
                    >
                    <img src={Tomato} alt="PizzaBase" height="100%" width="100%"/>
                    </motion.div>

                    <img src={Base} alt="PizzaBase" height="100%" width="100%" />
               </div>
            </div> 
            <div style={{border: "2px solid black" ,flex: 1}}>

            <label for="basil" class="container">Basil
            <input type="checkbox" id="basil" name="basil" onChange={()=>changeTopping("basil")} />
            <span class="checkmark"></span>
            </label>

            <label for="cheese" class="container">Cheese
            <input type="checkbox" id="cheese" name="cheese" onChange={()=>changeTopping("cheese")}/>
            <span class="checkmark"></span>
            </label>

            <label for="tomato" class="container">Tomato 
            <input type="checkbox" id="tomato" name="tomato" onChange={()=>changeTopping("tomato")}/>
            <span class="checkmark"></span>
            </label>

            <label for="olives" class="container">Olives 
            <input type="checkbox" id="olives" name="olives" onChange={()=>changeTopping("olive")}/>
            <span class="checkmark"></span>
            </label>

            <label for="mushroom" class="container">Mushroom 
            <input type="checkbox" id="mushroom" name="mushroom" onChange={()=>changeTopping("mushroom")}/>
            <span class="checkmark"></span>
            </label>
 
            <label for="pineapple" class="container">Pineapple
            <input type="checkbox" id="pineapple" name="pineapple" onChange={()=>changeTopping("pineapple")}/>
            <span class="checkmark"></span>
            </label>      
            <button type="button" onClick={handleClick}>
                Proceed to Checkout
            </button>
            </div>
        </div>
    )
}
