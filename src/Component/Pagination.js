import React from 'react'
import '../SCSS/Pagination.scss'

export default function Pagination({totalposts, postsperpage , setcurrentpage}) {
    let pages = [];
    for(let i = 1 ; i <= Math.ceil(totalposts/postsperpage);i++){
        pages.push(i);
        
    }
    console.log(pages +"post" + totalposts +"perpost"+ postsperpage);
  return (
    
    <div><div id='pagination'>{pages.map((page,index)=>{
        return  <button onClick={()=>{setcurrentpage(page)}} id='button'  key={index}>{page}</button>
       
    }) } </div></div>
  )
}
