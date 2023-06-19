
import Header from "./Header";
import './index.css';
import Content from "./Content";
import AddItem from "./AddItem";
import { useState } from 'react';



function App() {
  const [items, setIdems]=useState(JSON.parse(localStorage.getItem('todo_list'))
    
    );
    
    const[newItem,setNewItem] = useState('')
    
    const addItem = (item) =>{
      const id = items.length ? items[items.length - 1].id+1 : 1;
      const addNewItem = {id,checked:false,item}
      const listItems = [...items, addNewItem]
      setIdems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
      


    }


    const handleCheck = (id)  =>  {
     const listItems = items.map((item) =>  item.id===id ? {...item, checked:!item.checked }: item)
      setIdems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
      
      
   }

    const handleDelete= (id) => {
        const listItems = items.filter((item) => item.id!==id )
        setIdems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
    }  

    const handleSubmit = (e) => {
      e.preventDefault()

        if(!newItem)return;
        console.log(newItem)
        addItem(newItem)
        setNewItem('')
    }
    
    


  return (
  
    <div className="todo-list-container">
  <div className="App">  

    <Header />
    <AddItem
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
    
    
    /> 
   <Content
   items = {items}
   handleCheck = {handleCheck}
   handleDelete = {handleDelete}   
   
   
   />
  </div>
  </div>

  );
}

export default App ;
