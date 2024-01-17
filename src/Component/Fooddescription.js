import React,{useState} from 'react'
import "../SCSS/Fooddescription.scss"
import { MdAddCircle } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";

//Modal for view on click
export default function Fooddescription() {
  const [beforecount,setCounts]= useState(0);


      const Add = () => {
     
        setCounts((befcount) => befcount + 1);
        
      
     };

     const Sub = ()=>{
      setCounts((befcount) => Math.max(0, befcount - 1));
     }

  return (
    <div id='fooddescription'>
         <div id='fooddesc'>
          {/* Image section */}
            <div id='image'> <img src={"Images/food/momo.jpg"}></img></div>
          {/* product descripotion section */}
            <div id='productdetail'>
              {/* Name */}
                <div><h2>Momo</h2></div>
                <div><p>The dumplings are wrapped in a thin dough, and their shape can vary from round to crescent-shaped.</p></div>
                {/* price */}
                <div><h1>NPR 230</h1> </div>
                <div>
                     {/* cart section  */}
           <div id='cartsection'>
              <div id='cart'>
                <div id="subtractcounter"><a href='/' onClick={(event)=>{event.preventDefault();Sub();}}><GrSubtractCircle size={22} /></a></div>
                <p>{beforecount}</p>
                <div id="addcounter"><a href='/' onClick={(event)=>{event.preventDefault();Add();}}><MdAddCircle  size={22}/></a></div>
                <a href=''><FaCartShopping size={25} id='cartitm' /></a>
              </div>
            </div>
            

                </div>
            </div>
         </div>
    </div>
  )
}
