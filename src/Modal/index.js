// este modal va a ser general, va a servir para lo que nosotros queramos, ya sea para 'todos', o si tuvieramos otra sección de la aplicación en el futuro
import React from 'react'; 
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        // aqui enviamos el modal al nuevo nodo en el 'index.html' principal que se encuentra en la carpeta 'public'
        document.getElementById('modal')
    );
}

export { Modal };