import React, { useContext } from "react";
import Styles from "./Main.module.css";
import CreateCon from "../Context/Create";

function RenderItem(props) {
  const data_from_context = useContext(CreateCon);

  const deleteHandler = (e) => {
    data_from_context.Delete_todo(e.target.id);
  };
//   edit handler
  const editHandler = (e) => {
    
    const id=e.target.id.slice(1)
    const edit_new_data=prompt('enter')
    console.log(id,edit_new_data)
   
    data_from_context.edit_toto(id,edit_new_data)
  };
  return (
    <div className={Styles.RenderItem_div}>
      <div className={Styles.div_data}>
        <span>{props.data}</span>
      </div>
      <div className={Styles.div_button}>
        <button onClick={editHandler}  className={Styles.btn} id={"e"+props.id}>Edit</button>
        <button onClick={deleteHandler} className={Styles.btn} id={props.id}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default RenderItem;
