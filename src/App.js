import Form from './components/Form'
import TodoList from './components/TodoList'
import React,{useState, useEffect} from 'react'
import './App.css';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("");
  const [filterTodos, setFilterTodos] = useState([]);

 useEffect(()=>{
( () =>{
    switch(status){
      case "completed":
        setFilterTodos(todos.filter((todo)=> todo.completed === true));
      break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo)=> todo.completed === false));
      break;
      default:
        setFilterTodos(todos)
      break;
    }
  }) ()
 }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h2>Su's ToDo List</h2>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} 
            setInputText={setInputText} setStatus={setStatus} ></Form>
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos}></TodoList>
    </div>
  );
}

export default App;
