import React, { useContext, useRef } from 'react';
import Styles from './Main.module.css';
// importing create context
import CreateCon from '../Context/Create';




function Input() {
    const inp1=useRef();

const data_from_context=useContext(CreateCon)
console.log(data_from_context)

const inputhandler=()=>{
    
    data_from_context.add(inp1.current.value)
    inp1.current.value=""
}

  return (
    
    <div className={Styles.Input_div}>
        
        <input type="text" ref={inp1} placeholder='your todo' />
   <button onClick={inputhandler}>Add</button>
    </div>
  )
}

export default Input