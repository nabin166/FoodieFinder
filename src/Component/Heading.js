import React from 'react'
import Navbar from './Navbar';
import "../SCSS/Heading.scss"


export default function Heading() {
  return (
    <> 
    <div id='maindiv'>
    
     <Navbar/>
     <div id='afternavbar'>
               <p id='enjoytext'> <strong id='strong'>Enjoy the favourite dishes </strong><br></br> <small id='small'> from your beloved restaurant delivered right to your doorstep.</small></p>
                <img src={"images/imagefirst.png"} id='imgright' width="40%"></img>

     </div>
    {/* top right corner circle */}
    <div id="head">
        <div id='circle'>
            <div id='insidecircle'>
            
            </div>
         </div>
     
     </div>
    </div>
    </>
  )
}
