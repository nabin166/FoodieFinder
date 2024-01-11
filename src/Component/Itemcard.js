import React from 'react'
import "../SCSS/Itemcard.scss"
import { MdAddCircle } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";

export default function Itemcard() {
  return (
    <div id='itemcard'>
        <div> 
          {/* cart icon */}
        <a href=''><FaCartShopping size={25} id='cartitm' /></a>
          <div>
            <img src={"Images/food/momo.jpg"} ></img>
            <div id='foodname'><small>Black Forest</small><h3>Momo</h3> 
            <div id='cartfooter'>
               <h4>NPR 220</h4>
               {/* cart section  */}
               <div id='cartsection'>
                  <div id='cart'>
                    <div id="subtractcounter"><a href='#'><GrSubtractCircle size={22} /></a></div>
                    <p>0</p>
                    <div id="addcounter"><a href='#'><MdAddCircle  size={22}/></a></div>
                  
                  </div>
                </div>
            </div>
            
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
