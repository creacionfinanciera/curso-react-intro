import './CreateTodoButton.css'

function CreateTodoButton() {
    
    return (

        <button
        className="CreateTodoButton"
        // en react no se pueden colocar directamente código de javascript, siempre debemos hacerlo a través de funciones
        onClick={

            (event) => {
                console.log('le diste click')
                console.log(event)
                console.log(event.target)
            } 

        }    
        >+</button>

    );

}

export { CreateTodoButton };