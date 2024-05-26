// al importar una exportación que viene con un objeto, hace que yo no pueda equivocarme en el nombre del componente porque me saldría un error
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />
      
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />  
      </TodoList>
      
      <CreateTodoButton />

    </div>
  );
}

function TodoItem() {

  return (

    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>

  );

}

export default App;
