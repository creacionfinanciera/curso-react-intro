// al importar una exportación que viene con un objeto, hace que yo no pueda equivocarme en el nombre del componente porque me saldría un error
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {  
  // se usa much o que se separa la parte de la interfaz en un componente aparte
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  );
}

export default App;
