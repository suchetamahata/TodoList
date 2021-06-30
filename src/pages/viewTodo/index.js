import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
//import { toast } from 'react-toastify'
import Todo from '../../components/Todo.js'

const ViewTodos = () =>{
    const params = useParams();
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        (async ()=>{
            try{
                const response = await fetch(`http://localhost:8000/todos/listByuuid/${params.uuid}`,{
                    method :'GET',
                    mode:'cors',
                });
                console.log(response);
                const data = await response.json();
                console.log(data);
                setTodos(data);
            }catch(error){
                throw error;
            }
          })()
    },[])
   
    return todos.map((todo) => {
        return (
            <Todo setTodos={setTodos}
                todos={todos} 
                key={todo.id} 
                item={todo.item}  
                todo={todo}
                disabled={true} >
            </Todo>
        )
    })
      
}


export default ViewTodos