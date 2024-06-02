import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    
    // aqui vamos a usar un método mucho más comodo que usar las 'props' o 'Provider', que es 'useContext', es definitivamente mejor!!!!
    const {
        completedTodos,
        totalTodos, 
    } = React.useContext(TodoContext); 
    
    // cómo hacemos para que este título sea dinámico?, para eso utilizamos las props
    // así como las funciones en javascript reciben parámetros, los componentes reciben 'props', pero estas props por dentro son un objeto que tiene distintas propiedades
    // cada distinta prop que nos envíen, la vamos a recibir acá
    // podemos recibir todas las props así: 'function TodoCounter(props) { '
    // y después llamarlas dentro de la función así: 'props. total'
    // o usar las desestructuración, que es mucho más sencillo asi: 'function TodoCounter({ total, completed }) {'
    
    return (    
        
        totalTodos == completedTodos ?
        
            <h1 className='TodoCounter'>
                Felicidades, completaste todos tus TODOS!
            </h1>

            :

            <h1 className="TodoCounter">
                Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS    
            </h1>
    );
}

// me gusta hacer export nombrados, es decir, exportar objetos que por dentro tengan el componente que quiero exportar, y de esta forma nos evitamos errores
export { TodoCounter };