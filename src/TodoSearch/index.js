import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    
    const {
        searchValue,
        setSearchValue, 
    } = React.useContext(TodoContext);
    
    return (
        <input
            className="TodoSearch" 
            placeholder="Cortar cebolla"
            // asi conecto el valor del input con mi estado
            value={searchValue}
            onChange={(event) => {
                // con esto podemos guardar el valor que escriben los usuarios en el estado
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };