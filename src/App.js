import React from 'react'
import {NewTitle}  from './NewTitle'
export const App = () => {
  
  const product=[
    {id:1,title:"chair",price:2000,toggle:false},
    {id:2,title:"table",price:2000,toggle:false},
    {id:3,title:"desk",price:2000,toggle:false},
  ]
 
  
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",columnGap:"10px",margin:"0px 10px 0px 10px"}}>
      {
      product.map(p => <NewTitle title={p.title} price={p.price} toggle={p.toggle}
      key={p.id}
      />
       
        
        

      
        
        
        )
      }
            
    </div>
  )
}
