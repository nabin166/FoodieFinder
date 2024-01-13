import React from 'react'
import Categorytoggle from '../Component/Categorytoggle';
import Foodcarousel from '../Component/Foodcarousel';
import Footer from '../Component/Footer';
import Heading from '../Component/Heading';
import Ourrestaurant from '../Component/Ourrestaurant';


export default function Homepage() {
  return (<>
        <Heading/>
        <Categorytoggle/>
        <Ourrestaurant/>
        <Foodcarousel/>
        <Footer/>
       
    </>
  )
}
