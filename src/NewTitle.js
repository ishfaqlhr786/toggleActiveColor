import React,{useState} from 'react'
import './NewTitle.css'
export const NewTitle = (props) => {
    const [title,setTitle]= useState(props.title)
    const [toggle,setToggle]= useState(props.toggle)
   // console.log(props.toggle)
    console.log(toggle)
 const changeTitle=()=>{
 
    setTitle("kkk")
  //  setToggle(!toggle)
    
 }
 const changeToggle=()=>{
    setToggle(!toggle)
  

    
 }

  return (
    <div className='item' style={{ backgroundColor: toggle ?
        
        "green" : "red" }}>

        <h1>Title: {title}</h1>
        <p>Price: {props.price}</p>
        <h6>toggle: {toggle.toString()}</h6>
        <button onClick={changeTitle}>Chaneg title</button>
        <button onClick={changeToggle} >Chaneg toggle</button>
    </div>
  )
}
