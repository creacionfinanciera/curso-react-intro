import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    // vamos a consumir el contexto de nuestra aplicación, igual que lo hemos hecho para otros componentes, para agarrar todas las propiedades que necesitemos
    const {
        // cuando le demos clic al boton de añadir, tenemos que agregar el TODO en alguna parte, es decir, guardarlo en el estado y en localStorage
        // esta función si la vamos a traer del contexto global
        addTodo,
        // esta propiedad es para cerrar el modal
        setOpenModal,
    } = React.useContext(TodoContext);

    // vamos a crear un nuevo estado local (no global) para poder guardar los nuevos TODOS, la razón por la que lo creamos aqui es que al contexto no le es necesario saber en cada momento, que escriben letra por letra los usuarios en el 'textarea', lo único que necesita es que cuando los usuarios le den click al botón de añadir, y solo en ese momento si saber cual es el texto que escribieron los usuarios
    const [ newTodoValue, setNewTodoValue ] = React.useState('');

    // con este evento, evitamos que la página se recargue por defecto    
    const onSubmit = (event) => {
        event.preventDefault();
        // 
        addTodo(newTodoValue);
        // en este caso lo único necesitamos hacer es cerrar el formulario, entonces le podemos enviar un 'false' y ya
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        // una caracteristica de los formularios es que tratan simpre de enviarle todas las etiquetas que tienen, por defecto a una URL, por eso se recarga la aplicación cuando le damos clic a alguno de los botones, entonces nosotros debemos tratar de controlar este comportamiento con javascript, entonces en vez de tratar de enviar esta información a una url, simplemente la vamos a guardar en localStorage
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                // de esta forma vinculamos la etiqueta 'textarea' con el estado local que creamos
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar  
                </button>
                <button 
                    // cuando metemos botones dentro de un formulario, el último botón que se encuentra en el HTML, lo interpreta como que es de type="submit", asi yo no se lo especifique como un atributo a la etiqueta 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Añadir  
                </button>
            </div>
        </form>
        
    );
}

export { TodoForm };