import React, { useState } from 'react'
import CreateCon from "./Create"
function Provider(props) {

// using useState for data inseting from input
// you can use useReducer also
const [todo,setTodo]=useState([])


// creating add data into it
const add=(d)=>{
    let arr=[...todo]
    arr.push(d)
setTodo(arr)
//  console.log(todo)   
}
const Delete_todo=(id)=>{
    let arr=[...todo]
    arr[id]="";
setTodo(arr)
 console.log(todo)  
// alert(id) 
}
const edit_toto=(id,data)=>{
    let arr=[...todo]
    arr[id]=data;
setTodo(arr)
 console.log(todo)  
// alert(id) 
}
// so id not assign

  return (
    <CreateCon.Provider value={{add,todo,Delete_todo,edit_toto}}>

{props.children}

    </CreateCon.Provider>
  )
}

export default Provider