import React from 'react'
import Categorytoggle from '../Component/Categorytoggle';
import Foodcarousel from '../Component/Foodcarousel';
import Footer from '../Component/Footer';
import Heading from '../Component/Heading';
import Ourrestaurant from '../Component/Ourrestaurant';
import Fooddescription from './Fooddescription';


export default function Homepage() {
  return (<>
        <Fooddescription/>
        <Heading/>
        <Categorytoggle/>
        <Ourrestaurant/>
        <Foodcarousel/>
        <Footer/>
       
    </>
  )
}
