import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext'; 
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
        <>
    
          {/* y aqui le definimos las props al componente */}
          {/* después comentamos las props porque vamos a usar la herramienta 'createContext', para enviar y recibir las props de forma global, y no entre componentes */}
          <TodoCounter 
            // completed={completedTodos} 
            // total={totalTodos} 
          />

          <TodoSearch
            // aqui enviamos el estado y el actualizador que definimos arriba como una 'prop', con el mismo nombre para no complicarnos
            // y estas prop tenemos que recibirlas en los componentes hijos
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
          />
          
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

            {searchedTodos.map(todo => (
              // siempre tenemos que enviarle una llave, indicando un artributo que no se repita
              // y tambien tenemmos que enviarle las props que definimos en el campo 'TodoItem'
              <TodoItem
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                // cuando se complete el chulo de verificación, vamos a enviarle un actualizador del estado que facilita un montón el cálculo, es decir, que se reciba una función que haga todo el cálculo y tache el todo completado
                onComplete={() => completeTodo(todo.text)}
                // esta es muy parecida, y sería para eliminar el todo cuando el usuario de clic en la X
                onDelete={() => deleteTodo(todo.text)}
              />  
            ))}
          </TodoList>
           
          <CreateTodoButton
            setOpenModal={setOpenModal}
          />

          {/* esta funcionalidad es para teletranportar etiquetas entre nodos de html, en este caso es para crear los nuevos todos */}
          {/* vamos a utilizau un estado 'openModal', y si es verdader que esta abierto, entonces deberiamos renderizar el modal */}
          {openModal && (
            <Modal>
              <TodoForm /> 
            </Modal>
          )}
          
        </>    
    );
}

export { AppUI };
