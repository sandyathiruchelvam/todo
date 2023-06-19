import React from 'react'



const AddItem = ({newItem,setNewItem,handleSubmit}) => {
     
  
  return (
  
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem" ></label>

        <input 
        id='addItem'
        type='text'
        placeholder='Enter new task'
        required
        value={newItem}
        onChange = {(e) => setNewItem(e.target.value)}
        />
      
        <button className='button'
          type='submit'
          aria-label='Add Item'>
        Add</button>
    </form>
  )

}

export default AddItem

