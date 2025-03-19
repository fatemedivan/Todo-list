import React, { useState } from "react";
import Todo from "./Todo";
import { FaPlus } from "react-icons/fa";

export default function TodoList() {
    const [todos , setTodos] = useState([])
    const [todoTitle , setTodoTitle] = useState('')
    const [status , setStatus] = useState('all')

    const handleSubmit = (e)=>{
        e.preventDefault()
        let newTodo = {
            id : todos.length + 1,
            title : todoTitle,
            completed : false
        }
        setTodos(prevTodos => [...prevTodos , newTodo])
        setTodoTitle('') 
    }
    const handleRemove = (id)=>{
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }
    const handleComplete = (id)=>{
        let newTodos =  [...todos]
        newTodos.forEach(todo => {
            if (todo.id === id) {
               todo.completed = !todo.completed
            }
       })
       setTodos(newTodos)
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoTitle} onChange={ e => setTodoTitle(e.target.value)} type="text" className="todo-input" maxLength="40" />
        <button className="todo-button" type="submit">
          <FaPlus size={20}/>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" value={status} onChange={ e => setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
            {status === 'completed' && todos.filter(todo => todo.completed).map(todo => (
                <Todo {...todo} key={todo.id} handleRemove={handleRemove} handleComplete={handleComplete}/>
            ))}
            {status === 'uncompleted' && todos.filter(todo => !todo.completed).map(todo => (
                <Todo {...todo} key={todo.id} handleRemove={handleRemove} handleComplete={handleComplete}/>
            ))}
    
            {status === 'all' && todos.map(todo => (
                <Todo {...todo} key={todo.id} handleRemove={handleRemove} handleComplete={handleComplete}/>
            ))}
        </ul>
      </div>
    </div>
  );
}
