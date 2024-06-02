import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    
    // ahora vamos a crear otro estado de 'Todos' donde podamos guardar los estados que teniamos creados por defecto, porque en realidad los 'Todos' los crea el usuario
    // cual debería ser el estado inicial?, en este caso hemos definido que le de unos TODOs por defecto, y que ya después el usuario los utilice o los elimine si quiere
    const { 
        // esta es la forma de renombrar porpiedades
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    // vamos a crear un nuevo estado con 'useState' que es una función
    // usamos un array porque el estado no solamente se consume sino que tambien se actualiza    
    // cómo el estado en React.js es inmutable, lo que necesitamos es una función actualizadora del estado, controlada por React.js, para que pueda hacer todos sus procesos de inmutabilidad y no afecte al historial de estados de nuestro componente
    // para eso necesitamos un segundo elemento en nuestro array, que React nos envía desde 'useState', que por convención sería 'set_____'
    const [ searchValue, setSearchValue ] = React.
    // tambien nos permite definir un estado inicial, es decir, cuando rendericemos por primera vez nuestro componente, antes de actualizarlo
    // cual sería?, null, undefined, un string vacío?, va a depender de lo que necesitemos
    // en este caso vamos a usar un string vacío, porque este estado lo vamos a conectar con el input de los usuarios
    useState('');

    // creamos un nuevo estado para el modal
    // el estado por defecto de este modal es que este cerrado, es decir, 'false', y si ya queremos abrirlo pues llamamos a 'setOpenModal'
    const [ openModal, setOpenModal ] = React.useState(true);

    // entonces aqui ya podemos ver como al escribir en el input, se imprime en consola cada letra que escribimos 
    // console.log('Los usuarios buscan todos de ' + searchValue);

    // nos trajimos el estado del componente hijo 'TodoSearch', para desde aqui poderlo enviar a los componentes hijos, a través de 'props'

    // ahora necesitamos calcular los todos completados y el total de todos, según lo que vaya haciendo el usuario, para enviarle esto como props al componente de forma dinámica
    // el método filter devuelve un array con las coincidencias, y en este caso la condición es que devuelva aquellos elementos cuya propiedad 'completed' sea verdadera, y la doble negación '!!' convierte en booleano cualquier valor que podamos tener
    // Estos son estados derivados  
    const completedTodos = todos.filter(
        todo => !!todo.completed  
    ).length;
    const totalTodos = todos.length;

    // necesitamos otro estado derivado, para averiguar si lo que escribimos en el input y por ende tiene nuestro estado actualizado, está contenido en los todos existentes
    const searchedTodos = todos.filter(
        (todo) => {
            // todo lo que venga en mi 'todo.text' lo voy a convertir en minusculas
            const todoText = todo.text.toLowerCase();
            // todo lo que venga del input lo voy a convertir a minusculas
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    // aqui creamos la función actualizadora del estado, a partir de la primer función actualizadora del estado 'setTodos', la que utilizaremos para identificar cuando el usuario da clic en el chulo de verificación
    // al escribir esta función, vamos a poder reutilizarla para todos nuestros 'TodoItem'

    const completeTodo = (text) => {
        // creamos una copia del estado del array de todos
        const newTodos = [...todos];
        // ahora necesitamos saber cual modificar, y lo identificamos con una posición indice dentro del arreglo
        // entonces en esta función lo que hacemos es encontrar dentro del arreglo, el índice del elemento que coincide en su llave única 'key', que nosotros definimos anteriormente que fuera el texto, con la props 'text' que seria el todo seleccionado
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    // y esta función es para poder eliminar los todos
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        // usamos este metodo para cortar, le agregamos como primer parametro donde iniciamos el corte, y como segundo parámetro la cantidad de elementos que cortaremos
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };

// cómo podemos renderizar arrays?, por cada elemento dentro del array, vamos a renderizar un 'TodoItem'
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');