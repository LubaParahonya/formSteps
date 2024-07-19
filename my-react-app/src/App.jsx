import React, { useRef } from 'react'
import { useState } from 'react'
import './App.css'
import AddItem from './AddItem';

function App() {
  const  [newData, setNewData] = useState();
  const  [newKM, setnewKM] = useState();
  const [items, setItems] = useState([]);
  const ref = useRef()
  const inputRef = useRef()

  const identic = (element)=>{
    items.forEach((el)=>{
        if(el.newData === element.newData){
          element.newKM += el.newKM;
        } else{ element.newKM}
        
    })
  }

  const addItem = (newData, newKM) => {
  const id = items.length? items[items.length -1].id + 1: 1
  const updateItem = {id, newData, newKM}
  identic(updateItem)
  const updateItems = [...items, updateItem]
  updateItems.sort((a, b) => new Date(a.newData) - new Date(b.newData));
  setItems(updateItems)
  }

  const hendalSubmit = (e) =>{
  e.preventDefault()
  addItem(newData, newKM)
  setnewKM('')
  setNewData('')
  
}

const deleteItem = (id)=>{
  const delItem = items.filter(el=> el.id !==id)
  setItems(delItem)

}



  return (
    
     <>
     <form className='mainDiv' onSubmit={hendalSubmit} >
      <div className='top'>
        <div className='partData'>
      <label htmlFor='data'>Дата(ДД.MM.ГГ)
        <input id='data' className='top_1' type='date' required value={newData} onChange={(e) => setNewData(e.target.value)} ref={ref} />
      </label>
      </div>
      <div className='partData'>
      <label htmlFor='km'>Пройдено км
        <input id='km' className='top_1' type='number' required value={newKM} onChange={(e) => setnewKM(e.target.value)} ref={inputRef}/>
      </label>
      </div>
      <div className='partData'> 
        <button className='top_1  ok' type='submit' onClick={()=> {ref.current.focus()
                                                                   inputRef.current.focus()}}>+</button>
        </div>
      </div>
      <div className='top'>
        <div className='middle_1'>Дата(ДД.MM.ГГ)</div>
        <div className='middle_1'>Пройдено км</div>
        <div className='middle_1'>Действия</div>
      </div>
      <div className='bottom'>
      
      </div>
      </form>
  < AddItem items={items} setItems={setItems} hendalSubmit={hendalSubmit} deleteItem={deleteItem} identic={identic}/>
  </>
  )
}

export default App
