
// using css file incluse
import Styles from "./App.module.css"
//importing component
import Input from "./Components/Input";
import List from "./Components/List";
import Provider from "./Context/Provider";
// importing context provider



function App() {
  return (
    <Provider>
   <div className={Styles.Main_div}>
     <h3>Todo</h3>
 <div className={Styles.Main_todo_div}>

<Input/>
<List/>

 </div>
   </div>
   </Provider>
  );
}

export default App;
