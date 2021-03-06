import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText, setStatus,}) =>{
    const inputFormHandler = (event) =>{
       setInputText(event.target.value)
    }
    const suubmitTodoHandler=(event)=>{
        event.preventDefault();
        setTodos([
            ...todos,
            {item: inputText, isCompleted:false, id: Math.random() *1000 },
        ]);
        setInputText("")
        //console.log(todos)
    }
    const statusHandler=(event)=> {
        setStatus(event.target.value)
    }
 
        return(
            <div>
        <form>
            <input value={inputText} onChange={inputFormHandler} type='text' className='todo-input'/>
            <button onClick={suubmitTodoHandler} type='submit' className='todo-button'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
            
        </form>
        
        </div>
    )
}

export default Form 