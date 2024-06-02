import React from 'react';

function TodoForm() {
    return (
        <form>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
            />
        </form>
    );
}

export { TodoForm };