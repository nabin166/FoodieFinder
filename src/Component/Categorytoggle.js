import React, { useEffect } from 'react'
import "../SCSS/Categorytoggle.scss"
import Itemcard from './Itemcard';

function Categorytoggle() {
 const mainCategory =  [
    {
      "name": "Veg",
      "image": "images/veg.png"
    },
    {
      "name": "Non-Veg",
      "image": "images/nonveg.png"
    },
    {
      "name": "Liquor",
      "image": "images/liquor.png"
    },
    {
      "name": "Bakeries",
      "image": "images/bakery.png"
    }
  ];

  return (
    <>
    <div id='categoryloop'>
      {mainCategory.map(Category => (
      <div key={Category.name} id='Category'>
        <img id='img' src={Category.image} alt={Category.name} />
        <p>{Category.name}</p>
      </div>
    ))}
    </div>

    <Itemcard/>
        

    </>
  )
}

export default Categorytoggle