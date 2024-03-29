import React, { useState } from 'react'
import "../SCSS/Itemcard.scss"
import { MdAddCircle } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import Pagination from './Pagination';

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
    const totalitemcount = [];
    for(let j = 0 ; j<cartitem.length ;j++){
      totalitemcount.push(j);
    }
    const totalpostlength = totalitemcount.length;    
    const [beforecount,setCounts]= useState(Array(cartitem.length).fill(0));

    // for pagination
    const [currentpage,setcurrentpage] = useState(2);
    const [postsperpage,setpostsperpage] = useState(4);
    const lastpostindex = currentpage*postsperpage; 
    const firstpostindex = lastpostindex-postsperpage;
    const currentposts = cartitem.slice(firstpostindex,lastpostindex);
   
    // const Add =(event , index)=>{
    //   event.preventDefault();
    //   return aftercount(beforecount + 1);
    // }

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
      <>

    <div id='itemcard'>

    {currentposts.map((item,index)=>
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
    <Pagination totalposts ={ totalpostlength} setcurrentpage={setcurrentpage} postsperpage = {postsperpage}/>
    </>
  )
}
