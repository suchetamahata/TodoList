import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.css'

import CreateTodos from './pages/createTodo';
import ViewTodos from './pages/viewTodo';

const App = () => {
 return(
     <Router>
         <div>
             <header>
                 <h3> Your ToDo List</h3>
             </header>
             <h5 className='wel-text'> What would you like to do today? </h5>
             <ul className='linkss'>
                 <li>
                     <Link to='create'  className='card'> Create Todos </Link>
                 </li>
                 <li>
                     <Link to='view'  className='cardv' > View Todos</Link>
                 </li>
             </ul>
         </div>
         <Switch>
             <Route exact path='/create'>
                 <CreateTodos/>
             </Route>
             <Route path='/view/:uuid'>
                 <ViewTodos/>
             </Route>
         </Switch>
     </Router>
 )
}

export default App;