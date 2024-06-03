import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
    
    return (

        <button
        className="CreateTodoButton"
        // en react no se pueden colocar directamente código de javascript, siempre debemos hacerlo a través de funciones
        onClick={

            () => {
                // aqui lo que hice fue llamar al actualizador del estado y no le envié ni true ni false, le envie una función que recibe un parámetro que representa el estado, y le retorné la negación de ese estado
                // esta es una nueva forma de actualizar el estado en una función, para que esta función reciba el estado anterior, y que nosotros podamos entonces actualizar el estado, dependiendo de como tuvieramos el estado anterior
                // es decir, si el estado era false, lo que estoy haciendo es volverlo true, y si era true lo voy a volver false
                setOpenModal(state => !state);
            }  

        }    
        >+</button>

    );

}

export { CreateTodoButton };