import React from 'react'
import {  Routes , Route } from 'react-router-dom'

import Signinup from './Signinup'
import Homepage from './Homepage'

export default function Routing() {
   return ( 
  
   
        <Routes >
            <Route path="/" element={<Homepage/>} />
            <Route path="/Signinup/*" element={<Signinup image = {`${process.env.PUBLIC_URL}/Images/logo.png`}/>} />
        </Routes>
   
   )

}
