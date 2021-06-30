import React from 'react'

const Todo = ({ item, todo, todos, setTodos ,disabled}) =>{
    
    const deleteHandler =()=>{
     setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const compHandler =()=> {
        setTodos(todos.map((elem) => {
            if( elem.id === todo.id){
                return{
                    ...elem, isCompleted: !elem.isCompleted
                }
            }
            return elem;
        }))
    }

    return(
        <div className="todo">
        <li className={`todo-item ${todo.isCompleted? "completed" : ""}`}> {item} </li>
        <button onClick={compHandler} className={`complete-btn ${disabled ? 'hide-btn' : ''}`} disabled={disabled}>
            <i className='fas fa-check'></i></button>
        <button onClick={deleteHandler} className={`trash-btn ${disabled ? 'hide-btn' : ''}`} disabled={disabled}>
            <i className='fas fa-trash'></i></button>
      </div>
    )
}
export default Todo