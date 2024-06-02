// esto es unicamente para 'Create React APP', y 'as' es para que no genere conflicto el 'ReactComponente' por repetirse al importar más de un archivo svg
import { ReactComponent as CheckSVG } from './img/check.svg';
import { ReactComponent as DeleteSVG } from './img/delete.svg';
import './TodoIcon.css'

// una vez tenemos listos los archivos svg, tenemos que importarlos, y para eso vamos a crear nuestra propia librería de iconos

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
};


function TodoIcon({ type, color, onClick }) {
    return (
        // usamos una etiqueta 'span' para respetar las clases del CSS que es el que determina en que posición se encuentran los iconos y otras cosas, para esto debemos usar clases dinámicas
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };