import React from 'react'
import "../SCSS/Signinup.scss"
import Signin from '../Component/Signin';
import Signup from './Signup';

import {  Routes , Route , Link} from 'react-router-dom'

export default function Signinup({image}) {
   
   return (
        <div id='signinup'>
                <div id='imagesection'  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/coverone.jpeg)` }} ><img alt='Foodie Finder' src={image} width={"40%"}></img><br></br></div>
                <div id='form'>
                
                
                <Routes >
                        <Route path="/Signin" element={<Signin image = {image}/>} />
                        <Route path="/Signup"  element={<Signup  image = {image}/>} />
                </Routes>
                        
                </div>
        </div>)
}
