import React from 'react'
import "../SCSS/Signinup.scss"
import Signin from '../Component/Signin';



export default function Signinup() {
   
   return (
        <div id='signinup'>
                <div id='imagesection'  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/coverone.jpeg)` }} ><img src={"images/logo.png"} width={"40%"}></img></div>
                <div id='form'><Signin/></div>
        </div>)
}
