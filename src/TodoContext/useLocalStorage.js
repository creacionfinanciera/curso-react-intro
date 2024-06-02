import React from 'react';

// vamos a crear un 'custom hook' para todo lo referente a local storage para que nuestro componente 'App' quede mucho más limpio, todos los hooks deben llevar la palabra 'use' al principio
function useLocalStorage(itemName, initialValue) {
    
  // creamos el estado al interior del custom hook
  const [item, setItem] = React.useState(initialValue);
  // creamos un estado de carga porque apenas comienza a cargar nuestra aplicación, queremos que el usuario sepa que estamos cargando, y ya después cuando cargue la información, es decir, termine nuestro 'efecto', pues ya tendremos que decirle a ese estado 'loading' que sea false
  const [loading, setLoading] = React.useState(true); 
  // y vamos a crear un tercer estado para error por defecto en 'false', y si se presenta un error, pues entonces lo cambiamos a 'true'
  const [ error, setError ] = React.useState(false);

  // vamos a encapsular los llamados a localStorage en un efecto, porque no podemos depender de que localStorage de la respuesta en el tiempo que esperamos, por esto se maneja como un proceso asíncrono, se usa mucho tambien para las conexiones con las API
  React.useEffect(() => {
    setTimeout(() => {
      // envolvemos todo en un 'try catch' y si falla mostramos el error
      try {

        // lo primero que va a hacer nuestra aplicación es revisar si hay algo en localStorage, y si tiene información de nuestros 'todos', entonces ese va a ser nuestro estado inicial y sobre el cual vamos a hacer el resto de nuestras interacciones
        // ya después cuando actualicemos el estado, tendremos que tener mucho cuidado porque no solamente tendremos que actualizar el estado sino tambien ir actualizando localStorage
        // vamos a definir el estado inicial para localStorage
        const localStorageItem = localStorage.getItem(itemName);
        
        // cuando local storage esta vacío se rompe la aplicación, entonces vamos a asignarle un valor inicial por defecto para que esto no suceda
        let parsedItem;
        
        if (!localStorageItem) {
          // si esta variable es undefined, null, false
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // si esta variable si tiene algo guardado
          // convertimos lo que hay en local storage en un array nuevamente, recordemos que todo lo que se guarda en local storage es solamente un string
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        // si ya terminamos de cargar localStorage, le podemos decir a ese estado 'false'
        setLoading(false);

      } catch(error) {
        setLoading(false);
        setError(true);
      } 
    }, 2000);
    // a continuación para que solamente se renderice a primera vez, usamos '[]'
  },[]);

  // referente al local storage, cuando actualicemos el estado al completar todos o borrar todos, tambien debemos actualizar local storage, de lo contrario cuando recarguemos la página, se perderan los cambios realizados
  // entonces vamos a crear una función que acualice el estado y a local storage al mismo tiempo
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
  };

  return {
    item,
    saveItem, 
    loading, 
    error,
  };
  
}

export { useLocalStorage };