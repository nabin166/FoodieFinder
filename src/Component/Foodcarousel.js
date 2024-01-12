import React, { useState } from 'react'

// I import all from itemcard.js here 
import "../SCSS/FoodCarousel.scss"
import { MdAddCircle } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";

export default function Foodcarousel() {

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
          "foodName": "Chococream",
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

      const [beforecount,setCounts]= useState(Array(cartitem.length).fill(0));

      const Add = (index) => {
        setCounts(
          (befcount)=>{
            const cnt = [...befcount];
              console.log(cnt[index]+=1);
              return cnt;
          }
        )  
       };
  
       const Sub = (index)=>{
        setCounts(
          (befcount)=>{
            const cnt = [...befcount];
            befcount[index] = Math.max(0, befcount[index] - 1);
            return cnt;
          }
        )
       }
  return (
    <div id='itemcarousel'>

    {cartitem.map((item,index)=>
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
                <div id="subtractcounter"><a href='/' onClick={(event)=>{event.preventDefault();Sub(index)}}><GrSubtractCircle size={22} /></a></div>
                <p>{beforecount[index]}</p>
                <div id="addcounter"><a href='/' onClick={(event)=>{event.preventDefault();Add(index)}}><MdAddCircle  size={22}/></a></div>
              
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
