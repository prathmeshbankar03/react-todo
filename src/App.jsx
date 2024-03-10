import { useState, useRef } from 'react';
import './App.css';

function App() {
  const ref = useRef(null);
  const [todos, setTodos] = useState(["Bring Groceries", "Code JavaScript"]);
  const [input, setInput] = useState("");
  const [complete, setComplete] = useState(false)

  const completed = () => {
    setComplete(true)
  }

  const deleteTodos = (index) => {
    const updatedTodos = [...todos]; 
    updatedTodos.splice(index, 1); 
    setTodos(updatedTodos);
  }

  const addTodos = (todo) => {
    const updatedTodos = [...todos]; 
    updatedTodos.push(todo); 
    setTodos(updatedTodos);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTodos(input);
    setInput("")
    ref.current.value = "";
  }




  return (
    <div className='todo-main' >
          <h1>BASIC TODO APP</h1>
          <form onSubmit={handleSubmit} className='input-form'>

            <input
            className='todo-input'
            ref={ref}
            type="text" 
            placeholder='Add a Task ✅'
            onChange={(e) => {setInput(e.target.value)}} 
            />

            <button
              type='submit'

              className='add-todo'
              disabled={!input}>
              Add Task
            </button>

          </form>

      {todos.map((user, index) => {
        return (
          <>
            <div className='todos-map'>
            <h2 onClick={completed} key={index}> {user} </h2>
            
            <svg onClick={() => {deleteTodos(index)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> 
            </div>
          </>
        )
      })}

    </div>
  )
}

export default App
