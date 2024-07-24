import React, { useRef } from 'react'
import { useState } from 'react'
import './App.css'
import { FaTrashAlt  } from "react-icons/fa";

const AddItem = ({items, setItems, deleteItem}) => {
    
    
  return (
    <ul >
    {items.map((el)=>(
        <li className='mainBottom' key={el.id}>
            <div className='bottom_1'>
                {el.newData}
            </div >
            <div className='bottom_1'>
                 {el.newKM}
            </div>
            
                <FaTrashAlt
                role='button'
                tanIndex ='0' 
                className='buttonAdd'
                onClick={()=> deleteItem(el.id)}/>
        </li>

    ))}
    </ul>
  )
}

export default AddItem
