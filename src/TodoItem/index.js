import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {

    return (
  
      <li className="TodoItem">
        
        {/* Aqui nos toca usar clases dinámicas para el CSS */}
        {/* Si recibo la propiedad 'props.completed' y si es verdadera, entonces quiero que me agregue la nueva clase "Icon-check--active" */}
        {/* cuando el usuario de clic en el icono del chulito, debería actualizar el actualizador del estado 'setTodos' en el componente padre 'App', para eso usamos 'onClick' */}
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
          
        {/* Aqui aplicamos lo mismo, pero para que destache aquellos TODOs que aun no hayan sido realizados */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        
        {/* aqui implementamos la misma lógica utilizada para completa todos, pero ests vez para eliminar todos */}
        <DeleteIcon
        onDelete={props.onDelete}
        />
        
      </li>
  
    );
  
}

export { TodoItem };