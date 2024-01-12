import React from 'react'
import "../SCSS/Footer.scss"


export default function Footer() {
  return (
    <div id='Footer'>
        <div id='coverimg'><div></div><h1>Order Now </h1><img src={"/Images/coverone.jpeg"}></img></div>
        <div id='foot'>
             <img id='logo' src='/Images/logo.png'></img> 
             <div className="footer-info">
          <p>
            Welcome to FoodieFinder, your ultimate destination for exploring a world of culinary delights. We're committed to delivering exceptional food experiences right to your doorstep.
          </p>
          <p>
            Discover a diverse range of cuisines, from local favorites to international delicacies, and indulge in the convenience of our swift and reliable food delivery services.
          </p>
          <p>
            At FoodieFinder, we believe in making every meal memorable. Join us on a gastronomic journey and satisfy your cravings with just a click.
          </p>
         
            </div>
            <hr></hr>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <div id='flexfoot' >
            <div>
                  <p>Email: info@foodiefinder.com</p>
                  <p>Phone: +977 986254758-</p>
            </div>
            <div>
                  <p>Facebook: fb/FoodieFinder</p>
                  <p>Instagram: Insta/FoodieFinder</p>
            </div>
          </div>
          <p style={{ textAlign:"center" }}>
            FoodieFinder &copy; 2024. All Rights Reserved.
          </p>
        </div>
        </div>
    </div>
  )
}
