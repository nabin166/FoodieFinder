import React from 'react'
import "../SCSS/Itemcard.scss"
import { MdAddCircle } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";

export default function Itemcard() {
    const cartitem = [
      {
        "restaurantName": "Black Forest",
        "foodName": "Burger",
        "foodPrice": 320,
        "foodImage": "/Images/food/burger.jpg"
      },
      {
        "restaurantName": "Slice and salt",
        "foodName": "pizza",
        "foodPrice": 420,
        "foodImage": "/Images/food/pizza.jpg"
      },
      {
        "restaurantName": "Charcoal",
        "foodName": "Carlsbergbeer",
        "foodPrice": 330,
        "foodImage": "/Images/food/carlsbergbeer.jpg"
      },
      {
        "restaurantName": "Slice and salt",
        "foodName": "chowmein",
        "foodPrice": 120,
        "foodImage": "/Images/food/chowmein.jpg"
      },
      {
        "restaurantName": "Black forest",
        "foodName": "Chocolate icecream",
        "foodPrice": 220,
        "foodImage": "/Images/food/icecream.jpg"
      },
      {
        "restaurantName": "Slice and salt",
        "foodName": "Kattiroll",
        "foodPrice": 100,
        "foodImage": "/Images/food/kattiroll.jpg"
      },
      {
        "restaurantName": "Lime and lemon",
        "foodName": "sandwich.jpg",
        "foodPrice": 140,
        "foodImage": "/Images/food/sandwich.jpg"
      },
      {
        "restaurantName": "Charcoal",
        "foodName": "Momo",
        "foodPrice": 180,
        "foodImage": "/Images/food/momo.jpg"
      }
 
    ]
  return (

    <div id='itemcard'>

    {cartitem.map((item)=>
    (
      <div> 
      {/* cart icon */}
    <a href=''><FaCartShopping size={25} id='cartitm' /></a>
      <div>
        <img src={item.foodImage} ></img>
        <div id='foodname'><small>{item.restaurantName}</small><h3>{item.foodName}</h3> 
        <div id='cartfooter'>
           <h4>NPR {item.foodPrice}</h4>
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

    ))
       
}   
      
    </div>
  )
}
