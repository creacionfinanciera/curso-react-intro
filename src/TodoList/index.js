import './TodoList.css';

// cómo adentro del componente 'TodoList' ya estamos llamando los componentes 'TodoItem' en el componente principal 'App', debemos darle un manejo un poco diferente
// pasamos como argumento nuestras props
function TodoList({ children }) {
    return (
        // 'children' es la palabra mágica que vamos a escribir para que el componente 'TodoItem' se renderice en nuestro componente 'TodoList' por dentro del elemento 'ul' 
        <ul className="TodoList">
            { children }
        </ul>
    );
}

export { TodoList };