import React, { useEffect, useRef, useState } from 'react'
import "../SCSS/Navbar.scss"
import { FaSearch } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function Navbar() {
  
//  Using useref 
//  const search = useRef();
//   const searchboxpopup = ()=>{
//     if( search.current.style.display== 'block'){
//       search.current.style.display= 'none';
//     }else{
//       search.current.style.display= 'block';
//     }
//    }

// using State
  const [searchvisible , searchhide] = useState(false);
function searchboxpopup(){
  searchhide((prevVisible) => !prevVisible);
}

  return (
    <>
    {/* first navbar */}
    <div id='firstnav'>
        <div><CgMail /><small>FoodieFinder36@gmail.com</small></div>
        <div><a href=''>Login</a><Link to="/Signinup">Signup</Link><a href=''><FaCartShopping size={25} id='cart' /></a></div>
    </div>
    {/* second navbar */}
    <div id='flexadd'>
         <div>
            <ul>
                <li><a href='#'><img id='logo' src={"images/logo.png"}></img></a></li>
            </ul>
        </div>
       <div id='searchbox'> <input style={{display:searchvisible?'block':'none '}}  id='inputsearch' type='text' placeholder='Search'></input><FaSearch id='icon' onClick={searchboxpopup}/></div>
        <div>
            <ul id='homemenu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                
            </ul>
        </div>
       
        
    </div>
    </>
  )
}
