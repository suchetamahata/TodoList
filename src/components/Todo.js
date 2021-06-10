import React,{Component} from 'react'

const Todo = ({ text, todo, todos, setTodos }) =>{
    
    const deleteHandler =()=>{
     setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const compHandler =()=> {
        setTodos(todos.map((elem) => {
            if( elem.id === todo.id){
                return{
                    ...elem, completed: !elem.completed
                }
            }
            return elem;
        }))
    }

    return(
        <div className="todo">
        <li className={`todo-item ${todo.completed? "completed" : ""}`}> {text} </li>
        <button onClick={compHandler} className='complete-btn'>
            <i className='fas fa-check'></i></button>
        <button onClick={deleteHandler} className='trash-btn' >
            <i className='fas fa-trash'></i></button>
      </div>
    )
}
export default Todo