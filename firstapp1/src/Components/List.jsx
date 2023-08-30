import React, { useContext } from "react";
import Styles from "./Main.module.css";
import RenderItem from "./RenderItem";
import CreateCon from "../Context/Create";

function List() {
  const context_data = useContext(CreateCon);
  console.log(context_data.todo, "list");
  const todo_data = context_data.todo;
  return (
    <div className={Styles.List_div}>
      {todo_data.map((e,n) => {
        if(e!=""){
        return <RenderItem key={n} id={n} data={e}
            />;
        }
        else{
            console.log("item is deleted")
        }
       
      })}
    </div>
  );
}

export default List;
