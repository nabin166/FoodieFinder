import React from 'react'
import "../SCSS/Ourrestaurant.scss"

export default function Ourrestaurant() {
    const restaurantName =[{"Restname":"Charcoal"},{"Restname":'Lime and Lemon'},{"Restname":"Black Forest"}];
  return (
    <div id='restaurant'>
        <div id='coverimg'><img src="Images/cover.jpeg"></img><h1>Are you Hungry ?<h2> Don't Wait </h2></h1></div>
        <div>
           
            <div id='restaurantname'>
                 {restaurantName.map(item=>(
                <div><h3>{item.Restname}</h3></div>
                ))}
            </div>
        </div>
    </div>
  )
}
