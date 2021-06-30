import { v4 as uuidv4 } from 'uuid'
import { AiOutlineSave } from 'react-icons/ai'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Form from '../../components/Form.js'
import TodoList from '../../components/TodoList.js'
import React,{useState, useEffect} from 'react'
import './createTodo.css';


function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("");
  const [filterTodos, setFilterTodos] = useState([]);

toast.configure()
useEffect(() => {
 if(localStorage.getItem('uuid') === null){
   localStorage.setItem('uuid',uuidv4())
 }
})

 useEffect(()=>{
( () =>{
    switch(status){
      case "completed":
        setFilterTodos(todos.filter((todo)=> todo.isCompleted === true));
      break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo)=> todo.isCompleted === false));
      break;
      default:
        setFilterTodos(todos)
      break;
    }
  }) ()
 }, [todos, status]);

 const submitToDataBase = (event)=>{
  event.preventDefault()
  const uuid = localStorage.getItem('uuid')
  const todoswithUUid = todos.map(todo => {
    return {
      ...todo,
      uuid
    }
  })
  fetch('http://localhost:8000/todos/create',{
      method : 'POST',
      mode:'cors',
      headers : {
          'Content-Type':'application/json'
      },
      body:JSON.stringify(todoswithUUid)
  }).then((data) => {
      console.log(data)
      toast('Your Todo List is saved', {position: toast.POSITION.TOP_CENTER})
  }).catch((error) =>{
      console.error(error)
      toast('error in saving',{position: toast.POSITION.TOP_CENTER})
  })
}

  return (
    <div className="App">
      <button onClick={submitToDataBase} type='submit' className='subButton '><AiOutlineSave/> </button>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} 
            setInputText={setInputText} setStatus={setStatus} ></Form>
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos}></TodoList>
    </div>
  );
}

export default App;
